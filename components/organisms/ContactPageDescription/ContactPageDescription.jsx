import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
export default function ContactPageDescription(){
    return(
        <section className="py-[40px]">
            <div className="container mx-auto px-4 flex">
                <div className='w-full md:w-1/3'>
                    <h6 className="text-[#1C1468] pb-1">Telefon</h6>
                    <p className="pb-[3px] text-gray-700 leading-relaxed text-sm">
                        +90 539 437 76 07
                    </p>

                    <h6 className="text-[#1C1468] pb-1">Mail</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                        kerimsadullahoglumd@gmail.com
                    </p>

                    <h6 className="text-[#1C1468] pb-1">Adres</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                    Kuşkavağı Mahallesi, 563. Sokak, Arden Plaza No:2 Kat:6/12,<br/>
                    Konyaaltı / Antalya, Türkiye – 07070
                    </p>

                    <h6 className="text-[#1C1468] pb-1">Sosyal Medya</h6>
                    <div className="flex items-center pt-[5px] pb-[15px] gap-5">
                        <Link href="instagram.com/dr.kerim_sadullahoglu" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color="#1C1468" />
                        </Link>
                        <Link href="facebook.com/kerim.sadullahoglu.5" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} color="#1C1468" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}