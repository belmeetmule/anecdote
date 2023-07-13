import { useDispatch } from 'react-redux'
import {newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ()=>{

    const dispach = useDispatch();

    const addAnecdotes = (event)=>{
        event.preventDefault()
        const note= event.target.anecdote.value
        
        if(note){
            event.target.anecdote.value=''
            dispach(newAnecdote(note));  
        }
    }

    return (
        <div>
                <h2>create new</h2>
                <form onSubmit={addAnecdotes}>
                    <div>
                        <input name="anecdote" />
                    </div>
                    <button type="submit">create</button>
                </form>
        </div>
    )
}

export default AnecdoteForm