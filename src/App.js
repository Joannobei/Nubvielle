import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import EditExpense from './components/EditExpense';
import Dashboard from './components/Dashboard';
import ExpensePage from './components/ExpensePage';

function App() {
  return (
    <div className="App">
  <Routes>
<Route path='/' element= {<Home />} />
<Route path='dashboard' element= {<Dashboard />} />
<Route path='expenses/edit-expense/:id' element= {<EditExpense />} />
<Route path='expenses' element= {<ExpensePage />} />


</Routes>
    </div>
  );
}

export default App;
