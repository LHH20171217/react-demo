import React from 'react';

function Head(props) {
    const { lastTodoId,addOneTodo} = props;
    const myInput = React.createRef();
    const _handleEvent = (e) => {
        // console.log(myInput.current)
        // 1. 判断是否是回车键
        if(e.keyCode ===13) {
            if(!myInput.current.value){
                alert('输入的内容不能为空！');
                return;
            }
            // console.log(myInput.current.value);
            const todo = {id:lastTodoId+1,title:myInput.current.value,finished:false}
            addOneTodo(todo)
            myInput.current.value = '';
        }

    }
    return (
        <div className="todo-header">
            <input
                ref={myInput}
                type="text"
                placeholder="请输入今天的任务清单，按回车键确认"
                onKeyDown={(e) => _handleEvent(e)}
            />
        </div>
    )
}



export default Head