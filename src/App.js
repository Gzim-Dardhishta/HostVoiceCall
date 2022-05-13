import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Aos from 'aos';
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import Loading from './Components/shared/Loading/Loading';


const Home = lazy(() => import('./Pages/Home'));

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
        <Suspense fallback={<Loading />}>
          <IntlProvider>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </IntlProvider>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
