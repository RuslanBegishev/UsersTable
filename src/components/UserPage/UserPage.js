import {useParams} from "react-router-dom";
import Card from "../Card/Card";
import React from "react";

function UserPage() {
    const { userId } = useParams();
    const [user, setUser] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
            .then((response) => response.json())
            .then((result) => {
                setUser(result.data);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <h1>Страница  пользователя {userId}</h1>
            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <Card
                    id={user.id}
                    email={user.email}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    avatar={user.avatar}
                />)
            }
        </div>
    )
}

export default UserPage;
