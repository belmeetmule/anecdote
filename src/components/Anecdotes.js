import { useSelector, useDispatch } from 'react-redux'

const Anecdotes = ()=>{

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    
  const vote = (id) => {
    console.log('vote', id)
  }

    return(
        <div>
             <h2>Anecdotes</h2>
                {anecdotes.map(anecdote =>
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

export default Anecdotes