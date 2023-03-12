import React from 'react';
import Card from "../Card/Card";
import './CardList.css';
import {useNavigate} from "react-router-dom";

const CardList = ({ userList = [] }) => {
    let navigate = useNavigate();

    function handleCardClick(userId) {
        navigate(`/users/${userId}`);
    }

    // const userList = [
    //     {
    //         "id": 7,
    //         "email": "michael.lawson@reqres.in",
    //         "first_name": "Michael",
    //         "last_name": "Lawson",
    //         "avatar": "https://reqres.in/img/faces/7-image.jpg"
    //     },
    //     {
    //         "id": 8,
    //         "email": "lindsay.ferguson@reqres.in",
    //         "first_name": "Lindsay",
    //         "last_name": "Ferguson",
    //         "avatar": "https://reqres.in/img/faces/8-image.jpg"
    //     },
    //     {
    //         "id": 9,
    //         "email": "tobias.funke@reqres.in",
    //         "first_name": "Tobias",
    //         "last_name": "Funke",
    //         "avatar": "https://reqres.in/img/faces/9-image.jpg"
    //     },
    //     {
    //         "id": 10,
    //         "email": "byron.fields@reqres.in",
    //         "first_name": "Byron",
    //         "last_name": "Fields",
    //         "avatar": "https://reqres.in/img/faces/10-image.jpg"
    //     },
    //     {
    //         "id": 11,
    //         "email": "george.edwards@reqres.in",
    //         "first_name": "George",
    //         "last_name": "Edwards",
    //         "avatar": "https://reqres.in/img/faces/11-image.jpg"
    //     },
    //     {
    //         "id": 12,
    //         "email": "rachel.howell@reqres.in",
    //         "first_name": "Rachel",
    //         "last_name": "Howell",
    //         "avatar": "https://reqres.in/img/faces/12-image.jpg"
    //     }
    // ]
    return (
        <div className={'card-list'}>
            {userList.map((user) => {
                return (
                    <div className={'card-list__item'} key={user.id}>
                        <Card
                            id={user.id}
                            email={user.email}
                            firstName={user.first_name}
                            lastName={user.last_name}
                            avatar={user.avatar}
                            onClick={() => handleCardClick(user.id)}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default CardList;
