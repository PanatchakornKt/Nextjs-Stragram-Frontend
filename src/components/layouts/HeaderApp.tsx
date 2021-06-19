import React from "react";
import Link from "next/link";
import { Divider, Typography, Button } from "antd";
import { AiOutlineHome } from "react-icons/ai";

const { Title } = Typography;

const HeaderApp = ({ children }) => {
  return (
    <>
      <title>Sign in - Daytech Stragram</title>
      <div>
        <Divider orientation="left">
          {" "}
          <Title level={2}>Daytech Stragram</Title>
        </Divider>
      </div>
      <div className="pl-12 mb-4">
        <label>
          <Button>
            {" "}
            <Link href="/signin">Sign in</Link>
          </Button>
        </label>
        <label className="pl-2">
          <Button type="primary">
            {" "}
            <Link href="/signup">Sign up</Link>
          </Button>
        </label>
      </div>
      {children}
    </>
  );
};

export default HeaderApp;
