import Head from "next/head";
import seo from "json/seo.json";

interface MetaHeadProps {
  title?: string;
  description?: string;
}

const MetaHead = ({ title, description }: MetaHeadProps) => (
  <Head>
    <title>{title || seo.title}</title>
    <meta name="description" content={description || seo.description} />
    <meta property="og:title" content={title || seo.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url || "https://jungleehabit.com"} />
    <meta property="og:image" content={image} />
    <meta property="og:article:author" content="정리습관" />
  </Head>
);

export default MetaHead;
