import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const {name,email} = friend;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    
    return (
        <div>
            <p>This is Friend Detail: {friendId}</p>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default FriendDetail;