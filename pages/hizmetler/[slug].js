import services from "@/data/services.json";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import Head from "next/head";
import MultiPageHeader from "@/components/organisms/MultiPageHeader";
import { useState } from "react";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { slug: slugify(service.title) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => slugify(s.title) === params.slug);

  return {
    props: {
      service: service || null,
    },
  };
}

// Metni formatlamak için yardımcı fonksiyon
const formatDescription = (text) => {
  if (!text) return '';
  
  return text.split('\n\n').map((paragraph, index) => {
    // Kalın metinleri işleme
    if (paragraph.includes('**')) {
      const parts = paragraph.split('**');
      return (
        <p key={index} className="mb-4">
          {parts.map((part, i) => 
            i % 2 === 1 ? (
              <strong key={i} className="font-semibold text-gray-900">{part}</strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    
    // Madde listelerini işleme
    if (paragraph.includes('•')) {
      const lines = paragraph.split('\n');
      return (
        <div key={index} className="mb-4">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex items-start mb-2">
              {line.trim().startsWith('•') ? (
                <>
                  <span className="text-gray-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700 flex-1">{line.replace('•', '').trim()}</span>
                </>
              ) : (
                <span className="text-gray-700 font-medium">{line}</span>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    // Normal paragraf
    return (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    );
  });
};

export default function ServiceDetailPage({ service }) {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!service) return <div>Hizmet bulunamadı.</div>;

  const handleServiceChange = (serviceSlug) => {
    router.push(`/hizmetler/${serviceSlug}`);
    setIsDropdownOpen(false);
  };

  const currentServiceIndex = services.findIndex(s => slugify(s.title) === slugify(service.title));

  return (
    <>
      <Head>
        <title>{service.title} - Dr. Kerim Sadullahoğlu</title>
        <meta name="description" content={service.description.replace(/\n/g, ' ').replace(/\*\*/g, '')} />
      </Head>

      <MultiPageHeader
        subtitle="Hizmet Detayı"
        title={service.title}
        isImage={false}
      />

      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol Sidebar - Dropdown Menü */}
          <div className="lg:w-1/4">
            {/* Mobil için Dropdown */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex justify-between items-center hover:border-gray-400 transition-colors"
                >
                  <span className="font-medium text-gray-900">{service.title}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {services.map((serv, index) => (
                      <button
                        key={serv.title}
                        onClick={() => handleServiceChange(slugify(serv.title))}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          slugify(serv.title) === slugify(service.title) 
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600 font-semibold' 
                            : 'text-gray-700'
                        } ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}
                      >
                        {serv.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop için Sidebar */}
            <div className="hidden lg:block sticky top-8">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Hizmetlerimiz</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {services.map((serv, index) => (
                    <button
                      key={serv.title}
                      onClick={() => handleServiceChange(slugify(serv.title))}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        slugify(serv.title) === slugify(service.title) 
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600 font-semibold' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{serv.title}</span>
                        {slugify(serv.title) === slugify(service.title) && (
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sağ İçerik */}
          <div className="lg:w-3/4">
            <div className="max-w-4xl">
              {/* Açıklama metni */}
              <div className="prose prose-lg max-w-none mb-8">
                {formatDescription(service.description)}
              </div>
              
              {/* Görsel */}
              <div className="mt-8">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={600}
                    className="rounded-xl w-full h-auto shadow-lg"
                  />
                )}
              </div>

              {/* Navigasyon Butonları */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                {currentServiceIndex > 0 && (
                  <button
                    onClick={() => handleServiceChange(slugify(services[currentServiceIndex - 1].title))}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Önceki Hizmet
                  </button>
                )}
                
                {currentServiceIndex < services.length - 1 && (
                  <button
                    onClick={() => handleServiceChange(slugify(services[currentServiceIndex + 1].title))}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors ml-auto"
                  >
                    Sonraki Hizmet
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}