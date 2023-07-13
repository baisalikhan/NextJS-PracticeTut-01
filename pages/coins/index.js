import axios from "axios";
import { Card, Col, Row } from "antd";
import React from "react";
import styles from "../../styles/coins.module.css";
// const { Meta } = Card;
//SSG: Static Side Generation
//SSR: Server Side Rendering

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      <div class={styles.cards}>
        {coinData.coins.map((coin, index) => {
          return (
            <section className={styles.cards__item} key={index}>
              <Card
                hoverable
                className={styles.card}
                bordered={false}
                cover={
                  <img
                    alt="example"
                    className={styles.imgStyle}
                    src={coin.icon}
                  />
                }
              >
                <h1>{coin.name}</h1>
                <h5>{coin.price}</h5>
                {/* <Meta title={coin.name} description={coin.price} /> */}
              </Card>
            </section>
          );
        })}
      </div>
    </div>
  );
};

//getStaticProps: renders or pre-renders the page at build time

export const getStaticProps = async () => {
  // export const getServerSideProps = async () => {
  // export const getStaticProps = async ({prarams}) => {
  // const id = params.id; //get id from the url
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
