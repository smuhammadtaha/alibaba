
import './App.css';
import BasicGrid from './component/header';
import Navigation from './component/navigation';
import Slider from './component/slider';
import Carddesign from './component/card'
import Maincard from './component/maincard';
import Content from './component/content';
import Service from './component/service';

function App() {
  return (
    <div className="App">
<BasicGrid/>
<Navigation/>
<Slider/>
<Carddesign />
<Maincard/>
<Content/>
<Service/>
    </div>
  );
}

export default App;
