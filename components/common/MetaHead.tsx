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
    {/* <meta property="og:image" content={image} /> */}
  </Head>
);

export default MetaHead;
