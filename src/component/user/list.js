import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListUser() {

    const [userdata, setUserdata] = useState([]);

    //getUsers();
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {

        axios.get('http://localhost:4000/user')
            .then(function (response) {
                // handle success
                console.log(response.data)
                setUserdata(response.data);
            })
    }

    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Dob</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((u) => {
                        return <tr>
                            <td>{u.firstname}</td>
                            <td>{u.lastname}</td>
                            <td>{u.dob}</td>
                            <td>{u.mobile}</td>
                            <td>{u.email}</td>
                            <td>{u.gender}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div >
    );
}

export default ListUser;