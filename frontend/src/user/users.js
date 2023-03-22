import React from 'react';

import UserList from './UserList';


const User = () => {
     const USERS = [{id:'u1',name:'parth',image:'https://unsplash.com/photos/s5kTY-Ve1c0',places:3}]



    return <UserList item={USERS}/>
};

export default User;
