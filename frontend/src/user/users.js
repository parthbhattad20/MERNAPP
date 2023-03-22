import React from "react";

import UserList from "./UserList";

const User = () => {
    const USERS = [
        {
            id: "u1",
            name: "parth",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3aYPxHAQAXEukmYXbDxyrA&ust=1679578618945000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJi_hYjU7_0CFQAAAAAdAAAAABAE",
            places: 3,
        },
    ];

    return <UserList item={USERS} />;
};

export default User;
