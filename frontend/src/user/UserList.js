import React from 'react';

import UserItem from './UserItem';

const UserList = props => {
    if (props.item.length === 0){
        return(
            <div className='Center'>
                <h1>
                    No users found 
                </h1>
            </div>
        )
    }
    return(
        <ul>
            {props.item.map(user => {
                return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />

            })}
        </ul>
    )
};

export default UserList;