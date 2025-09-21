import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoActions, RemoveTodoActions } from './actions/TodoActions';
import './App.css';

function App() {

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } =Todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo));
      setTodo(''); // Clear the input after adding
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoActions(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>TO-DO LIST</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Add your task'
          style={{width: '300px', height: '30px', padding: '10px', borderRadius: '5px', fontSize: '20px'}}
          onChange={(e) => setTodo(e.target.value)}
            value={todo} // Add this line
          />
          <button type='submit'
          style={{width: '80px', height: '50px', padding: '7px', borderRadius: '5px', fontSize: '20px', marginLeft: '10px'}}>
            Add</button>
        </form>

        <ul className='allTodos'>
          {
            todos && todos.map((t) => ( 
              <li key={t.id} className='singleTodo'>
            <span className='todoText'>{t.todo}</span>
            <button
            style={{fontSize: '20px', borderRadius : '40px', padding: '10px', border: '3px solid white', backgroundColor: 'red', marginLeft: '20px', marginRight: '10px'}}
            onClick={() => removeHandler(t)}
            >Delete</button>
          </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;