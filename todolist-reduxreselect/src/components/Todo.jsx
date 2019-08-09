import React, {Component} from 'react';
import Head from './Head'
import List from './List'
import Foot from './Foot'

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
}

export default Todos