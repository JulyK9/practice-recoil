import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, textState } from "../store";
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';


const TodoList = () => {

  const todoList = useRecoilValue(todoListState);
  console.log(todoList)

  return (
    <div>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList