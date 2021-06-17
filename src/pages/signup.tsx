import React from "react";
import Link from "next/link";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HeaderApp from "@/components/layouts/HeaderApp";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUp = () => {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: string) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <title>Sign Up - Daytech Stragram</title>
      <HeaderApp>
        <div className="site-card-border-less-wrapper pl-20">
          <Card
            title="Sign Up"
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
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  <Link href="/feeds">Sign Up</Link>
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </HeaderApp>
    </>
  );
};

export default SignUp;
