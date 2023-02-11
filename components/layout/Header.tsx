import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Header = () => {
  return (
    <>
      <Head>
        <title>Janzzen | Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
    </>
  );
};

export default Header;
