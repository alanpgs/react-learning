import Header from './components/header/header';
import BgLine from './components/bgline/BgLine';
import Banner from './components/banner/banner';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BgLine />
      <Header />
      <Banner />
    </div>
  ) ;
}

export default App
