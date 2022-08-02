import './App.css';
import Driver from './components/Driver/Driver'
import Find from './components/Find/Find'
import Hero from './components/Hero/Hero'
import Luxury from './components/Luxury/Luxury'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
    </div>
  );
}

export default App;
