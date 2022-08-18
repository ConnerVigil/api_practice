import React, {useState} from 'react';
import axios from "axios";

const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Bitcoin = () => {
    const [Dollars, setDollars] = useState(0);
    const [Sterlings, setSterlings] = useState(0);
    const [Euros, setEuros] = useState(0);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setDollars(response.data.bpi.USD.rate_float);
            setSterlings(response.data.bpi.GBP.rate_float);
            setEuros(response.data.bpi.EUR.rate_float);
        });
    }, [Dollars, Sterlings, Euros]);

    return (
        <div className='APIContainer'>
            <h3>Bitcoin Prices API 💸</h3>

            <div className='pricesContainer'>
                <div className='currencyLine'>
                    <p>United States Dollar:</p>
                    <p className='value'>{Dollars}</p>
                </div>
                <div className='currencyLine'>
                    <p>British Pound Sterling:</p>
                    <p className='value'>{Sterlings}</p>
                </div>
                <div className='currencyLine'>
                    <p>Euro:</p>
                    <p className='value'>{Euros}</p>
                </div>
            </div>

        </div>
    )
}

export default Bitcoin;