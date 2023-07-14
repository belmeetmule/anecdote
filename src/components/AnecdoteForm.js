import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = ()=>{

    const dispach = useDispatch();

    const addAnecdotes = async (event)=>{
        event.preventDefault()
        const note= event.target.anecdote.value
        
        if(note){
            event.target.anecdote.value=''
            dispach(createAnecdote(note));  
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