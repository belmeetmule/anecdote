import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Header from './components/Header'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { clearNotificaiton } from './reducers/notificationReducer'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()
  setTimeout(()=>{
    dispatch(clearNotificaiton())
  }, 2000)

  useEffect(()=>{
    dispatch(initializeAnecdotes())
  },[dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnecdoteList />} />
        <Route path="/create" element={<AnecdoteForm />} />
        <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
      </Routes>    
    </Router>    
    
  )
}

export default App