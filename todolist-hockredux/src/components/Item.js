import React,{useState} from 'react';

function Item(props) {
    // console.log(props)
    const { todo, changeTodoFinished ,removeTodoWithId} = props;
    const [showDelBtn,setShowDelBtn] = useState(false);
    const _hasShowBtn = flag => {
        setShowDelBtn(flag)
    }

    return (
        <li onMouseOver={()=>_hasShowBtn(true)}
        onMouseOut={()=>_hasShowBtn(false)}>
            <label>
                <input type="checkbox" onChange={() => changeTodoFinished(todo.id, !todo.finished)}
                    checked={todo.finished} />
                <span>{todo.title}</span>
            </label>
            <button
                className="btn btn-warning"
                style={{display: showDelBtn ? 'block' : 'none'}}
                onClick={()=>removeTodoWithId(todo.id)}
            >
                删除
                </button>
        </li>
    )
}

export default Item