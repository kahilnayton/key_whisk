import { useRouter } from "next/router";
import Link from "next/link";

import React from "react";

const whiskey = ({ whiskey }) => {
  console.log(whiskey, 'whiskey')
  // take any parameters that are in the route
  // const router = useRouter()
  // const {id} = router.query
  return (
    <div>
      <h1 className="text-blue-600 border-b">{whiskey.title}</h1>
      <img src={whiskey.list_img_url} alt="Whiskey image" />
      <p>{whiskey.description}</p>
      <p className="text-blue-500">${whiskey.price}</p>
      <p className="text-sm">Average rating: <span className="border bg-blue-100">{whiskey.rating}</span></p>
      <a className="btn">
        <Link href="/">Go back</Link>
      </a>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://evening-citadel-85778.herokuapp.com:443/whiskey/${context.params.id}`
  );

  const whiskey = await res.json();

  return {
    props: {
      whiskey,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://evening-citadel-85778.herokuapp.com:443/whiskey`
  );

  const whiskeys = await res.json();

  const ids = whiskeys.results.map(whiskey => whiskey.id)

  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    // Turning to false means that if we go to something that isn't there in the data it will return a 404 page
    fallback: false
  }
}

export default whiskey;
