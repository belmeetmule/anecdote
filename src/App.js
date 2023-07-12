import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { clearNotificaiton } from './reducers/notificationReducer'
import './App.css'

const App = () => {

  const dispatch = useDispatch()
  setTimeout(()=>{
    dispatch(clearNotificaiton())
  }, 2000)

  return (
    <div className="container">
     <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App