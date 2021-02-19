import Container from "../components/Container";
import MoreStories from "../components/MoreStories";
import HeroPost from "../components/HeroPost";
import Intro from "../components/Intro";
import { getAllHomepage } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Stars from "../components/Stars";
import Layout from "../components/Layout";

export default function Index({ preview, allHomepage }) {
  const heroPost = allHomepage[0].node;
  const morePosts = allHomepage.slice(1);
  return (
    <Layout preview={preview}>
      <Head>
        <title>Keywhisk</title>
        <meta name="keywords" content="whiskey, ratings" />
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverimage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost._meta.uid}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allHomepage = await getAllHomepage(previewData);
  return {
    props: { preview, allHomepage },
  };
}
