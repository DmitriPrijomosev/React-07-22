import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Ostukorv from './Pages/Ostukorv';
import Avaleht from './Pages/Avaleht';

function App() {
	 return (
    <div className="App">
		<button className="nupp">Vajuta mind!</button>
		<img className="pilt" src="https://pritsiproff.ee/wp-content/uploads/2022/05/sodablasting-e1653563315450.jpg" alt="" />
		<link to="/avaleht">
			<button>Avalehele</button>
		</link>
		<Routes>
			{/* localhost:3000/avaleht            näitab seda HTMLi */}
			<Route path="avaleht" element={ <Avaleht leht /> } />
			<Route path="ostukorv" element={ <Ostukorv leht /> } />
		</Routes>
	  </div>
  );
}

export default App;
