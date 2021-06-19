import React, { useState } from "react";
import Link from "next/link";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HeaderApp from "@/components/layouts/HeaderApp";
import DisplayPost from "@/components/DisplayPost";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const InputSignIn = () => {
  const [details, setDetails] = useState<Auth>({ name: "", password: "" });
  const [user, setUser] = useState<string>({ name: "" });
  const [error, setError] = useState<string>("");

  const singInUser = {
    password: "12345",
  };

  const SignOutUser = () => {
    console.log("log out");
    setUser({ name: "" });
  };

  const onFinish = (details: Auth) => {
    console.log(details);
    if (details.password === singInUser.password) {
      setUser({
        name: details.name,
      });
    } else {
      setError("Invalid name or password");
    }
  };

  const onFinishFailed = (errorInfo: string) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {user.name != "" ? (
        <>
          <DisplayPost SignOutUser={SignOutUser} />
        </>
      ) : (
        <HeaderApp>
          <div className="site-card-border-less-wrapper pl-20">
            <Card
              title="Sign in"
              extra={
                <a href="/">
                  <HomeOutlined />
                </a>
              }
              style={{ width: 600 }}
            >
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                    value={details.name}
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                  />
                </Form.Item>
                {error != "" ? (
                  <div className="text-red-500 pl-44">{error}</div>
                ) : (
                  ""
                )}
                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </HeaderApp>
      )}
    </>
  );
};

export default InputSignIn;
