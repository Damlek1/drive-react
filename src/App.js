import './App.css';
import Driver from './components/Driver/Driver'
import Find from './components/Find/Find'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
    </div>
  );
}

export default App;
