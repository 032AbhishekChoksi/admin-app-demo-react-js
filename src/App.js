import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="wrapper">
     <Header/>
     <Menu/>
     <Dashboard/>
    </div>
  );
}

export default App;
