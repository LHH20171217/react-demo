import {put,takeEvery,take,call} from "redux-saga/effects"
import {REQ_ALL_ITEM, GET_ALL_ITEM} from './actionTypes'

const getTodoList = () => {
    const todos = require('../data/todos')
    return todos
}

function* getAllItem() {
    const result = yield getTodoList();
    console.log(result);
    if(result.status === 200) {
        const todos = result.items;
        yield put({
            type: GET_ALL_ITEM,
            todos
        })
    }
}

function* mySaga() {
    // yield takeEvery(REQ_ALL_ITEM,getAllItem)
    while (true) {
        yield take(REQ_ALL_ITEM)
        yield call(getAllItem)
    }
}

export default mySaga;