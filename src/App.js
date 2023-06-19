import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Profile from './components/Profile';
import SlideBar from './components/SlideBar';
import FooterCard from './components/FooterCard';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
      </header>
      <main className='main-container'>
        <Cards />
        <Profile />
        <SlideBar />
      </main>
      <footer>
        <FooterCard />
      </footer>
    </div>
  );
}

export default App;
