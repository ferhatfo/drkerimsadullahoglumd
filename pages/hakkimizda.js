import AboutPageDescription from '@/components/organisms/AboutPageDescription';
import MultiPageDescription from '@/components/organisms/MultiPageDescription';
import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkımızda - Dr. Kerim Sadullahoğlu</title>
        <meta name="description" content="Biz kimiz, ne yaparız?" />
      </Head>
      <MultiPageHeader
        subtitle="Hakkımızda"
        title="Dr. Kerim Sadullahoğlu"
        isImage={true}
        imgUrl="/images/about-img.webp"
      />
      <MultiPageDescription
        description="1976 yılında Alanya’da doğdum. İlk ve ortaöğrenimimi burada tamamladıktan
        sonra, 1995–2002 yılları arasında Akdeniz Üniversitesi Tıp Fakültesi’nden
        mezun oldum.
        2003–2008 yılları arasında İzmir Atatürk Eğitim ve Araştırma Hastanesi KBB
        Kliniği’nde Kulak Burun Boğaz Uzmanlık Eğitimimi tamamlayarak, 2008
        yılında KBB Uzmanı unvanını aldım.
        Uzmanlık sonrası 2008–2010 yılları arasında İzmir Bayındır Devlet
        Hastanesi’nde, 2010–2011 yıllarında Diyarbakır Askeri Hastanesi’nde görev
        yaptım.
        2011–2016 yılları arasında İzmir’deki çeşitli özel hastanelerde KBB hastalıkları
        ve estetik cerrahi alanında çalıştım.
        2016–2019 yılları arasında Antalya Kepez Devlet Hastanesi KBB Kliniği
        Sorumlusu olarak görevime devam ettim.
        20 yılı aşkın deneyimim ve 2000’den fazla başarılı ameliyat tecrübemle,
        özellikle rinoplasti (burun estetiğii, revizyon rinoplasti, endoskopik sinüs
        cerrahisi,
        konka radyofrekans, horlama tedavisi, otoplasti (kepçe kulak estetiğii ve
        botoks-dolgu uygulamaları gibi alanlarda hizmet veriyorum.
        Tüm cerrahi ve medikal işlemlerimde, doğallık ve fonksiyonelliği bir arada
        sunmayı hedefliyorum.
        Amacım, hastalarımın hem sağlıklı nefes almasını hem de kendini estetik
        olarak iyi hissetmesini sağlamaktır."
      />
      <AboutPageDescription/>
    </>
  );
}