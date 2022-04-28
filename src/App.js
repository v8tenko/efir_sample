import './App.css';
import 'bootstrap';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import Footer from "./components/Footer/Footer";
import { SignUpBtn } from './components/SingUpBtn/SignUpBtn';

function App() {
  return (
    <div className="container__wrapper">
      <div className="header"><Header /></div>
      <div className="footer"><Footer /></div>
      <SignUpBtn />
    </div>
  );
}

export default App;
