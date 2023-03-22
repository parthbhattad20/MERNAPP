import React from 'react';
import './UserItem.css';

const UserItem = props =>{
    return(
       <li className='user-item'>
        <div className='user-item__content'>
            <div className='user-itema__image'>
                <img src={props.image} alt={props.name}/>

            </div>
            <div className='user-item__info'>
                <h2>
                    {props.name}
                </h2>
                <h3>
                    {props.placeCount} {props.placeCount === 1 ? 'place':'places'}
                </h3>

            </div>

        </div>

       </li>
    )
}



export default UserItem;