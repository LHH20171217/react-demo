import React from 'react';

function Foot(props) {
    // console.log("Foot",props)
    const {finishedCount,totalCount,dealSelectedAllTodo,delCheckTodo} = props;
    return (
        <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={finishedCount === totalCount}
                        onChange={()=>dealSelectedAllTodo(finishedCount!==totalCount)}
                    />
                </label>
                <span><span>已完成{finishedCount}件</span> / 总计{totalCount}件</span>
                <button
                    className="btn btn-warning"
                    onClick={()=>delCheckTodo()}
                >
                    清除已完成任务
                </button>
            </div>
    )
}

export default Foot