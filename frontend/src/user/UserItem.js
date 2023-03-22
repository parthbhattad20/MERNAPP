import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar.js";
import Card from "../shared/Card";

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-itema__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placeCount}{" "}
                            {props.placeCount === 1 ? "place" : "places"}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UserItem;
