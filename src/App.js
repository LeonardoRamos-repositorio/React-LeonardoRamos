import './App.css';
import NavBar from './components/NavBar/Navbar';
import itemListContainer from './components/itemListContainer/itemListContainer.js';

function App() {
    return (
        <div className = "App">
        <NavBar/>
        <itemListContainer greeting = 'Bienvenidos'/>
        </div>
    );
}

export default App;