import Head from "next/head";
import WhiskeyList from "../components/WhiskeyList";

const discover = ({ whiskeys }) => {
  return (
    <div>
      <Head>
        <title>Discover</title>
      </Head>
      <WhiskeyList whiskeys={whiskeys} />
    </div>
  );
};

export default discover;

export const getStaticProps = async () => {
  const url = "https://evening-citadel-85778.herokuapp.com:443/whiskey/";
  const res = await fetch(url);
  const whiskeys = await res.json();

  return {
    props: {
      whiskeys,
    },
  };
};
