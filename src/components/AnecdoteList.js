import { useSelector, useDispatch } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'
import './AnecdoteList.css'


const AnecdoteList = ()=>{

    const anecdotes = useSelector(state => {
        console.log('filter in the aneclist', state)
        if(state.filter.length > 0){
            console.log('I was here', state.anecdotes)
            const res = state.anecdotes.filter(element=> element.content.includes(state.filter))
            return res
        }
        return state.anecdotes
    })

    const dispatch = useDispatch()

    
  const vote = (id) => {
    console.log('vote', id)
    dispatch(upVote(id))
  }

  // This is for sorting strings
  // const sortedAnecdotes = anecdotes.sort((a,b)=> (a.content > b.content)? -1 : (b.content > a.content) ? 1: 0)  
// const cardInline=  {
//         display: "flex",
//         border: "1px solid green",
//         flexDirection: "column",
//         marginBottom: "10px",
//         background: "#ccc",
//         borderRadius: "8px",
//         padding: "10px 0 0 0"
//     }

    const anecdoteBody ={
        color: "#28292d63",
        padding: "10px 10px",
    }



    return(
        <div>
                {anecdotes.sort((a,b)=> (b.votes - a.votes)).map(anecdote =>
                    <div key={anecdote.id} className='card'>
                        <div style={anecdoteBody}>
                            {anecdote.content}
                        </div>
                        <div style={{background: "#ff000047", color:"white", padding: "0 10px", display: "flex", gap: "10px", alignItems:"center"}}>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)} style={{padding: "3px 5px"}}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList