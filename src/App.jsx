import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import A from "./exam/A";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "음악 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createDate: new Date().getTime()
    }

    setTodos(
      [newTodo, ...todos]
    )
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo)=> {
        if(todo.id === targetId) {
        /* isDone의 값을 바꿔주면 됨 */
        return {
          ...todo,
          isDone : !todo.isDone
        };
                        
        }else {
        /* isDone의 값을 그대로 유지하면 됨 */
          return todo;
        }
      } )

    )
      return;
  }

  const onDelete = (targetId) => {
    setTodos( todos.filter((todo) => todo.id !== targetId ));
  }  

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;