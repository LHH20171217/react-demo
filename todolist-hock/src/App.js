import React, { useState } from 'react';
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '看一小时React的课程', finished: false },
    { id: 2, title: '打一小时篮球', finished: false },
    { id: 3, title: '游泳一小时', finished: false },
    { id: 4, title: '看书一小时', finished: false },
  ],
  );
  const [finishedCount, setfinishedCount] = useState(0)

  // 修改完成状态
  const changeTodoFinished = (todoId, isFinished) => {
    let finishedCountAdd = 0
    // 遍历
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.finished = isFinished;
      }
      if (todo.finished) {
        finishedCountAdd++
      }
    });
    //  更新状态
    setTodos([...todos])
    setfinishedCount(finishedCountAdd)
  }
  // 选中、取消所有
  const dealSelectedAllTodo = (flag) => {
    let finishedCountAdd = 0
    todos.forEach(todo => {
      todo.finished = flag
      if (todo.finished) {
        finishedCountAdd++
      }
    })
    //  更新状态
    setTodos([...todos])
    setfinishedCount(finishedCountAdd)
  };
  // 添加一条todo
  const addOneTodo = (todo) => {
    todos.push(todo);
    setTodos([...todos])
  };
  // 删除一条记录
  const removeTodoWithId = (todoId) => {
    let finishedCountAdd = 0
    todos.forEach((todo, index) => {
      if (todo.id === todoId) {
        todos.splice(index, 1);
      }
    })
    todos.forEach(todo => {
      if (todo.finished) {
        finishedCountAdd++;
      }
    });
    //  更新状态
    setTodos([...todos])
    setfinishedCount(finishedCountAdd)
  };

  // 删除已经完成的所有任务
  const delCheckTodo = () => {
    let tempArr = [];
    todos.forEach(todo => {
      if (!todo.finished) {
        tempArr.push(todo)
      }
    })
    // 更新状态
    setTodos(tempArr)
    setfinishedCount(0)
  }

  return (
    <div className="todo-container" >
      <div className="todo-wrap">
        <Head lastTodoId={todos.length === 0 ? 0 : todos[todos.length - 1].id} addOneTodo={addOneTodo} />
        <List todos={todos} changeTodoFinished={changeTodoFinished} removeTodoWithId={removeTodoWithId} />
        <Foot finishedCount={finishedCount}
          totalCount={todos.length}
          dealSelectedAllTodo={dealSelectedAllTodo}
          delCheckTodo={delCheckTodo} />
      </div>
    </div>
  );
}

export default App;