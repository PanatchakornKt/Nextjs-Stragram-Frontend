import React from "react";
import { Divider, Typography } from "antd";
import DisplayPost from "@/components/DisplayPost";

const { Title } = Typography;

const Feeds = () => {
  return (
    <>
      <title>Feeds - Daytech Stragram</title>
      <div className="pl-2">
        <Divider orientation="left">
          {" "}
          <Title level={2}>Daytech Stragram</Title>
        </Divider>
      </div>
      <DisplayPost />
    </>
  );
};

export default Feeds;
