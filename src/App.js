import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Aos from 'aos';
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import Loading from './Components/shared/Loading/Loading';
// import SignUp from './Pages/SignUp/SignUp';


const Home = lazy(() => import('./Pages/Home'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'))
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'))

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
              <Route path='/LogIn' element={<LogIn />} />
              <Route path='/SignUp' element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </IntlProvider>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
