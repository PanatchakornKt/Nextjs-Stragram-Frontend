import React from "react";
import HeaderApp from "@/components/layouts/HeaderApp";
import { Carousel } from "antd";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  return (
    <>
      <title>Daytech Stragram</title>
      <HeaderApp>
        <div className="pl-20 pr-20">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </HeaderApp>
    </>
  );
}
