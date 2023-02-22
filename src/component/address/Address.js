import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Address() {
    const [Housenumber, setHousenumber] = useState('');
    const [street, setstreet] = useState('');
    const [address, setaddress] = useState('');
    const [landmark, setlandmark] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');
    const [zip, setzip] = useState('');
    const [User, setUser] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () => {
        axios.get('http://localhost:4000/user')
            .then(function (response) {
                // handle success
                //console.log(response.data)
                setUsers(response.data);
            })
    }

    const onHousenumberChange = (e) => {
        setHousenumber(e.target.value);
    }
    const onUserChange = (e) => {
        alert(e.target.value)
        setUser(e.target.value);
    }
    const onstreetChange = (event) => {
        setstreet(event.target.value)
    }
    const onlandmarkChange = (e) => {
        setlandmark(e.target.value);
    }
    const onaddressChange = (event) => {
        setaddress(event.target.value)
    }
    const oncityChange = (e) => {
        setcity(e.target.value);
    }
    const onstateChange = (event) => {
        setstate(event.target.value)
    }
    const oncountryChange = (e) => {
        setcountry(e.target.value);
    }
    const onzipChange = (event) => {
        setzip(event.target.value)
    }
    const onSave = () => {
        var data = {
            user: User,
            housenumber: Housenumber,
            street: street,
            address: address,
            landmark: landmark,
            city: city,
            state: state,
            country: country,
            zip: zip
        }
        axios.post('http://localhost:4000/address/save', data)
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
                        <td>User</td>
                        <td>
                            <select onChange={onUserChange} >
                                {users.map((u) => {
                                    return <option value={u._id} >{u.firstname} {u.lastname} {u.mobile}</option>
                                })}

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Housenumber</td>
                        <td>
                            <input type={Text} value={Housenumber} onChange={onHousenumberChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td>
                            <input type={Text} value={street} onChange={onstreetChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>landmark</td>
                        <td>
                            <input type={Text} value={landmark} onChange={onlandmarkChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>
                            <input type={Text} value={address} onChange={onaddressChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>
                            <input type={Text} value={city} onChange={oncityChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>state</td>
                        <td>
                            <input type={Text} value={state} onChange={onstateChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>
                            <input type={Text} value={country} onChange={oncountryChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>zip</td>
                        <td>
                            <input type={Text} value={zip} onChange={onzipChange}  ></input>
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

export default Address;