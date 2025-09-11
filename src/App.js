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

        <ul className='allTodos'>
          <li className='singleTodo'>
            <span className='todoText'>FIRST TODO</span>
            <button
            style={{fontSize: '20px', borderRadius : '40px', padding: '10px', border: '3px solid white', backgroundColor: 'red', marginLeft: '20px', marginRight: '10px'}}
            >Delete</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;