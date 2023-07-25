import { useDispatch
 } from "react-redux"
 import { filterChanged } from "../reducers/FilterReducer";
const Filter = () => {
    
    const dispach = useDispatch();
    const handleChange = (event) => {
      dispach (filterChanged(event.target.value))
    }
    const filterStyle = {
      color: "#ddd",
      fontSize: "1.2rem",
    }
    const inputStyle = {
      background: "#ccc",
      borderRadius: "8px",
      border: "1px solid green",
      padding: "5px 10px",
      marginLeft: "10px",
      fontSize: "1.2rem",
      width: "150px",
      
    }
  
    return (
      <div style={filterStyle}>
        Filter <input onChange={handleChange} style={inputStyle} placeholder="search ..."/>
      </div>
    )
  }
  
  export default Filter