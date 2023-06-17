import { useEffect, useContext } from "react";

import "./Home.scss";

import ContactList from "../../Contact_/components/ContactList"


const Home = () => {
    return <div>
                <ContactList />
            </div>;
};

export default Home;
