import { useDispatch
 } from "react-redux"
 import { filterChanged } from "../reducers/FilterReducer";
const Filter = () => {
    
    const dispach = useDispatch();
    const handleChange = (event) => {
      dispach (filterChanged(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter