import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers:{
    newAnecdote(state, action){
      const anecdote = {
        id: getId(),
        content: action.payload,
        votes: 0
      }
      state.push(anecdote)
    },
    upVote(state, action){
      
      const anecdote = state.find(item => item.id===action.payload) //find note to change
      const changedNote = {...anecdote, votes: anecdote.votes+1} // alter the vote
      const newState = state.map(note=>note.id !==action.payload? note : changedNote) // return a new state
      return newState
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

export const {upVote, newAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer