import Header from './components/header/header';
import BgLine from './components/bgline/BgLine';
import IndexHome from './home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BgLine />
      <Header />
      <IndexHome />
    </div>
  ) ;
}

export default App
