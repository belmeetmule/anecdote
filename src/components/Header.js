import React from 'react'
import Filter from './Filter'
import { Link } from 'react-router-dom'

const Header = () => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        overFlow: "hidden",
        padding: "10px 10px",
        borderBottom: "1px solid #ccc",
        marginBottom: "10px",
        background: "#151f30",
        color: "#131f20",
    }

    const headerStyle = {
        color: "rgb(12 222 240)",
        padding: "10px 10px",
        textDecoration: "none",
        fontSize: "2rem",
    }

    const overrideStyle = {
        fontSize: "1.2rem",
        color:"rgb(12 222 290)"
    }
    return (
        <div style={style}>
            <div style={{display:"flex,", alignItems:"center"}}>
                <Link to="/" style={headerStyle}>Anecdotes</Link>
                <Link to="/create" style={Object.assign({}, headerStyle, overrideStyle)}>Create New</Link>
            </div>
            <Filter />
        </div>
    )
}

export default Header