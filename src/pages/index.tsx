import React from "react";
import HeaderApp from "@/components/layouts/HeaderApp";
import { Carousel, Image } from "antd";

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
      <div className="w-100 max-w-4xl mx-auto p-5">
        <title>Daytech Stragram</title>
        <HeaderApp>
          <div className="pl-20 pr-20 md:justify-center">
            <Carousel autoplay>
              <div>
                <Image
                  style={contentStyle}
                  src="https://cdna.artstation.com/p/assets/images/images/018/239/240/large/arya-gharti-tilt.jpg?1558674557"
                />
              </div>
              <div>
                <Image
                  style={contentStyle}
                  src="https://c.pxhere.com/photos/76/8f/city_urban_colour_berlin_art_smart_germany_deutschland-271381.jpg!d"
                />
              </div>
            </Carousel>
          </div>
        </HeaderApp>
      </div>
    </>
  );
}
