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
      <div className='home'>
        <h1 className="header">{homeText.header_1} <span className="year">{homeText.header_2}</span></h1>
      </div>
    </>
  )
}

export default Home;
