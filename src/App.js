import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <div className="container">
        <h2>BMI Calculator</h2>
      
      <form>
        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder = "Enter your weight value" value={weight} />
        </div>

        <div>
          <label>Height (feet)</label>
          <input type="text" placeholder = "Enter your height value" value={height} />
        </div>

        <div>
          <button className = 'btn' type = 'submit' > Submit </button>
          <button className = 'btn btn-outline' onClick={reload} type = 'submit' > Reload </button>
        </div>

        <div className = 'center'>
          <h3>Your BMI is : {bmi}</h3>
          <P>{message}</P>
        </div>



      </form>
      </div>


    </div>
  );
}

export default App;
