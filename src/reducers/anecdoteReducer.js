import { createSlice } from "@reduxjs/toolkit"

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
export default anecdoteSlice.reducer