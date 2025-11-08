'use client';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
export default function AboutSection() {
  return (
    <section>
      <div className="bg-[#1C1468] p-10 w-full max-w-[1140px] mx-auto my-10 md:my-20 flex flex-col md:flex-row items-center gap-12" style={{ borderRadius: '30px' }}>
        {/* Text Area */}
        <div className="text-white md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Dr. Kerim Sadullaohoğlu</h2>
          <p className="text-md leading-relaxed mb-8">
          1976 yılında Alanya’da doğdum. İlk ve ortaöğrenimimi burada tamamladıktan
          sonra, 1995–2002 yılları arasında Akdeniz Üniversitesi Tıp Fakültesi’nden
          mezun oldum.<br/>
          2003–2008 yılları arasında İzmir Atatürk Eğitim ve Araştırma Hastanesi KBB
          Kliniği’nde Kulak Burun Boğaz Uzmanlık Eğitimimi tamamlayarak, 2008
          yılında KBB Uzmanı unvanını aldım.
          </p>
          <Link href="/hakkimizda">
            <Button
              text="Hakkımızda"
              backgroundColor="#ffffff"
              textColor="#1C1468"
              icon={<FaArrowRight size={14} />}
              />
          </Link>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2 relative flex justify-start">
          <Image
            src="/images/about-img.webp"
            alt="Hakkımızda görseli"
            width={400}
            height={200}
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
