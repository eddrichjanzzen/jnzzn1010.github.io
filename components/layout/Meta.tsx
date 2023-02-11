import { NextSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { nextSeoConfig } from '../../next-seo-config';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: OpenGraph;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: nextSeoConfig.openGraph.locale,
          site_name: nextSeoConfig.openGraph.siteName,
          ...props.openGraph,
        }}
      />
      <title>Janzzen | Personal Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
