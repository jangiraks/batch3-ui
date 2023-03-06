import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import Table from '../common/OsTable';

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

    const columns = [{
        Header: 'First Name',
        accessor: 'firstname'
    }, {
        Header: 'Last Name',
        accessor: 'lastname'
    }]
    return (
        <div>
            <Table
                data={userdata}
                columns={columns}
            />
        </div>
    );
}

export default ListUser;