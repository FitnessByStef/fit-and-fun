import { fireEvent, render, screen } from '@testing-library/react';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({ send: jest.fn() }));

let MessageForm: typeof import('./MessageForm').default;
const send = emailjs.send as jest.MockedFunction<typeof emailjs.send>;

beforeAll(() => {
  const previous = { ...process.env };
  process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test-service';
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test-template';
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test-public-key';
  MessageForm = require('./MessageForm').default;
  process.env = previous;
});

afterEach(() => send.mockReset());

function prepareQuote() {
  render(<MessageForm quote />);
  fireEvent.change(screen.getByLabelText('Nom et prénom'), { target: { value: 'Camille Test' } });
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'camille@example.test' } });
  fireEvent.change(screen.getByLabelText('Type d’événement'), { target: { value: 'EVJF' } });
  fireEvent.change(screen.getByLabelText('Nombre de participantes'), { target: { value: '8' } });
  return screen.getByRole('button', { name: 'Envoyer la demande de devis' });
}

test('le devis transmet le motif et les détails, et attend la réponse du service', async () => {
  let accept!: () => void;
  send.mockImplementation(() => new Promise(resolve => {
    accept = () => resolve({ status: 200, text: 'OK' });
  }));

  fireEvent.click(prepareQuote());
  expect(send).toHaveBeenCalledWith('test-service', 'test-template', {
    name: 'Camille Test',
    email: 'camille@example.test',
    subject: 'Demande de devis – EVJF & Girls Night',
    message: expect.stringContaining('Participantes : 8'),
  }, 'test-public-key');
  expect(screen.queryByText('Votre message a été transmis.')).toBeNull();
  accept();
  await screen.findByText('Votre message a été transmis.');
});

test('un échec d’envoi conserve les champs et affiche le recours par e-mail', async () => {
  send.mockRejectedValue(new Error('Service indisponible'));
  fireEvent.click(prepareQuote());
  await screen.findByRole('alert');
  expect(screen.queryByText('Votre message a été transmis.')).toBeNull();
  expect(screen.getByLabelText('Nom et prénom')).toHaveProperty('value', 'Camille Test');
  expect(screen.getByRole('link', { name: 'écrivez-nous par e-mail' }).getAttribute('href'))
    .toContain('mailto:lebatimentgris@gmail.com?subject=');
});
