import React, { useState } from 'react';
import axios from 'axios';
import {Input} from 'antd'

function CreateUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setdob] = useState('');
    const [Mobile, setMobile] = useState();
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [Password, setPassword] = useState('');


    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const onLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const onDOBChange = (e) => {
        setdob(e.target.value)
    }

    const onMobileChange = (e) => {
        setMobile(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onGenderChange = (e) => {
        setGender(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onSave = () => {
        var data = {
            firstname: firstName,
            lastname: lastName,
            dob: dob,
            mobile: Mobile,
            email: Email,
            gender: Gender,
            password: Password
        }
        axios.post('http://localhost:4000/user/save', data)
            .then(function (response) {
                // handle success
                alert(response.data)
            })

    }

    return (
        <div>
            <h1 className='creat'>Creat Account</h1>
            <table id="customers" className='customers'>
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>
                            <Input type={'text'} value={firstName} onChange={onFirstNameChange} ></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>
                            <input type={'text'} value={lastName} onChange={onLastNameChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Dob</td>
                        <td>
                            <input type={'date'} value={dob} onChange={onDOBChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>
                            <input type={'number'} value={Mobile} onChange={onMobileChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type={'text'} value={Email} onChange={onEmailChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <label>Male</label>
                            <input type={'radio'} name={"gender"} value={"Male"} onChange={onGenderChange} ></input>
                            <label>Female</label>
                            <input type={'radio'} name={"gender"} value={"Female"} onChange={onGenderChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type={"password"} value={Password} onChange={onPasswordChange} ></input>
                        </td>
                    </tr>
                    <tr>

                        <td className='button' colspan="2">
                            <input className='save' type={"button"} value="Save" onClick={onSave} ></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >

    );
}

export default CreateUser;