
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <IntlProvider>
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
