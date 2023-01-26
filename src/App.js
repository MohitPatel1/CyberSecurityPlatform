import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import Homes1 from './component/Homes1';
import Homes2 from './component/Homes2';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Homes1 /><br /><br />
      <Homes2 />
      <Footer />
    </>
  );
}

export default App;
