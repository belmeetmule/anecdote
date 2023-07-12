import deepFreeze from 'deep-freeze'
import anecdoteReducer from '../reducers/anecdoteReducer'

describe('anecdoteReducer', () => {
  test('returns new state with action anecdotes/newAnecdote', () => {
    const state = []
    const action = {
      type: 'anecdotes/newAnecdote',
      payload: 'the app state is in redux store',
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState.map(s => s.content)).toContainEqual(action.payload)
  })

  test('returns new state with action anecdoteReducer/upVote', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        votes: 0,
        id: 1
      },
      {
        content: 'state changes are made with actions',
        votes: 3,
        id: 2
      }]
  
    const action = {
      type: 'anecdotes/upVote',
      payload: 2
    }
  
    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
  
    expect(newState).toHaveLength(2)
  
    expect(newState).toContainEqual(state[0])
  
    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      votes: 3,
      id: 2
    })
  })
})