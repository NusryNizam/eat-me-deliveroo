import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurant />
      <MenuList />
      <Footer />
    </div>
  );
}

export default App;
