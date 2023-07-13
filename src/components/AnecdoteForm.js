import { useDispatch } from 'react-redux'
import {newAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotesService';

const AnecdoteForm = ()=>{

    const dispach = useDispatch();

    const addAnecdotes = async (event)=>{
        event.preventDefault()
        const note= event.target.anecdote.value
        
        if(note){
            event.target.anecdote.value=''
            const newItem = await anecdotesService.createNewAnecdote(note)
            dispach(newAnecdote(newItem));  
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