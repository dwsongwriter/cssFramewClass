import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" class="bg-red-800">

        


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h3>Yo, I'm workig in React!</h3>
      </header>

        

      <div class="grid grid-cols-4 gap-4">
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">01</div>
        <div class="bg-red-800 rounded-lg min-h-300">05</div>
      <div class="grid grid-cols-subgrid gap-4 col-span-3">
    <div class="col-start-2 bg-blue-800">06</div>
  </div>
</div>
    </div>
  );
}

export default App;
