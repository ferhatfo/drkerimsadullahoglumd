import services from '../../data/services.json';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';
import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import Head from 'next/head';
import Image from "next/image";
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
export async function getStaticProps() {
  return {
    props: {
      services,
    },
  };
}
export default function ServicesPage({ services }) {
  return (
    <>
        <Head>
            <title>Hizmetlerimiz - Dr. Kerim Sadullahoğlu</title>
            <meta name="description" content={`Dr. Kerim Sadullahoğlu olarak sunduğumuz ${services.length} farklı hizmetlerimizi inceleyin.`} />
        </Head>

        <MultiPageHeader
            subtitle="Hizmetlerimiz"
            title="Dr. Kerim Sadullahoğlu"
            isImage={false}
        />
       
        <div className="container mx-auto p-6 py-10 md:py-15 grid grid-cols-1 md:grid-cols-1 gap-6">
            {services.map((service) => {
                const slug = slugify(service.title);
                return (
                    <>
                    <div className='block md:flex bg-gray-100 rounded-xl'>
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={400}
                            height={100}
                            className="rounded-xl w-full h-auto max-w-[400px] object-cover"
                        />
                        <div className='flex justify-center items-center p-5 md:p-10'>
                            <div>
                                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                <p className="text-gray-600 line-clamp-3 mb-8">{service.description}</p>
                                <Link
                                    key={slug}
                                    href={`/hizmetler/${slug}`}
                                >
                                    <Button
                                        text="Detayları Gör"
                                        backgroundColor="#1C1468"
                                        textColor="#fff"
                                        icon={<FaArrowRight size={14} />}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                );
            })}
        </div>
    </>
  );
}
