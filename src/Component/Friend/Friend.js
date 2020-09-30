import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, } from 'react-router-dom';

  

const Friend = (props) => {
    const {name,id} = props.friend
    const friendStyle = {
        border:'1px solid red',
        boxShadow:'3px 5px 10px',
        margin:'20px',
        padding:'10px',
        textAlign:'center'       
}

const linkStyle = {
        textDecoration:'none',
        fontWeight:'bold'       
}
    return (
        <div style={friendStyle}>
            <h3>ID: {id}</h3>
            <h2 style={{color:'Purple'}} >Name: {name}</h2>
            
                <Link style={linkStyle} to={`/friend/${id}`}>
                    <Button  variant="contained">Show Detail</Button>
                </Link>
                {/* <button onClick = {handleClick} >Show Detail</button> */}
            
        </div>
    );
};

export default Friend;