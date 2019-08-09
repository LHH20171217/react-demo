import React, {Component} from 'react';
import Head from './Head'
import List from './List'
import Foot from './Foot'
import {getAllItemAction} from '../store/actionCreators'
import store from '../store';

class Todos extends Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/* 头部 */}
                    <Head />
                    {/* 列表 */}
                    <List />
                    {/* 尾部 */}
                    <Foot />
                </div>
            </div>
        )
    }
    componentDidMount() {
        const action = getAllItemAction();
        store.dispatch(action)
    }
}

export default Todos