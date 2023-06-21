import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Profile from './components/Profile';
import SlideBar from './components/SlideBar';
import FooterCard from './components/FooterCard';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";  
import CTA from './components/CTA/CTA';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
  },
  {
    path: "cta",
    element: <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='main-container'>
        <CTA />
      </main>
      <footer>
      </footer>
    </div>,
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
