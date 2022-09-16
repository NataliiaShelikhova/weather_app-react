
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
       
      </header>
      <footer>
        <div className='container'> 
        This project was coded by Nata Shelikhova and it is <a href='https://github.com/NataliiaShelikhova/weather_app-react' target="_blank" rel="noopener noreferrer">open-sourced</a>
      </div>
      </footer>
    </div>
  );
}

export default App;
