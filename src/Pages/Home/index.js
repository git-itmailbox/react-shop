import React, { useState } from "react";
import { Layout } from "antd";
import Card from "./Blocks/Card";

const { Header, Footer, Sider, Content } = Layout;

const data = [
  {
    id: 1,
    name: "шарик",
    price: 10,
    image:
      "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
  },
  {
    id: 2,
    name: "футболка",
    price: 40,
    image:
      "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
  },
  {
    id: 4,
    name: "шарик 2",
    price: 50,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
  },
];
export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onChange = () => {
    setIsFlipped(isFlipped);
  };
  return (
    <Layout>
      <Header>Header</Header>
      <Layout style={{ minHeight: "100hv" }}>
        <Sider>Sider</Sider>
        <Content>
          {data.map((el) => {
            return <Card item={el} />;
          })}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

// export default Home;
