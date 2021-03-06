import React, {Component} from 'react';
// import store from './../store'
import {getAddItemAction} from './../store/actionCreators'
import {connect} from 'react-redux'

class Head extends Component{
    constructor(props){
        super(props);
        // 绑定ref
        this.myInput = React.createRef();
        // this.state = store.getState();

        // 订阅store的改变
        // this._handleStoreChange = this._handleStoreChange.bind(this);
        // store.subscribe(this._handleStoreChange);

    }

    render() {
        return (
            <div className="todo-header">
                <input
                    ref={this.myInput}
                    type="text"
                    placeholder="请输入今天的任务清单，按回车键确认"
                    onKeyDown={(e)=>this._handleEvent(e)}
                />
            </div>
        )
    }

    _handleEvent(e){
        const {todos} = this.props;
        const lastTodoId = todos.length === 0 ? 0 : todos[todos.length - 1].id;
        // 1. 判断是否是回车键
        if(13 === e.keyCode){
            // 2. 判断输入的内容是否为空
            if(!this.myInput.current.value){
                alert('输入的内容不能为空！');
                return;
            }
            // 3. 创建todo对象返回
            const todo =  {id: lastTodoId + 1, title: this.myInput.current.value, finished: false};
            // const action = getAddItemAction(todo);
            // store.dispatch(action);
            this.props.addTodo(todo)
            // 4. 清空内容
            this.myInput.current.value = '';
        }
    }

    // _handleStoreChange(){
    //     // 更新状态
    //     this.setState(store.getState())
    // }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo(todo) {
            const action = getAddItemAction(todo);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Head)