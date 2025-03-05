import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
    return (
        <>
            <HelmetProvider>
                <Router>
                    <Routes>
                        <Route path="/*" element={
                            <div className="App">
                                <HomePage />
                            </div>
                            } />
                    </Routes>
                </Router>
            </HelmetProvider>
        </>
    );
};

export default App;
