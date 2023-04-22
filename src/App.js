import { useRef, useState } from 'react';
import './App.css';

function App() {
  const nextId = useRef(1);
  const [inputValue, setInputValue] = useState({
    id: '',
    content: '',
  });
  const [inputValues, setInputValues] = useState([]);

  const onChange = (e) => {
    setInputValue({ content: e.target.value, id: nextId.current });
    nextId.current += 1;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setInputValues((prev) => [...prev, inputValue]);
    setInputValue({
      id: '',
      content: '',
    });
  };

  return (
    <div className="container">
      <div className="Wrap">
        <form onSubmit={onSubmit}>
          <input
            value={inputValue.content}
            type="text"
            onChange={onChange}
          ></input>
          <button>추가하기</button>
        </form>
        <p>Todo List</p>
      </div>
      <div>
        {inputValues.map((item) => (
          <Todo key={item.id} content={item.content} />
        ))}
      </div>
    </div>
  );
}
export function Todo(props) {
  return <div className="todo">{props.content}</div>;
}

export default App;
