import axios from "axios";

//SSG: Static Side Generation
//SSR: Server Side Rendering

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin, index) => {
        return (
          <div key={index}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>$ {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

//getStaticProps: renders or pre-renders the page at build time

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
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
