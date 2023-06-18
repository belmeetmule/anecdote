import { useSelector, useDispatch } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'

const AnecdoteList = ()=>{

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    
  const vote = (id) => {
    console.log('vote', id)
    dispatch(upVote(id))
  }

  // This is for sorting strings
  // const sortedAnecdotes = anecdotes.sort((a,b)=> (a.content > b.content)? -1 : (b.content > a.content) ? 1: 0)  

    return(
        <div>
             <h2>Anecdotes</h2>
                {anecdotes.sort((a,b)=> (b.votes - a.votes)).map(anecdote =>
                    <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList