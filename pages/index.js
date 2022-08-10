import Head from 'next/head'
import homeText from 'assets/texts/home.json';

const Home = () => {
  return (
    <>
      <Head>
        <title>Japan 2019</title>
        <meta name='description' content='Japan' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{homeText.header_1} <span>{homeText.header_2}</span></h1>
    </>
  )
}

export default Home;
