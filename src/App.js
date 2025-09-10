import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TO-DO LIST</h2>

        <form>
          <input type="text" placeholder='Add your task'
          style={{width: '300px', height: '30px', padding: '10px', borderRadius: '5px', fontSize: '20px'}}
          />
          <button type='submit'
          style={{width: '80px', height: '50px', padding: '7px', borderRadius: '5px', fontSize: '20px', marginLeft: '10px'}}>Add</button>
        </form>

        <ul>
          <li>
            <span>FIRST TODO</span>
            <button
            style={{fontSize: '20px', marginTop: -5, borderRadius : '10px', padding: '10px', border: '1px solid white', backgroundColor: 'red', marginLeft: '20px', marginRight: '10px'}}
            >Delete</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;