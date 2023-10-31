import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({todos, onUpdate, onDelete}) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    return setSearch(e.target.value);
  }

  const filterTodos = () => {
    if(search === "") {
      /* 검색값을 입력하지 않았으면 기존값을 그대로 보여줌 */
      return todos;
    }
    /* 검색값으로 Filter를 걸어서 해당 값만 Return */
    /* 소문자로 전환하여 검색                     */
    return todos.filter((todo) => 
      todo.content
      .toLowerCase()
      .includes(search.toLowerCase()));
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input value={search} onChange={onChangeSearch}   placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
          {
             /* key field는 언제나 Unique해야 함 (필수) */
             /* 필터가 걸린 배열에 있는 값을 Return     */
             filterTodos().map((todo)=>
             <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>)
          }
      </div>
    </div>
  );
}