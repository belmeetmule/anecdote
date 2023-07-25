import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer';
import { Link } from 'react-router-dom'

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
        borderRadius: '10px', backgroundColor:'#151f30', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'10px', width:'400px', height: '300px',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    const inputStyle = {
        background: "#ccc",
        borderRadius: "8px",
        border: "1px solid #131f20",
        padding: "5px 10px",
        marginLeft: "10px",
        fontSize: "1.2rem",
        display: "flex",
        flex: "1",
    }

    const headerStyle = {
        color: "rgb(12 222 240)",
        padding: "10px 10px",
        textDecoration: "none",
        fontSize: "1.2rem",
        flex: "1",
    }

    return (
        
        <div style={style}>
                <h2>create new</h2>
                <form onSubmit={addAnecdotes} style={{width:'100%', display:'flex', flexDirection:'column', gap:'10px', padding: '15px', alignItems:'center', justifyContent:'center'}}>
                    <div>
                        <input name="anecdote" style={inputStyle} placeholder='Enter new anecdote here ...'/>
                    </div>
                    <button type="submit" style={inputStyle}>create</button>
                </form>
                <Link to="/" style={headerStyle}>Back To Anecdotes List</Link>
        </div>
    )
}

export default AnecdoteForm