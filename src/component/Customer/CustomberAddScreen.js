//import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { Button, Col, Form, Input, Row, Select } from 'react';

//import React from "react";

const CustomberAddScreen = () => {
  return (
    <div className="customber-add-screen">
      <div className="customber-add">
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 13,
          }}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <Input placeholder="Enter Full Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
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
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Mobile"
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Please enter mobile Number",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Mobile"
                  maxLength={10}
                  minLength={10}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Registration Date"
                name="registrationdate"
              >
                <Input disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item colon={false} label="Refarence By">
                <Input placeholder="Reference By" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Landmark"
              >
                <Input
                  placeholder="Landmark"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Address Line 1"
              >
                <Input
                  placeholder="Address Line 1"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Address Line 2"
              >
                <Input
                  placeholder="Address Line 2"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Country"
              >
                <Input
                  placeholder="India"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="State"
              >
                <Select
                  placeholder="Select State"
                >
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="City"
              >
                <Select
                  placeholder="Select City"
                >

                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Lattitude"
              >
                <Input
                  placeholder="lattitude"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                colon={false}
                label="Longitude"
              >
                <Input
                  placeholder="longitude"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button >
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CustomberAddScreen;
