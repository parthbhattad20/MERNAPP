import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModel';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Users = () => {
       const [isLoading ,setIsLoading] = useState(false);
       const [error ,seterror] = useState(false);
       const [loadedUsers,setLoadedUsers] = useState();


     
     useEffect(()=>{
      const sendRequest = async  () =>{
        setIsLoading(true);
        try{
          const response = await fetch('http://localhost:4000/api/users');

        const responseData = await response.json()

        if(!responseData){
          throw new Error(responseData.message)
        }
        setLoadedUsers(responseData.users)
        setIsLoading(false)
        }catch(err){
          
          seterror(err.message)

        }
        setIsLoading(false);

      };
      sendRequest();
      
     },[]);

     const errorHandler = ()=>{
      seterror(null)
     }

  return<React.Fragment>
    <ErrorModal error={error} onclear={errorHandler}/>
    {isLoading && <div className='center'>
        <LoadingSpinner/>
      </div>}
    {!isLoading && loadedUsers &&<UsersList items={loadedUsers} />}
  </React.Fragment> ;
};

export default Users;
