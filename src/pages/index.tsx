//@refresh reset
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';

import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projeto';
import Equipe from '../components/Equipe';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp';
import Projeto from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';

import 'aos/dist/aos.css';
import { getPrismicClient } from '../services/prismic';

interface IProjeto{
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps{
  projetos: IProjeto[];
}

export default function Home({ projeto }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Portfolio em ReactJS e NextJS</title>
        <meta
          name="description"
          content="Sou uma desenvolvedora full stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou uma desenvolvedora full stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <link rel="shortcut icon" href="../../assets/img/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="../../assets/img/favicon.ico" type="image/x-icon"/>
      </Head>

      <Header/>

      <main className="container">
        <HomeHero/>
        <Experiencias/>
        <Projetos/>
        <Projeto projetos={projeto}/>
        <Equipe/>
        <Conhecimentos/>
        <FormContact/>
      </main>
     
      <Footer/>
      <ScrollUp/>
    </HomeContainer>
  );
}

//Usando Prismic CMS
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
