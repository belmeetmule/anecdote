import { useDispatch, useSelector } from 'react-redux'
import { clearNotificaiton } from '../reducers/notificationReducer'



const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    position: 'fixed',
    top: 0,
    right:0,
    borderRadius: 8,
    color: '#673AB7',
    transition:'all .3s',
    background: 'white'
  }

  const notification = useSelector(state => {
    return state.notification
  })

  const dispatch = useDispatch();

  if(notification !== ""){
   
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
}

export default Notification