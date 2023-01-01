import './App.css';
import Goal, {Garage} from './components/garage'

function App() {
 
  const cars = ['Volvo', 'BMW', 'Audi', 'Mercedes', 'BMW'];

  return (
    <div className="App">
      <Goal isGoal={false} />
    </div>
  );
}

export default App;
