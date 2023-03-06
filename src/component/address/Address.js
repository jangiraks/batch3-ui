import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../env';

function Address() {
    const [Housenumber, setHousenumber] = useState('');
    const [street, setstreet] = useState('');
    const [address, setaddress] = useState('');
    const [landmark, setlandmark] = useState('');
    const [city, setcity] = useState('');
    const [cities, setcities] = useState([]);
    const [state, setstate] = useState('');
    const [states, setstates] = useState([]);
    const [country, setcountry] = useState('');
    const [countries, setcountries] = useState([]);
    const [zip, setzip] = useState('');
    const [User, setUser] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
        getcountries();

    }, [])


    const getUsers = () => {
        axios.get('http://localhost:4000/user')
            .then(function (response) {
                // handle success
                //console.log(response.data)
                setUsers(response.data);
            })
    }
    const getcountries = () => {
        axios.get('http://localhost:4000/country')
            .then(function (response) {
                // handle success
                //console.log(response.data)
                setcountries(response.data);
            })
    }
    const getstates = (cid) => {
        axios.get(`${env.baseApiUrl}/state/country/${cid}`)
            .then(function (response) {
                // handle success
                //console.log(response.data)
                setstates(response.data);
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
        //alert(e.target.value)
        setcity(e.target.value);
    }
    const onstateChange = (event) => {
        let stateid = event.target.value;
        axios.get(`http://localhost:4000/city/state/${stateid}`)
            .then(function (response) {
                // handle success
                //console.log(response.data)
                setcities(response.data);
            })
    }
    const oncountryChange = (e) => {
        getstates(e.target.value);
        //setUser(e.target.value);
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
            <h1 className='creat'>User Address</h1>
            <table id="customers" className='customers'>
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
                        <td>country</td>
                        <td>
                            <select onChange={oncountryChange} >
                                <option value='0' >--Select Country--</option>
                                {countries.map((u) => {
                                    return <option value={u._id} >{u.name}</option>
                                })}

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>state</td>
                        <td>
                            <select onChange={onstateChange} >
                                <option value='0' >--Select State--</option>
                                {states.map((u) => {
                                    return <option value={u._id} >{u.name}</option>
                                })}

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>
                            <select onChange={oncityChange} >
                                <option value='0' >--Select City--</option>
                                {cities.map((u) => {
                                    return <option value={u._id} >{u.name}</option>
                                })}

                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>zip</td>
                        <td>
                            <input type={Text} value={zip} onChange={onzipChange}  ></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='button' colspan="2">
                            <input className='save' type={"button"} value="Save" onClick={onSave} ></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Address;