import React from "react";
import Link from "next/link";
import { Divider, Typography, Button } from "antd";
import { AiOutlineHome } from "react-icons/ai";

const { Title } = Typography;

const HeaderApp = ({ children }) => {
  return (
    <>
      <title>Sign in - Daytech Stragram</title>
      <div className="pl-2">
        <Divider orientation="left">
          {" "}
          <Title level={2}>Daytech Stragram</Title>
        </Divider>
      </div>
      <div className="pl-20 mb-4">
        <label className="pl-2">
          <Button type="primary">
            {" "}
            <Link href="/signup">Sign Up</Link>
          </Button>
        </label>
        <label className="pl-2">
          <Button>
            {" "}
            <Link href="/signin">Sign In</Link>
          </Button>
        </label>
      </div>
      {children}
    </>
  );
};

export default HeaderApp;
