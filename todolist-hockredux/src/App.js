import React, { useState, useReducer } from 'react';
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'
import reducer from './store/reducer'
import { defaultState } from './store/state'

import { getDelItemAction, getChangeItemFinishedAction, getIsCheckedAll, getAddItemAction, getRemoveFinishedItemAction } from './store/actionCreators'

function App() {

  const [todos] = useState(
    defaultState.todos
  );
  const [finishedCount] = useState(defaultState.finishedCount)

  const state = {
    todos,
    finishedCount
  }

  const [newState, dispatch] = useReducer(reducer, state);
  

  // 修改完成状态
  const changeTodoFinished = (todoId, isFinished) => {
    dispatch(getChangeItemFinishedAction(todoId, isFinished))
  }
  // 选中、取消所有
  const dealSelectedAllTodo = (flag) => {
    dispatch(getIsCheckedAll(flag))
  };
  // 添加一条todo
  const addOneTodo = (todo) => {
    dispatch(getAddItemAction(todo))
  };
  // 删除一条记录
  const removeTodoWithId = (todoId) => {
    dispatch(getDelItemAction(todoId))
  };

  // 删除已经完成的所有任务
  const delCheckTodo = () => {
    dispatch(getRemoveFinishedItemAction())
  }

  return (
    <div className="todo-container" >
      <div className="todo-wrap">
        <Head lastTodoId={todos.length === 0 ? 0 : todos[todos.length - 1].id} addOneTodo={addOneTodo} />
        <List todos={newState.todos} changeTodoFinished={changeTodoFinished} removeTodoWithId={removeTodoWithId} />
        <Foot finishedCount={newState.finishedCount}
          totalCount={newState.todos.length}
          dealSelectedAllTodo={dealSelectedAllTodo}
          delCheckTodo={delCheckTodo} />
      </div>
    </div>
  );
}

export default App;