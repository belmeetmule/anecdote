import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotesService'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:{
    newAnecdote(state, action){
      state.push(action.payload)
    },

    upVote(state, action){
      
      const anecdote = state.find(item => item.id===action.payload) //find note to change
      const changedNote = {...anecdote, votes: anecdote.votes+1} // alter the vote
      const newState = state.map(note=>note.id !==action.payload? note : changedNote) // return a new state
      return newState
    },

    appendAnecdotes(state, action){
      return state.concat(action.payload)
    },

    setAnecdotes(state, action){
      return action.payload
    }
  }

})

// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'VOTE':
//       const anecdote = state.find(item => item.id===action.payload.id)
//       const changedNote = {...anecdote, votes: anecdote.votes+1}  
//       return state.map(note=>note.id !==action.payload.id? note : changedNote)
//     case 'NEWNOTE':
//       return [...state, action.payload]
//     default:
//       return state
//   }
  
// }

// export const upVote = (id)=>{
//   return {
//     type: 'VOTE',
//     payload:{
//       id
//     }
//   }
// }

// export const newAnecdote = (note)=>{
//   return {
//     type: 'NEWNOTE',
//     payload: {
//       id: getId(),
//       content: note,
//       votes: 0
//     }
//   }
// }

export const {upVote, newAnecdote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newItem = await anecdoteService.createNewAnecdote(content)
    dispatch(newAnecdote(newItem))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdote = anecdotes.find(item => item.id === id)
    const changedAnecdote = {...anecdote, votes: anecdote.votes+1}
    const newItem = await anecdoteService.updateAnecdote(id, changedAnecdote)
    dispatch(upVote(newItem.id))
  }
}
export default anecdoteSlice.reducer