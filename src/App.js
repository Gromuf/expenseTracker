import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Recap from './components/recap';
import Filter from './components/Filter';
function App() {
  return (
    <div className='container'>
      <Form />
      <Filter selector={['Groceries', 'Utilities', 'Entertainment']} />
      <Recap />
    </div>
  )
}

export default App;
