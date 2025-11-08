import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import Head from 'next/head';
import BlogSection from '@/components/organisms/BlogSection';
export default function blogsPage({ blogs }) {
  return (
    <>
        <Head>
            <title>Blog - Dr. Kerim Sadullahoğlu</title>
            <meta name="description" content={`Dr. Kerim Sadullahoğlu olarak sunduğumuz farklı hizmetleri inceleyin.`} />
        </Head>

        <MultiPageHeader
            subtitle="Blog Paylaşımlarımız"
            title="Dr. Kerim Sadullahoğlu"
            isImage={false}
        />
       
        <BlogSection/>
    </>
  );
}
