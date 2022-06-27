import logo from './logo.svg';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
	const Avaleht = <div>Avalehe leht</div>;
  return (
    <div className="App">

		  <button className="nupp">Vajuta mind!</button>
		  <img className="pilt" src="https://pritsiproff.ee/wp-content/uploads/2022/05/sodablasting-e1653563315450.jpg" alt="" />
		  <link to="/avaleht">
			  <button>Avalehele</button>
		  </link>
		  <Routes>
			  {/* localhost:3000/avaleht            näitab seda HTMLi */}
			  <Route path="avaleht" element={ <Avalehet /> } />
			  <Route path="ostukorv" element={ <Ostukorvi leht /> } />
		  </Routes>
	  </div>
  );
}

export default App;
