import React from "react";
import './UserList.css';
import Card from "../shared/Card"

import UserItem from "./UserItem";

const UserList = (props) => {
    if (props.item.length === 0) {
        return (
            <div className="Center">
                <Card>
                <h1>No users found</h1>
                </Card>
            </div>
        );
    }
    return (
        <ul>
            {props.item.map((user) => {
                return (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />
                );
            })}
        </ul>
    );
};

export default UserList;
