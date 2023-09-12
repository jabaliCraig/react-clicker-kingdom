import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Success from './components/Success';


function App() {

	return (
		<Router>
			<div className='app-container'>
				<Routes>
					<Route 
					  path='/react-clicker-kingdom' 
						element={<Main />} 
					/>
					<Route 
					  path='/success' 
						element={<Success />} 
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App;
