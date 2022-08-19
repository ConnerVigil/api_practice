import React, { useState} from 'react';
import axios from "axios";

const genderURL = "https://api.genderize.io?name=";
const ageURL = "https://api.agify.io?name=";
const nationalityURL = "https://api.nationalize.io?name=";

const NameGuess = () => {
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Age, setAge] = useState("");
    const [Nationality, setNationality] = useState("");

    function callAPIs() {
        axios.get(genderURL + Name).then((response) => {
            setGender(response.data.gender);
        });
        axios.get(ageURL + Name).then((response) => {
            setAge(response.data.age);
        });
        axios.get(nationalityURL + Name).then((response) => {
            setNationality(response.data.country[0].country_id);
        });
    }

    const handleChangeName = event => {
        setName(event.target.value);
    };

    return (
        <div className='APIContainer'>
            <h3>Personal Info APIs</h3>

            <div className='horizontalContainer'>
                <h6>Enter your name:</h6>
                <input type="text" id='nameField' value={Name} onChange={handleChangeName} />
                <button className='submitButton' onClick={() => callAPIs()} >Submit</button>
            </div>

            <div className='alignVertical'>
                <p className='nameGuessLine'>Your gender is: <strong>{Gender}</strong></p>
                <p className='nameGuessLine'>Your age is: <strong>{Age}</strong></p>
                <p className='nameGuessLine'>Your nationality is: <strong>{Nationality}</strong></p>
            </div>

        </div>
    )
}

export default NameGuess;