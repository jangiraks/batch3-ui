import { Button, Col, Form, Input, message, Row, Radio, DatePicker } from "antd";
import React, { useState } from "react";
import axios from 'axios';

//import axiosInstance from "../axiosInstance";

const Creatuser = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    const [gender, setGender] = useState();
    const [dob, setDOB] = useState();

    const onsave = () => {
        debugger
        var data = {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            mobile: mobile,
            email: email,
            gender: gender,
            password: password
        }
        axios.post('http://localhost:4000/user/save', data)
            .then(function (response) {
                // handle success
                alert(response.data)
            })

    };

    return (
        <div className="signup-form-page">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
            >
                <Row justify="center">
                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="First Name"
                            name="first name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your first name",
                                },
                            ]}
                        >
                            <Input
                                placeholder="First Name"
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="Last Name"
                            name="last name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your last name",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Name"
                                onChange={(e) => setLastname(e.target.value)}
                                value={lastname}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="Mobile :"
                            name="mobile"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your mobile Number",
                                },
                                {
                                    max: "10",
                                    massage: "Maxium 10 Digits",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Mobile"
                                maxLength={10}
                                minLength={10}
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="DOB :"
                            name="Date Of Birth"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter Your Date Of Birth ",
                                },
                            ]}
                        >
                            <DatePicker

                                placeholder="DOB"
                                onChange={(e) => setDOB(e)}
                                value={dob}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="Gender :"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "Please slect your gender",
                                },
                            ]}
                        >

                            <Radio.Group onChange={setGender} value={gender}>
                                <Radio value={1}>Male</Radio>
                                <Radio value={2}>Female</Radio>
                                <Radio value={3}>Other</Radio>

                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="Email :"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email",
                                    type: "email",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={13}>
                        <Form.Item
                            colon={false}
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password",
                                },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="end">
                    <Col span={11}>
                        <Button type="primary" htmlType="submit" onClick={onsave}>
                            Sign up
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Creatuser;
