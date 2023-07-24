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

    const style = {
        marginBottom: "10px",
        background: "#ccc",
        borderRadius: "8px",
        padding: "10px",
        background: "#131f40",
    }

    const inputStyle = {
        background: "#ccc",
        borderRadius: "8px",
        border: "1px solid #131f20",
        padding: "5px 10px",
        marginLeft: "10px",
        fontSize: "1.2rem",
        display: "flex",
    }

    return (
        
        <div style={style}>
                <h2>create new</h2>
                <form onSubmit={addAnecdotes}>
                    <div>
                        <input name="anecdote" style={inputStyle} placeholder='Enter new anecdote here ...'/>
                    </div>
                    <button type="submit" style={inputStyle}>create</button>
                </form>
        </div>
    )
}

export default AnecdoteForm