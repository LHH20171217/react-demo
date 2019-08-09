import React from 'react';
import Item from './Item'

function List(props) {
    // console.log("List",props)
    const {todos, changeTodoFinished,removeTodoWithId} = props;
    return (
        <ul className="todo-main">
            {
                todos.map((todo, index) => (
                    <Item
                        key={index+''+todo}
                        todo={todo}
                        changeTodoFinished={changeTodoFinished}
                        removeTodoWithId={removeTodoWithId}
                    />
                ))
            }
        </ul>
    )
}

export default List