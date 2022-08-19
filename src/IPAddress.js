import React, {useState} from 'react';
import axios from "axios";

const ipURL = "https://api.ipify.org?format=json";
const infoURL = "https://ipinfo.io/";
const token = "?token=2e6c386c283d43";

const IPAddress = () => {
    const [ipAddress, setipAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");

    React.useEffect(() => {
        getIPAddress();
    }, []);

    React.useEffect(() => {
        if (ipAddress) {
            getIPInfo(ipAddress);
        }
    }, [ipAddress]);

    function getIPAddress() {
        axios.get(ipURL).then((response) => {
            setipAddress(response.data.ip);
        });
    }

    function getIPInfo() {
        axios.get(infoURL + ipAddress + token).then((response) => {
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