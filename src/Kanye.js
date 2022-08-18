import React, {useState} from 'react';
import axios from "axios";

const URL = "https://api.kanye.rest/";

const Kanye = () => {
    const [quote, setQuote] = useState("refresh");

    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setQuote(response.data.quote);
        });
    }, []);

    return (
        <div className='APIContainer'>
            <h3>Kanye West Quotes API 🐻</h3>
            <p className='Quote'>{quote}</p>
            <p className='kanyeName'>-Kanye West</p>
        </div>
    )
}

export default Kanye;