import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Input } from "antd";

function ListUser() {
  const [userdata, setUserdata] = useState([]);
  const [filterFirstName, setFilterFirstName] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:4000/user").then(function (response) {
      // handle success     
      setUserdata(response.data);
      firstNameFilter(response.data);
    });
  };

  const firstNameFilter = (d) => {
    var returnArr = [];
    console.log(d)

    d.filter((k, v) => {
        returnArr.push({ text: k.firstname, value: k.firstname });
    });
    console.log(returnArr)
    setFilterFirstName(returnArr)
   
  };

  const columns = [
    {
      title: "First Name",
      key: "firstname",
      dataIndex: "firstname",
      filterSearch: true,
      filters: filterFirstName,
      onFilter: (value, record) => record.firstname.startsWith(value),
    },
    {
      title: "Last Name",
      key: "lastname",
      dataIndex: "lastname",
    },
  ];
  return (
    <div>
      <Table dataSource={userdata} columns={columns} />
    </div>
  );
}

export default ListUser;
