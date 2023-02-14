import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const onLastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const onSave = () => {
        //alert(firstName + ' ' + lastName)
        var data = {
            firstname: firstName,
            lastname: lastName,
            dob: "10-11-2000",
            mobile: 9982333574,
            email: "hemraj@gmail.com",
            gender: "male",
            password: 'abc'
        }
        axios.post('http://localhost:4000/user/save', data)
            .then(function (response) {
                // handle success
                alert(response.data)
            })

    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>
                            <input type={Text} value={firstName} onChange={onFirstNameChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>
                            <input type={Text} value={lastName} onChange={onLastNameChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Dob</td>
                        <td>
                            <input type={Text} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>
                            <input type={Text} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type={Text} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <input type={Text} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type={"password"} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type={"button"} value="Save" onClick={onSave} ></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CreateUser;