import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
//import { showNotification } from '../reducers/notificationReducer'
import {setNotification} from '../reducers/notificationReducer'
import './AnecdoteList.css'


const AnecdoteList = ()=>{

    const anecdotes = useSelector(({anecdotes, filter }) => {
        if(filter.length > 0){
            const res = anecdotes.filter(element=> element.content.toLowerCase().includes(filter.toLowerCase()))
            return res
        }
        return anecdotes
    })

    const dispatch = useDispatch()

    
    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted for:  ${anecdote.content}`, 10))
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
        color: "rgb(202 195 241 / 74%)",
        padding: "10px 10px",
    }

    return(
        
        <div className ="cards"> 
                {[...anecdotes].sort((a,b)=> (b.votes - a.votes)).map(anecdote =>
                    <div key={anecdote.id} className='card'>
                        <div style={anecdoteBody}>
                            {anecdote.content}
                        </div>
                        <div style={{background: "#131f20", color:"white", padding: "0 10px", display: "flex", gap: "10px", alignItems:"center"}}>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)} style={{padding: "3px 5px"}}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList