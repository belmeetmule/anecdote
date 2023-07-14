import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response.data

}

const createNewAnecdote = async (content) =>{
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateAnecdote = async (id, changedAnecdote) => {
    const response =await axios.put(`${baseUrl}/${id}`, changedAnecdote)
    return response.data
}

const anecdotesService = { getAll , createNewAnecdote, updateAnecdote}

export default anecdotesService