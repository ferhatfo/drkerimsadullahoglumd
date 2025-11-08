import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services.json';
import { slugify } from '@/utils/slugify';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 md:py-15 pb-0 md:pb-0 bg-gray-100 rounded-t-[30px]">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="pb-[40px] md:pb-[50px] text-center">
          <div className="flex justify-center">
            <Image 
              src="/images/svg/logo.svg" 
              alt="Logo" 
              width={200} 
              height={100} 
              className="max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-[40px] md:pb-[40px] border-t border-[#1C1468]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Home Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#1C1468]">Dr. Kerim Sadullahoğlu</h6>
              <ul className="space-y-1">
                <li><FooterLink href="/hakkimizda" text="Hakkımızda" /></li>
                <li><FooterLink href="/hizmetler" text="Hizmetlerimiz" /></li>
                <li><FooterLink href="/blog" text="Blog" /></li>
                <li><FooterLink href="/iletisim" text="İletişim" /></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#1C1468]">Hizmetlerimiz</h6>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={`/hizmetler/${slugify(service.title)}`} className='text-[14px] font-normal hover:text-[#1C1468] transition-colors'>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#1C1468]">Politikalar</h6>
              <ul className="space-y-1">
                <li><FooterLink href="" text="Kişisel Verilerin İşlenmesine İlişkin Kurumsal Genel Aydınlatma Metni" /></li>
                <li><FooterLink href="" text="Çerez Politikası" /></li>
                <li><FooterLink href="" text="Veri Sorumlusuna Başvuru Formu" /></li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#1C1468]">İletişim</h6>
              <p className="text-[14px] pb-[10px]">Kuşkavağı Mahallesi, 563. Sokak, Arden Plaza No:2 Kat:6/12,  <br/> Konyaaltı / Antalya, Türkiye – 07070 </p>

              <h6 className="font-medium pb-[5px] text-[#1C1468]">Çalışma Saatleri</h6>
              <p className="text-[14px] pb-[10px]">Pazartesi – Cumartesi: 09:00 – 18:00  <br/> Pazar: Kapalı </p>
              <div className="flex items-center pb-[20px] gap-3">
                <Link href="https://instagram.com/dr.kerim_sadullahoglu" rel="noopener noreferrer">
                  <FaInstagram size={24} color="#1C1468" />
                </Link>
                <Link href="https://facebook.com/kerim.sadullahoglu.5" rel="noopener noreferrer">
                  <FaFacebook size={24} color="#1C1468" />
                </Link>
              </div>
              
           
              <p className="py-[5px] text-[14px]"><Link href="tel:+905394377607">+90 539 437 76 07 </Link></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-[40px] mt-[40px] md:mt-[0] border-t border-[#1C1468]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[13px]">2025 © | All Right Rezerved</p>
            <p className="text-[13px]">Created by Nuans Agency</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable FooterLink component
const FooterLink = ({ href, text }) => (
  <Link 
    href={href} 
    className="text-[14px] font-normal hover:text-[#1C1468] transition-colors"
  >
    {text}
  </Link>
);

export default Footer;