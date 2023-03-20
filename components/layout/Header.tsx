import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Header = () => {
  return (
    <>
      <Head>
        <title>Janzzen | Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="_3N9zk0ZR0qIXiEpE0GdITfAoNGYR7gMKyaImA4sP5s"
        />
      </Head>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
    </>
  );
};

export default Header;
