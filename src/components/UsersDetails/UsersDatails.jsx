import { useLoaderData } from "react-router-dom";


const UsersDatails = () => {
    const user = useLoaderData()
    const {name, website} = user;
    return (
        <div>
            <h2>Datails about user: {name}</h2>
            <p>website: {website}</p>
        </div>
    );
};

export default UsersDatails;