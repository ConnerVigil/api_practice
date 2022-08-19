import React, {useState} from 'react';
import axios from "axios";

const ipURL = "https://api.ipify.org?format=json";
const infoURL = "https://ipinfo.io/";

const IPAddress = () => {
    const [ipAddress, setipAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");

    // TODO figure out how to make both api calls at once

    React.useEffect(() => {
        getIPAddress();
    }, []);

    React.useEffect(() => {
        getIPInfo();
    }, [ipAddress]);

    function getIPAddress() {
        axios.get(ipURL).then((response) => {
            setipAddress(response.data.ip);
            console.log("IpAddress: " + ipAddress);
        });
    }

    function getIPInfo() {
        axios.get(infoURL + ipAddress + "/geo").then((response) => {
            setCity(response.data.city);
            setRegion(response.data.region);
            setCountry(response.data.country);
            setPostalCode(response.data.postal);
        });
    }

    return (
        <div className='APIContainer'>
            <h3>IP Address Info API 💻</h3>

            <div className='alignVertical'>
                <p className='nameGuessLine'>Your IP Address: <strong>{ipAddress}</strong></p>
                <p className='nameGuessLine'>Your city: <strong>{city}</strong></p>
                <p className='nameGuessLine'>Your region: <strong>{region}</strong></p>
                <p className='nameGuessLine'>Your country: <strong>{country}</strong></p>
                <p className='nameGuessLine'>Your postal code: <strong>{postalCode}</strong></p>
            </div>

        </div>
    )
}

export default IPAddress;