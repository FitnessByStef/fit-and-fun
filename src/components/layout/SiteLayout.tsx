import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../../styles/layout.css';
import Chatbot from '../common/ChatBot';

const SiteLayout = () => {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default SiteLayout;