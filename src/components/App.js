import "../styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Accueil from './Accueil';
import Footer from './Footer';
import Galerie from "./Galerie";
import Contacts from "./Contacts";
import NosServices from "./NosServices";

function App() {
  return (
    <div className='body'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/nos-services" exact element={<NosServices />} />
          <Route path="/galerie" exact element={<Galerie />} />
          <Route path="/contacts" exact element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
