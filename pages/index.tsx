import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>X</title>
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
