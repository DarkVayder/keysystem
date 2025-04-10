import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components without lazy loading since we will manually handle loading
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Trust from './components/Trust';
import Offer from './components/Offer';
import Represent from './components/Represent';
import Compliance from './components/Compliance';
import TheyTrustUs from './components/TheyTrustUs';
import Process from './components/Process';
import Partner from './components/Partner';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

// Importing new pages
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

// Importing LoadingScreen with correct import
import { LoadingScreen } from './components/LoadingScreen';

// App component with routing
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2-second load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Sponsors />
              <Trust />
              <Offer />
              <Represent />
              <Compliance />
              <TheyTrustUs />
              <Process />
              <Partner />
              <GetStarted />
            </>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
