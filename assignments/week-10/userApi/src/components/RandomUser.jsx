import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("1st user added");
    }, []);

    useEffect(() => {
        console.log("Next user added");
        console.log(users);
    }, [users]);

    const handleClick = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api');
            const userData = response.data.results[0]; // Access the first user
            console.log(userData); // Log the user data
            setUsers(prevUsers => [
                ...prevUsers, // Spread the previous users
                {
                    name: `${userData.name.title}. ${userData.name.first} ${userData.name.last}`,
                    age: userData.dob.age
                }
            ]);
        } catch (e) {
            console.error("Error fetching data:", e); // Log the error
        }
    };

    return (
        <div>
            Random User
            <button onClick={handleClick}>Fetch Users</button>
        </div>
    );
};

export default RandomUser;