import './App.css';
import {Garage} from './components/garage'

function App() {
 
  const cars = ['Volvo', 'BMW', 'Audi', 'Mercedes', 'BMW'];

  return (
    <div className="App">
      <Garage cars={cars}/>
    </div>
  );
}

export default App;
