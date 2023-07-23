import React from 'react'
import Filter from './Filter'

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
    }
    return (
        <div style={style}>
            <h1 style={headerStyle}>Anecdotes</h1>
            <Filter />
        </div>
    )
}

export default Header