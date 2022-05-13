import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import Home from "./Pages/Home";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1350,
      once: true
    }, [])
  })
  return (
    <div className="App">
      <Router>
        <IntlProvider>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </Router>
    </div>
  );
}

export default App;
