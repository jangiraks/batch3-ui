import { Button, Col, Form, Input, message, Row } from "antd";
import { useState } from "react";
import axios from 'axios';



const MemberAddScreen = () => {

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();

  const onMemberAdd = () => {
    const data = {
      name: fullname,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
    };
    axios.post('http://localhost:4000/user/save', data)
      .then(function (response) {
        // handle success
        alert(response.data)
      })
  }

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
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input
                placeholder="Add Name"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
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
                  message: "Please Input Your email",
                  type: "email",
                },
              ]}
            >
              <Input
                placeholder="Add Email"
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
                  message: "Please input your Password",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Add Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
                  message: "Please input your mobile Number",
                },
                {
                  max: "10",
                  massage: "Maxium 10 Digits",
                },
              ]}
            >
              <Input
                placeholder="Add Mobile"
                maxLength={10}
                minLength={10}
                name="mobile"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item
              colon={false}
              label="Address :"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input Your address",
                },
              ]}
            >
              <Input
                placeholder="Add address"
                onChange={(e) => setAddress(e.target.value)}
                value={mobile}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col span={11}>
            <Button type="primary" htmlType="submit" onClick={() => onMemberAdd()}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MemberAddScreen;