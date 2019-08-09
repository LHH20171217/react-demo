import { createSelector } from 'reselect'

const getTodos = todos => todos
export const getVisibleTodos = createSelector(
    [getTodos],
    (todos) => {
      return todos
    }
  )

const getFinished = finished => finished
export const getVisibleFinished = createSelector(
    [getFinished],
    (finished) => {
        return finished
    }
)