import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Header from './components/Header'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { clearNotificaiton } from './reducers/notificationReducer'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import './App.css'

const App = () => {

  const dispatch = useDispatch()
  setTimeout(()=>{
    dispatch(clearNotificaiton())
  }, 2000)

  useEffect(()=>{
    dispatch(initializeAnecdotes())
  },[dispatch])

  return (
    <div className="container">
      <Header />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App