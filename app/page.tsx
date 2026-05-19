"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

const navItems = [
  { label: "Biz Kimiz", href: "#biz-kimiz" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Alanlar", href: "#calisma-alanlari" },
  { label: "NODUS Metodu", href: "#nodus-metodu" },
  { label: "AdMind.Ai", href: "#admind-ai" },
  { label: "Teknoloji", href: "#teknoloji" },
  { label: "Paketler", href: "#paketler" },
  { label: "İletişim", href: "#iletisim" },
];

const trustItems = ["Strateji Odaklı", "Teknoloji Destekli", "Premium Marka Yönetimi"];

const serviceItems = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanızın dijital kimliğini; içerik planı, görsel dil, paylaşım stratejisi ve takipçi iletişimiyle profesyonel şekilde yönetiriz.",
    accent: "border-[#D6B05D]/30 bg-[#D6B05D]/10 text-[#F5D98B]",
    slug: "sosyal-medya-yonetimi",
    detail: {
      focus: "Dijital marka kimliği",
      approach: "Planlı içerik ve düzenli iletişim",
      result: "Güçlü sosyal medya algısı",
      deliverables: [
        "Aylık içerik planı oluşturma",
        "Post, story ve reels akışı kurgulama",
        "Markaya uygun görsel dil belirleme",
        "Etkileşim ve takipçi iletişimini güçlendirme",
      ],
    },
  },
  {
    number: "02",
    title: "Reklam Yönetimi",
    description:
      "Meta, Google ve dijital reklam kanallarında bütçeyi doğru hedef kitleyle buluşturan ölçülebilir kampanya süreçleri oluştururuz.",
    accent: "border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]",
    slug: "reklam-yonetimi",
    detail: {
      focus: "Doğru hedef kitleye ulaşım",
      approach: "Veri odaklı kampanya yönetimi",
      result: "Daha ölçülebilir reklam performansı",
      deliverables: [
        "Kampanya hedefi ve bütçe planlama",
        "Meta ve Google reklam kurgusu",
        "Hedef kitle ve lokasyon optimizasyonu",
        "Performans takibi ve kampanya iyileştirme",
      ],
    },
  },
  {
    number: "03",
    title: "Marka Stratejisi",
    description:
      "Markanın konumlandırmasını, iletişim tonunu, hedef kitlesini ve büyüme rotasını netleştiren stratejik marka sistemi kurarız.",
    accent: "border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#C4B5FD]",
    slug: "marka-stratejisi",
    detail: {
      focus: "Marka konumlandırması",
      approach: "Kimlik, ton ve hedef kitle analizi",
      result: "Net ve güçlü marka algısı",
      deliverables: [
        "Marka dili ve iletişim tonu oluşturma",
        "Hedef kitle ve rakip analizi",
        "Dijital büyüme yönü belirleme",
        "Marka mesajı ve değer önerisi netleştirme",
      ],
    },
  },
  {
    number: "04",
    title: "İçerik Üretimi",
    description:
      "Reels, post, story, kampanya metni ve yaratıcı içerik fikirleriyle markanın dijitalde güçlü ve tutarlı görünmesini sağlarız.",
    accent: "border-white/20 bg-white/10 text-white",
    slug: "icerik-uretimi",
    detail: {
      focus: "Yaratıcı ve tutarlı içerik",
      approach: "Platforma uygun üretim mantığı",
      result: "Daha profesyonel dijital görünüm",
      deliverables: [
        "Reels, post ve story fikirleri üretme",
        "Reklam metni ve kampanya başlıkları hazırlama",
        "Markaya uygun görsel konsept oluşturma",
        "Paylaşım dili ve içerik akışı geliştirme",
      ],
    },
  },
  {
    number: "05",
    title: "SEO & GEO Görünürlük",
    description:
      "Markanızın arama motorlarında ve yapay zeka destekli arama deneyimlerinde daha görünür olması için içerik ve görünürlük stratejileri geliştiririz.",
    accent: "border-[#D6B05D]/30 bg-[#D6B05D]/10 text-[#F5D98B]",
    slug: "seo-geo-gorunurluk",
    detail: {
      focus: "Arama görünürlüğü",
      approach: "SEO ve GEO uyumlu içerik stratejisi",
      result: "Daha bulunabilir marka yapısı",
      deliverables: [
        "SEO uyumlu içerik başlıkları oluşturma",
        "Google aramalarına uygun metin kurgusu",
        "Yapay zekâ destekli aramalara yönelik görünürlük planı",
        "Marka, hizmet ve lokasyon odaklı içerik stratejisi",
      ],
    },
  },
  {
    number: "06",
    title: "Teknoloji Destekli Medya Çözümleri",
    description:
      "Reklam, içerik ve medya yönetimi süreçlerini yazılım, veri ve yeni nesil dijital araçlarla daha verimli hale getiririz.",
    accent: "border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]",
    slug: "teknoloji-destekli-medya-cozumleri",
    detail: {
      focus: "Yazılım ve medya birleşimi",
      approach: "Veri, otomasyon ve yapay zekâ desteği",
      result: "Daha akıllı medya yönetimi",
      deliverables: [
        "AdMind.Ai destekli reklam akışı",
        "Kampanya, içerik ve müşteri süreci planlama",
        "Veri odaklı performans değerlendirme",
        "Medya yönetiminde otomasyon yaklaşımı geliştirme",
      ],
    },
  },
];

const methodSteps = [
  {
    step: "01",
    title: "Analiz",
    description:
      "Markanın mevcut dijital durumunu, hedef kitlesini, rakiplerini ve büyüme potansiyelini analiz ederiz.",
  },
  {
    step: "02",
    title: "Strateji",
    description:
      "Markaya özel reklam, içerik, sosyal medya ve görünürlük stratejisini net bir yol haritasına dönüştürürüz.",
  },
  {
    step: "03",
    title: "Tasarım",
    description:
      "Markanın premium, güven veren ve ayırt edilebilir görsel iletişim dilini tasarlarız.",
  },
  {
    step: "04",
    title: "Yayın",
    description:
      "Hazırlanan içerik ve kampanyaları doğru zamanlama, doğru kanal ve doğru hedef kitleyle yayına alırız.",
  },
  {
    step: "05",
    title: "Ölçüm",
    description:
      "Reklam ve içerik performansını; erişim, etkileşim, dönüşüm ve görünürlük verileriyle takip ederiz.",
  },
  {
    step: "06",
    title: "Optimizasyon",
    description:
      "Elde edilen verilerle stratejiyi geliştirir, bütçeyi ve içerik akışını daha verimli hale getiririz.",
  },
];

const serviceOptions = [
  "Sosyal Medya Yönetimi",
  "Reklam Yönetimi",
  "Marka Stratejisi",
  "İçerik Üretimi",
  "SEO & GEO Görünürlük",
  "Teknoloji Destekli Medya Çözümleri",
  "Genel Görüşme",
];

const whyItems = [
  {
    title: "Strateji Odaklı Yaklaşım",
    description:
      "Her markaya aynı içerik şablonunu uygulamak yerine; hedef, sektör, kitle ve büyüme potansiyeline göre özel strateji geliştiririz.",
  },
  {
    title: "Yeni Nesil Reklam Yönetimi",
    description:
      "Reklam süreçlerini sadece bütçe harcayan kampanyalar olarak değil, ölçülebilir büyüme sistemleri olarak ele alırız.",
  },
  {
    title: "Premium Görsel Kimlik",
    description:
      "Markanızın dijitalde daha güven veren, daha profesyonel ve daha ayırt edilebilir görünmesi için güçlü bir görsel dil oluştururuz.",
  },
  {
    title: "Teknoloji Destekli Planlama",
    description:
      "Veri, yazılım mantığı ve dijital araçları medya yönetimi sürecine dahil ederek daha sistemli bir çalışma yapısı kurarız.",
  },
  {
    title: "Ölçülebilir Büyüme",
    description:
      "İçerik, reklam ve görünürlük çalışmalarını performans verileriyle takip eder; süreçleri sürekli iyileştiririz.",
  },
  {
    title: "Yerel Markalara Profesyonel Güç",
    description:
      "Aydın ve çevresindeki markaların dijitalde daha güçlü, kurumsal ve rekabetçi bir konuma ulaşmasını hedefleriz.",
  },
];

const whatsappMessage =
  "Merhaba NODUS MEDYA, hizmetleriniz hakkında bilgi almak istiyorum.";

const whatsappUrl = `https://wa.me/905541859851?text=${encodeURIComponent(
  whatsappMessage
)}`;

const contactItems = [
  {
    label: "WhatsApp",
    value: "0554 185 98 51",
    href: whatsappUrl,
  },
  {
    label: "Instagram",
    value: "@nodus_medya",
    href: "https://www.instagram.com/nodus_medya",
  },
  {
    label: "E-posta",
    value: "nodusmedya09@gmail.com",
    href: "mailto:nodusmedya09@gmail.com",
  },
  {
    label: "Lokasyon",
    value: "Aydın / Türkiye",
    href: "#",
  },
];

const admindHighlights = [
  "AI destekli reklam paketi oluşturma",
  "Sosyal medya içerik ve kampanya akışı",
  "Müşteri mesajlarını fırsata dönüştürme",
  "Lead / müşteri adayı takibi",
  "Kampanya performans karnesi",
  "Görsel brief ve reklam prompt üretimi",
];

const sectorItems = [
  {
    title: "Restoran & Kafeler",
    description:
      "Menü, atmosfer, kampanya ve müşteri deneyimini öne çıkaran sosyal medya ve reklam stratejileri geliştiririz.",
    icon: "🍽️",
  },
  {
    title: "Güzellik Merkezleri",
    description:
      "Bakım, estetik, güven ve hizmet kalitesini ön plana çıkaran premium dijital iletişim dili oluştururuz.",
    icon: "✨",
  },
  {
    title: "Butikler & Mağazalar",
    description:
      "Ürünlerin satışa dönüşmesini destekleyen görsel içerik, kampanya ve sosyal medya akışları kurgularız.",
    icon: "🛍️",
  },
  {
    title: "Emlak Ofisleri",
    description:
      "Portföyleri daha güvenilir, profesyonel ve dikkat çekici şekilde sunan dijital tanıtım sistemleri hazırlarız.",
    icon: "🏢",
  },
  {
    title: "Sağlık & Klinikler",
    description:
      "Güven, uzmanlık ve profesyonellik algısını güçlendiren kontrollü ve kurumsal iletişim stratejileri oluştururuz.",
    icon: "⚕️",
  },
  {
    title: "Eğitim & Kurslar",
    description:
      "Eğitim değerini, başarı hikâyelerini ve kayıt süreçlerini destekleyen içerik ve reklam planları geliştiririz.",
    icon: "🎓",
  },
  {
    title: "Yerel Hizmet İşletmeleri",
    description:
      "Bölgesel görünürlüğü artıran, yakın çevrede müşteri kazanımını destekleyen reklam ve içerik çözümleri üretiriz.",
    icon: "📍",
  },
  {
    title: "Yazılım & Ar-Ge Şirketleri",
    description:
      "Teknoloji şirketleri, yazılım girişimleri ve Ar-Ge odaklı markalar için ürün tanıtımı, dijital görünürlük ve teknoloji odaklı iletişim stratejileri geliştiririz.",
    icon: "🧠",
  },
  {
    title: "Kurumsal Markalar",
    description:
      "Marka prestijini, kurumsal algıyı ve dijital güveni güçlendiren uzun vadeli medya yönetimi süreçleri tasarlarız.",
    icon: "◆",
  },
];

const packageItems = [
  {
    name: "Başlangıç Paketi",
    badge: "Yeni Başlayan Markalar",
    description:
      "Dijitalde profesyonel görünmeye başlamak isteyen işletmeler için temel sosyal medya ve marka görünürlüğü paketi.",
    bestFor: "Yeni hesaplar, küçük işletmeler ve dijital kimliğini kurmak isteyen markalar",
    features: [
      "Temel sosyal medya içerik planı",
      "Markaya uygun görsel dil yönlendirmesi",
      "Aylık paylaşım akışı önerisi",
      "Temel reklam ve görünürlük danışmanlığı",
    ],
  },
  {
    name: "Büyüme Paketi",
    badge: "En Çok Tercih Edilen",
    description:
      "Sosyal medya, reklam ve içerik üretimini birlikte yürütmek isteyen markalar için daha kapsamlı büyüme planı.",
    bestFor: "Düzenli içerik, reklam ve müşteri kazanımı hedefleyen işletmeler",
    features: [
      "Sosyal medya yönetim planı",
      "Reklam kampanyası kurgusu",
      "İçerik ve kampanya metni üretimi",
      "Performans takibi ve iyileştirme önerileri",
    ],
  },
  {
    name: "Premium Medya Yönetimi",
    badge: "Kurumsal Görünüm",
    description:
      "Marka algısını güçlendirmek, daha prestijli görünmek ve uzun vadeli medya yönetimi isteyen işletmeler için premium plan.",
    bestFor: "Kurumsal markalar, güçlü görsel kimlik ve profesyonel medya yönetimi isteyen işletmeler",
    features: [
      "Marka stratejisi ve iletişim dili",
      "Premium sosyal medya içerik sistemi",
      "Reklam ve kampanya yönetimi",
      "Aylık medya performans değerlendirmesi",
    ],
  },
  {
    name: "Teknoloji Destekli Paket",
    badge: "AdMind.Ai Destekli",
    description:
      "Reklam, içerik, müşteri mesajı ve kampanya performansını teknoloji destekli bir yapıyla yönetmek isteyen markalar için özel plan.",
    bestFor: "Yazılım, Ar-Ge, teknoloji odaklı markalar ve veriye dayalı büyüme isteyen işletmeler",
    features: [
      "AdMind.Ai destekli reklam paketi yaklaşımı",
      "Kampanya ve müşteri dönüşüm takibi",
      "Görsel brief ve içerik akışı planlama",
      "Performans karnesi ve optimizasyon mantığı",
    ],
  },
];

const sectorOptions = sectorItems.map((sector) => sector.title);

const packageOptions = packageItems.map((plan) => plan.name);

const goalOptions = [
  "Daha fazla müşteri kazanmak",
  "Sosyal medyada profesyonel görünmek",
  "Reklam performansını artırmak",
  "Marka bilinirliğini güçlendirmek",
  "Ürün / hizmet tanıtımı yapmak",
  "Teknoloji destekli medya yönetimi kurmak",
  "Henüz net değil, birlikte belirleyelim",
];

const faqItems = [
  {
    question: "NODUS MEDYA hangi hizmetleri sunar?",
    answer:
      "NODUS MEDYA; sosyal medya yönetimi, reklam yönetimi, marka stratejisi, içerik üretimi, SEO & GEO odaklı görünürlük ve teknoloji destekli medya çözümleri sunar.",
  },
  {
    question: "Reklam bütçesi hizmet ücretine dahil mi?",
    answer:
      "Reklam bütçesi genellikle hizmet ücretinden ayrı planlanır. Marka hedeflerine, sektöre ve kampanya süresine göre en doğru reklam bütçesi birlikte belirlenir.",
  },
  {
    question: "Çalışma süreci nasıl ilerliyor?",
    answer:
      "Önce markanın mevcut durumu analiz edilir. Ardından strateji, içerik planı, tasarım dili, reklam yönetimi ve performans ölçüm süreci oluşturulur.",
  },
  {
    question: "Sadece Aydın’daki işletmelerle mi çalışıyorsunuz?",
    answer:
      "NODUS MEDYA Aydın merkezli bir marka olsa da dijital reklam, sosyal medya ve medya yönetimi süreçleri farklı şehirlerdeki markalar için de yürütülebilir.",
  },
  {
    question: "NODUS MEDYA’yı klasik ajanslardan ayıran şey nedir?",
    answer:
      "NODUS MEDYA reklam, içerik ve medya yönetimini birbirinden kopuk işler olarak değil; strateji, teknoloji, tasarım ve ölçüm odaklı tek bir büyüme sistemi olarak ele alır.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nodus-medya-site.vercel.app/#organization",
      name: "NODUS MEDYA",
      url: "https://nodus-medya-site.vercel.app",
      logo: "https://nodus-medya-site.vercel.app/nodus-logo-512.png",
      email: "nodusmedya09@gmail.com",
      telephone: "+90 554 185 98 51",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aydın",
        addressCountry: "TR",
      },
      sameAs: ["https://www.instagram.com/nodus_medya"],
      description:
        "NODUS MEDYA; reklam, sosyal medya, marka stratejisi ve teknoloji destekli medya yönetimi çözümleri sunan yeni nesil bir medya markasıdır.",
    },
    {
      "@type": "WebSite",
      "@id": "https://nodus-medya-site.vercel.app/#website",
      url: "https://nodus-medya-site.vercel.app",
      name: "NODUS MEDYA",
      publisher: {
        "@id": "https://nodus-medya-site.vercel.app/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://nodus-medya-site.vercel.app/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function NodusMedyaHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
  name: "",
  brand: "",
  phone: "",
  sector: "Restoran & Kafeler",
  service: "Sosyal Medya Yönetimi",
  plan: "Büyüme Paketi",
  goal: "Daha fazla müşteri kazanmak",
  socialAccount: "",
  message: "",
});

  const leadMessage = `Merhaba NODUS MEDYA, web siteniz üzerinden bilgi almak istiyorum.

Ad Soyad: ${formData.name || "-"}
Marka / İşletme: ${formData.brand || "-"}
Telefon: ${formData.phone || "-"}
Sektör: ${formData.sector || "-"}
İlgilendiğim Hizmet: ${formData.service || "-"}
İlgilendiğim Paket: ${formData.plan || "-"}
Aylık Hedef: ${formData.goal || "-"}
Sosyal Medya Hesabı: ${formData.socialAccount || "-"}
Ek Mesaj: ${formData.message || "-"}`;

  const leadWhatsappUrl = `https://wa.me/905541859851?text=${encodeURIComponent(
    leadMessage
  )}`;

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(leadWhatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#05070D] text-white">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }}
  />
      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(214,176,93,0.14),_transparent_32%),linear-gradient(135deg,_#05070D_0%,_#0B1020_48%,_#111827_100%)]">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7C3AED]/20 blur-[80px]" />
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-[#38BDF8]/20 blur-[75px]" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#D6B05D]/10 blur-[75px]" />

        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/85 px-5 py-3 shadow-xl backdrop-blur-xl sm:px-8 lg:px-10">
  <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#" className="group flex items-center" aria-label="NODUS MEDYA ana sayfa">
  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-visible rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-1 shadow-lg backdrop-blur-xl transition duration-300 group-hover:border-[#D6B05D]/40 group-hover:bg-white/[0.05] sm:h-20 sm:w-20 sm:rounded-[1.5rem] lg:h-24 lg:w-24 lg:rounded-[1.6rem]">
    <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.04] via-transparent to-[#D6B05D]/[0.06]" />

    <Image
  src="/nodus-logo-512.png"
  alt="NODUS MEDYA Logo"
  width={180}
  height={180}
  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
  className="relative z-10 h-full w-full scale-[1.28] object-contain brightness-[1.45] contrast-[1.2] saturate-[1.08] sm:scale-[1.22] lg:scale-[1.16]"
  priority
/>
  </div>
</a>

          <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#iletisim"
              className="rounded-full border border-[#D6B05D]/40 bg-[#D6B05D]/10 px-5 py-3 text-sm font-bold text-[#F5D98B] transition hover:border-[#D6B05D]/80 hover:bg-[#D6B05D]/20"
            >
              Teklif Al
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl lg:hidden"
            aria-label="Menüyü aç veya kapat"
          >
            <span className="sr-only">Menü</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
            </div>
          </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="fixed left-5 right-5 top-20 z-50 rounded-3xl border border-white/10 bg-[#0B1020]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-2xl bg-[#D6B05D] px-4 py-3 text-center text-sm font-black text-[#080A12] transition hover:bg-[#F5D98B]"
              >
                Teklif Al
              </a>
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.95)]" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-[#D6B05D]">
                Yeni Nesil Reklam & Medya Yönetimi
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Markanızın büyüme düğümünü çözen yeni nesil medya ajansı.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <span className="font-semibold text-white">NODUS MEDYA</span>; reklam, sosyal medya, marka stratejisi ve dijital büyüme süreçlerini teknoloji odaklı çözümlerle bir araya getirir. Karmaşık dijital süreçleri sade, ölçülebilir ve etkili büyüme sistemlerine dönüştürür.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#080A12] shadow-2xl shadow-[#D6B05D]/20 transition hover:-translate-y-0.5 hover:bg-[#F5D98B]"
              >
                Teklif Al
                <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
              >
                Hizmetleri İncele
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden h-[560px] w-full max-w-xl items-center justify-center lg:flex">
            <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-sm" />
            <div className="absolute inset-20 rounded-full border border-[#38BDF8]/20" />
            <div className="absolute inset-36 rounded-full border border-[#D6B05D]/20" />

            <div className="absolute left-8 top-24 h-px w-72 rotate-12 bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
            <div className="absolute bottom-24 right-8 h-px w-72 -rotate-12 bg-gradient-to-r from-transparent via-[#D6B05D]/50 to-transparent" />
            <div className="absolute left-24 top-16 h-80 w-px rotate-[32deg] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="relative flex h-60 w-60 items-center justify-center rounded-[3rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <div className="absolute h-36 w-36 rounded-[2rem] border border-[#D6B05D]/50 rotate-45" />
              <div className="absolute h-28 w-28 rounded-full border border-[#38BDF8]/50" />
              <div className="absolute h-20 w-20 rounded-[1.5rem] border border-white/20 -rotate-12" />
              <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_60px_rgba(214,176,93,0.18)] backdrop-blur-xl">
  <Image
    src="/nodus-logo-512.png"
    alt="NODUS MEDYA Logo"
    width={250}
    height={250}
    sizes="176px"
    className="h-full w-full object-contain brightness-[1.35] contrast-[1.2] saturate-[1.08]"
  />
</div>
            </div>

            <div className="absolute right-0 top-20 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B05D]">Nodus Signal</p>
              <p className="mt-2 text-2xl font-black text-white">+ Strateji</p>
              <p className="mt-1 text-sm text-slate-400">Marka büyüme haritası</p>
            </div>

            <div className="absolute bottom-20 left-0 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38BDF8]">Media Flow</p>
              <p className="mt-2 text-2xl font-black text-white">Ölçülebilir</p>
              <p className="mt-1 text-sm text-slate-400">Reklam ve içerik sistemi</p>
            </div>

            {[
              "left-20 top-28 bg-[#38BDF8]",
              "right-24 top-44 bg-[#D6B05D]",
              "left-32 bottom-32 bg-[#7C3AED]",
              "right-32 bottom-24 bg-[#38BDF8]",
              "left-1/2 top-8 bg-white",
            ].map((className, index) => (
              <span
                key={index}
                className={`absolute h-3 w-3 rounded-full shadow-[0_0_26px_currentColor] ${className}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="biz-kimiz" className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[80px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#D6B05D]/10 blur-[80px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">Biz Kimiz?</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Karmaşık dijital süreçleri çözüme bağlayan medya zekâsı.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              NODUS MEDYA, markaların reklam, içerik, sosyal medya ve dijital görünürlük süreçlerini tek bir stratejik merkezde buluşturan yeni nesil bir medya yönetim markasıdır.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-400">
              “Nodus” fikrinden ilham alarak; markaların büyümesini zorlaştıran düğümleri analiz eder, doğru stratejiyle çözer ve iletişim süreçlerini ölçülebilir bir büyüme sistemine dönüştürür.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-xl">01</div>
              <h3 className="text-xl font-black text-white">Stratejik Çözüm</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Her marka için aynı şablonu değil, hedefe göre kurgulanan medya ve reklam stratejisini merkeze alırız.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl sm:translate-y-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-xl">02</div>
              <h3 className="text-xl font-black text-white">Yeni Nesil Medya</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Sosyal medya, reklam yönetimi, içerik üretimi ve dijital görünürlüğü tek bir büyüme akışında birleştiririz.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-xl">03</div>
              <h3 className="text-xl font-black text-white">Teknoloji Odağı</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Gelişen teknolojileri, veri odaklı düşünceyi ve yazılım tabanlı yaklaşımı medya yönetimine entegre ederiz.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl sm:translate-y-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-xl">04</div>
              <h3 className="text-xl font-black text-white">Premium Kimlik</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Markanın dijitalde güçlü, güven veren ve ayırt edilebilir bir görsel/iletişim diliyle konumlanmasını sağlarız.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section id="hizmetler" className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
                Hizmetler
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Markanızın dijital büyüme hattını uçtan uca kurgularız.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto">
              NODUS MEDYA; sosyal medya yönetiminden reklam stratejisine, içerik üretiminden teknoloji destekli medya çözümlerine kadar markanızın dijitalde ihtiyaç duyduğu temel büyüme alanlarını tek bir sistemde birleştirir.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl transition group-hover:bg-[#38BDF8]/10" />

                <div className={`mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-black ${service.accent}`}>
                  {service.number}
                </div>

                <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <a
  href={`#${service.slug}`}
  className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#D6B05D]/25 bg-[#D6B05D]/10 px-5 py-3 text-sm font-black text-[#F5D98B] transition hover:-translate-y-1 hover:border-[#D6B05D]/45 hover:bg-[#D6B05D]/20"
>
  Detaylı İncele
  <span className="transition group-hover:translate-x-1">→</span>
</a>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                Hangi hizmete ihtiyacınız olduğunu birlikte netleştirelim.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Markanızın mevcut durumunu analiz ederek size en doğru medya, reklam ve büyüme yol haritasını çıkarabiliriz.
              </p>
            </div>

            <a
              href="#iletisim"
              className="mt-6 inline-flex rounded-full bg-[#D6B05D] px-6 py-4 text-sm font-black text-[#080A12] transition hover:bg-[#F5D98B] sm:mt-0"
            >
              Görüşme Planla
            </a>
          </div>
        </div>
      </section>
            <section
        id="hizmet-detaylari"
        className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
              Hizmet Detayları
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Her hizmeti markanızın büyüme hedeflerine göre kurguluyoruz.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              NODUS MEDYA’da hizmetler yalnızca tekil işler olarak değil; strateji,
              tasarım, reklam, teknoloji ve ölçüm süreçleriyle birlikte ele alınır.
            </p>
          </div>

          <div className="mt-14 grid gap-5">
            {serviceItems.map((item, index) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl transition hover:border-[#D6B05D]/30 sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
                  <div>
                    <p className="text-sm font-black text-[#D6B05D]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 text-2xl font-black tracking-[-0.045em] text-white sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-base leading-8 text-slate-300 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-[#05070D]/60 p-4">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Odak
    </p>
    <p className="mt-2 text-sm font-bold leading-6 text-white">
      {item.detail.focus}
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-[#05070D]/60 p-4">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Yaklaşım
    </p>
    <p className="mt-2 text-sm font-bold leading-6 text-white">
      {item.detail.approach}
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-[#05070D]/60 p-4">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Sonuç
    </p>
    <p className="mt-2 text-sm font-bold leading-6 text-white">
      {item.detail.result}
    </p>
  </div>
</div>

<div className="mt-6 rounded-3xl border border-white/10 bg-[#05070D]/50 p-5">
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B05D]">
    Bu hizmet kapsamında
  </p>

  <div className="mt-4 grid gap-3 sm:grid-cols-2">
    {item.detail.deliverables.map((deliverable) => (
      <div
        key={deliverable}
        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
      >
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6B05D]/15 text-xs font-black text-[#F5D98B]">
          ✓
        </span>

        <p className="text-sm leading-6 text-slate-300">
          {deliverable}
        </p>
      </div>
    ))}
  </div>
</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
            <section
        id="calisma-alanlari"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
                Çalışma Alanlarımız
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                Farklı sektörlerin büyüme düğümlerini doğru stratejiyle çözüyoruz.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto">
              NODUS MEDYA; her sektörü aynı kalıpla ele almaz. İşletmenin hedef kitlesine,
              satış döngüsüne, marka algısına ve dijital büyüme potansiyeline göre özel
              reklam, içerik ve medya yönetimi yaklaşımı geliştirir.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sectorItems.map((sector) => (
              <article
                key={sector.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6B05D]/30 hover:bg-white/[0.065] sm:p-7"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#D6B05D]/5 blur-3xl transition group-hover:bg-[#D6B05D]/10" />

                <div className="relative">
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-[#05070D]/60 text-2xl">
                    {sector.icon}
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.035em] text-white sm:text-2xl">
                    {sector.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {sector.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm font-black text-[#D6B05D]">
                    Sektöre özel çözüm
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#D6B05D]/20 bg-[#D6B05D]/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F5D98B]">
                  Sektörünüze özel medya planı
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  Markanız hangi sektörde olursa olsun, doğru büyüme hattını birlikte çıkaralım.
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  Hedef kitlenizi, mevcut dijital durumunuzu ve satış hedeflerinizi analiz ederek
                  size özel reklam, içerik ve sosyal medya yol haritası hazırlayabiliriz.
                </p>
              </div>

              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#070A12] transition hover:-translate-y-1 hover:bg-[#F5D98B]"
              >
                Sektörüme Uygun Plan Al
              </a>
            </div>
          </div>
        </div>
      </section>
            <section
        id="paketler"
        className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
              Paketler / Hizmet Planları
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Markanızın ihtiyacına göre doğru medya yönetimi planını seçin.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              NODUS MEDYA’da paketler sabit kalıplar olarak değil; markanın sektörü,
              hedef kitlesi, mevcut dijital durumu ve büyüme hedeflerine göre şekillenen
              stratejik hizmet planları olarak ele alınır.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {packageItems.map((plan) => (
              <article
                key={plan.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6B05D]/35 hover:bg-white/[0.065] sm:p-7"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#D6B05D]/5 blur-3xl transition group-hover:bg-[#D6B05D]/10" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 inline-flex w-fit rounded-full border border-[#D6B05D]/25 bg-[#D6B05D]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#F5D98B]">
                    {plan.badge}
                  </div>

                  <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#05070D]/55 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Kimler için uygun?
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {plan.bestFor}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6B05D]/15 text-xs font-black text-[#F5D98B]">
                          ✓
                        </span>

                        <p className="text-sm leading-6 text-slate-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#iletisim"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-[#D6B05D]/30 bg-[#D6B05D]/10 px-6 py-3 text-sm font-black text-[#F5D98B] transition hover:-translate-y-1 hover:bg-[#D6B05D]/20"
                  >
                    Bu paket için görüşme talep et
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D6B05D]">
                  Fiyatlandırma yaklaşımı
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  Her marka için aynı fiyat değil, ihtiyaca göre doğru kapsam.
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  Paket kapsamı; içerik sayısı, reklam yönetimi ihtiyacı, sektör,
                  kampanya hedefi, tasarım yoğunluğu ve teknoloji desteğine göre netleştirilir.
                  Bu yüzden en doğru plan, kısa bir ön görüşme sonrası belirlenir.
                </p>
              </div>

              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#070A12] transition hover:-translate-y-1 hover:bg-[#F5D98B]"
              >
                Bana Uygun Paketi Belirle
              </a>
            </div>
          </div>
        </div>
      </section>
            <section
        id="nodus-metodu"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
              NODUS Metodu
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Düğümden çözüme uzanan stratejik büyüme sistemi.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              NODUS MEDYA, markaların dijitalde karşılaştığı karmaşık reklam,
              içerik ve görünürlük problemlerini sistemli bir süreçle çözer.
              Her adım; analiz, strateji, üretim ve ölçüm mantığıyla ilerler.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />

            <div className="grid gap-6 lg:grid-cols-2">
              {methodSteps.map((item, index) => (
                <article
                  key={item.step}
                  className={`group relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] ${
                    index % 2 === 1 ? "lg:translate-y-14" : ""
                  }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#38BDF8]/5 blur-3xl transition group-hover:bg-[#D6B05D]/10" />

                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-sm font-black text-[#F5D98B]">
                      {item.step}
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-28 rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(214,176,93,0.12),_transparent_34%),rgba(255,255,255,0.045)] p-8 shadow-2xl backdrop-blur-xl lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">
                  Süreç Mantığı
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  Her kampanya bir tahmin değil, yönetilebilir bir sistemdir.
                </h3>
              </div>

              <p className="text-base leading-8 text-slate-400">
                NODUS yaklaşımı, markanın sadece bugün görünür olmasına değil;
                sürdürülebilir şekilde büyümesine odaklanır. Bu nedenle her
                içerik, her reklam ve her kampanya; strateji, estetik ve ölçüm
                üçgeninde değerlendirilir.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section
        id="teknoloji"
        className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
                Teknoloji Yaklaşımı
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Reklamcılığı teknolojiyle yeniden yorumluyoruz.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                NODUS MEDYA, gelişen dijital teknolojileri ve yazılım tabanlı düşünceyi reklam ve medya yönetimi süreçlerine entegre eder.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Amacımız yalnızca içerik üretmek değil; markanın reklam, görünürlük, müşteri iletişimi ve büyüme süreçlerini daha ölçülebilir, daha stratejik ve daha sürdürülebilir hale getiren yeni nesil bir medya sistemi kurmaktır.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Veri Odaklı", "Yazılım Tabanlı", "Ölçülebilir", "Yeni Nesil"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">
                      Nodus Tech Layer
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                      Medya Yönetim Motoru
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-sm font-black text-[#F5D98B]">
                    AI
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-300">Strateji Analizi</span>
                      <span className="font-black text-[#D6B05D]">92%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-[#D6B05D] to-[#38BDF8]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-300">İçerik Uyumu</span>
                      <span className="font-black text-[#38BDF8]">87%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#7C3AED]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-300">Büyüme Potansiyeli</span>
                      <span className="font-black text-[#C4B5FD]">81%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[81%] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D6B05D]" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-2xl font-black text-white">01</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">Veri okuma ve medya analizi</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-2xl font-black text-white">02</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">Stratejik içerik kurgusu</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-2xl font-black text-white">03</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">Performans optimizasyonu</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden rounded-3xl border border-white/10 bg-[#05070D]/80 p-5 shadow-xl backdrop-blur-2xl sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B05D]">
                  Sistem Notu
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                  Reklam, içerik ve görünürlük süreçleri tek bir büyüme akışında birleşir.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]">
                01
              </div>
              <h3 className="text-xl font-black text-white">Veriyle Güçlenen Strateji</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Reklam ve içerik kararlarını tahmine değil, hedef kitle, performans ve görünürlük verilerine dayandırırız.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-[#F5D98B]">
                02
              </div>
              <h3 className="text-xl font-black text-white">Yazılım Tabanlı Bakış</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Medya yönetimini yalnızca manuel bir süreç değil, geliştirilebilir ve sistemleştirilebilir bir teknoloji alanı olarak ele alırız.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#C4B5FD]">
                03
              </div>
              <h3 className="text-xl font-black text-white">Ölçülebilir Büyüme</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Her kampanya, her içerik ve her reklam süreci; performans takibi ve sürekli iyileştirme mantığıyla yönetilir.
              </p>
            </article>
          </div>
        </div>
      </section>
            <section
        id="admind-ai"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
              NODUS MEDYA Teknolojisi
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              AdMind.Ai ile reklam yönetimini teknolojiyle güçlendiriyoruz.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              AdMind.Ai, NODUS MEDYA ekibi tarafından geliştirilen yapay zekâ destekli reklam ve medya yönetimi platformudur. 
              Markaların reklam fikrinden içerik üretimine, müşteri mesajlarından performans analizine kadar olan sürecini daha akıllı, daha hızlı ve daha ölçülebilir hale getirmek için tasarlanmıştır.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Bu teknoloji yaklaşımı sayesinde NODUS MEDYA; yalnızca içerik üreten bir ajans değil, reklam süreçlerini yazılım, veri ve yapay zekâ ile geliştiren yeni nesil bir medya yönetimi markası olarak konumlanır.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#070A12] transition hover:-translate-y-1 hover:bg-[#F5D98B]"
              >
                AdMind.Ai Hakkında Bilgi Al
              </a>

              <a
                href="https://admind-ai-gold.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-[#D6B05D]/40 hover:bg-white/[0.07]"
              >
                Canlı MVP&apos;yi İncele
              </a>
            </div>
          </div>

          <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[#D6B05D]/10 via-transparent to-[#38BDF8]/10" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Product Lab
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                    AdMind.Ai
                  </h3>
                </div>

                <div className="rounded-full border border-[#D6B05D]/30 bg-[#D6B05D]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#F5D98B]">
                  AI MVP
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {admindHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#05070D]/60 p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D6B05D]/10 text-sm font-black text-[#F5D98B]">
                      ✓
                    </div>

                    <p className="text-sm font-semibold leading-6 text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-3xl border border-[#D6B05D]/20 bg-[#D6B05D]/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5D98B]">
                  NODUS farkı
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Reklam yönetimini yalnızca paylaşım ve tasarım süreci olarak değil; strateji, otomasyon, müşteri dönüşümü ve performans ölçümüyle birlikte ele alan bütünleşik bir sistem geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section
        id="neden-nodus"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
                Neden NODUS MEDYA?
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Çünkü markanız sadece görünür değil, stratejik olarak güçlü olmalı.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto">
              NODUS MEDYA; reklam, içerik, sosyal medya ve teknoloji yaklaşımını tek bir büyüme sisteminde birleştirerek markaların dijital dünyada daha net, daha güçlü ve daha profesyonel konumlanmasını sağlar.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D6B05D]/5 blur-3xl transition group-hover:bg-[#38BDF8]/10" />

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-black text-[#D6B05D]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4" />
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_35%),rgba(255,255,255,0.045)] p-8 shadow-xl backdrop-blur-2xl lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">
                  NODUS Farkı
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  Reklam, içerik ve medya yönetimini birbirinden kopuk işler olarak değil; tek bir büyüme mimarisi olarak görürüz.
                </h3>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#05070D]/70 p-6">
                <p className="text-base leading-8 text-slate-300">
                  NODUS yaklaşımında her marka için önce düğüm tespit edilir:
                  görünürlük mü, içerik dili mi, reklam verimliliği mi, marka algısı mı?
                  Ardından bu düğüm strateji, tasarım, yayın ve ölçüm sistemiyle çözülür.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section
        id="sss"
        className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D6B05D]">
              Sıkça Sorulan Sorular
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              NODUS MEDYA ile çalışmadan önce bilmeniz gerekenler.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Reklam, sosyal medya ve dijital büyüme süreçleriyle ilgili en çok merak edilen soruları sade şekilde yanıtladık.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-2xl transition hover:border-white/20 hover:bg-white/[0.07] sm:p-7"
              >
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-sm font-black text-[#F5D98B]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-black tracking-[-0.03em] text-white sm:text-xl">
                      {item.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
                 <section
        id="iletisim"
        className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-4 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D6B05D]/10 blur-[140px]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[80px]" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#7C3AED]/10 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(214,176,93,0.14),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),_transparent_38%),rgba(255,255,255,0.045)] p-6 shadow-xl backdrop-blur-2xl sm:p-8 lg:rounded-[2.5rem] lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B05D] sm:text-sm sm:tracking-[0.28em]">
                  İletişim
                </p>

                <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Markanızın dijital büyüme düğümünü birlikte çözelim.
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
                  NODUS MEDYA ile reklam, sosyal medya, marka stratejisi ve teknoloji destekli medya yönetimi süreçlerinizi daha güçlü bir sisteme dönüştürmek için ilk görüşmeyi planlayın.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-6 py-4 text-sm font-black text-[#080A12] shadow-xl shadow-[#D6B05D]/20 transition hover:-translate-y-0.5 hover:bg-[#F5D98B] sm:px-7"
                  >
                    NODUS MEDYA ile Görüş
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </a>

                  <a
                    href="mailto:nodusmedya09@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.1] sm:px-7"
                  >
                    E-posta Gönder
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {contactItems.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group rounded-[1.5rem] border border-white/10 bg-[#05070D]/55 p-5 shadow-xl backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#05070D]/80 sm:rounded-[2rem] sm:p-6"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D6B05D] sm:text-xs sm:tracking-[0.26em]">
                            {item.label}
                          </p>

                          <p className="mt-3 break-words text-base font-black text-white sm:text-lg">
                            {item.value}
                          </p>
                        </div>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition group-hover:translate-x-1 group-hover:border-[#D6B05D]/40 group-hover:text-[#D6B05D] sm:h-11 sm:w-11">
                          →
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#38BDF8]">
                  Teklif Talep Formu
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  İhtiyacınızı yazın, görüşmeyi WhatsApp üzerinden başlatalım.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Formu doldurduğunuzda bilgileriniz otomatik olarak WhatsApp mesajına dönüşür. Böylece NODUS MEDYA ile hızlı ve düzenli bir ön görüşme başlatabilirsiniz.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Ad Soyad
    </label>
    <input
      type="text"
      value={formData.name}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, name: event.target.value }))
      }
      placeholder="Adınızı yazın"
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B05D]/50"
    />
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Marka / İşletme
    </label>
    <input
      type="text"
      value={formData.brand}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, brand: event.target.value }))
      }
      placeholder="Marka adınızı yazın"
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B05D]/50"
    />
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Telefon / WhatsApp
    </label>
    <input
      type="tel"
      value={formData.phone}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, phone: event.target.value }))
      }
      placeholder="05xx xxx xx xx"
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B05D]/50"
    />
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Sektör
    </label>
    <select
      value={formData.sector}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, sector: event.target.value }))
      }
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition focus:border-[#D6B05D]/50"
    >
      {sectorOptions.map((sector) => (
        <option key={sector} value={sector}>
          {sector}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      İlgilenilen Hizmet
    </label>
    <select
      value={formData.service}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, service: event.target.value }))
      }
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition focus:border-[#D6B05D]/50"
    >
      {serviceOptions.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      İlgilenilen Paket
    </label>
    <select
      value={formData.plan}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, plan: event.target.value }))
      }
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition focus:border-[#D6B05D]/50"
    >
      {packageOptions.map((plan) => (
        <option key={plan} value={plan}>
          {plan}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Aylık Hedef
    </label>
    <select
      value={formData.goal}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, goal: event.target.value }))
      }
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition focus:border-[#D6B05D]/50"
    >
      {goalOptions.map((goal) => (
        <option key={goal} value={goal}>
          {goal}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Sosyal Medya Hesabı
    </label>
    <input
      type="text"
      value={formData.socialAccount}
      onChange={(event) =>
        setFormData((prev) => ({ ...prev, socialAccount: event.target.value }))
      }
      placeholder="@kullaniciadi veya link"
      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B05D]/50"
    />
  </div>
</div>

<div className="mt-4">
  <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
    Ek Mesaj
  </label>
  <textarea
    value={formData.message}
    onChange={(event) =>
      setFormData((prev) => ({ ...prev, message: event.target.value }))
    }
    placeholder="Markanız, hedefiniz veya ihtiyacınız hakkında kısa bilgi yazabilirsiniz."
    rows={5}
    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#05070D]/70 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B05D]/50"
  />
</div>

<div className="mt-6 rounded-2xl border border-[#D6B05D]/20 bg-[#D6B05D]/10 p-4">
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5D98B]">
    WhatsApp ön görüşme mesajı
  </p>
  <p className="mt-2 text-sm leading-7 text-slate-300">
    Formu gönderdiğinizde bilgileriniz otomatik olarak WhatsApp mesajına dönüştürülür.
    Bu sayfa üzerinde herhangi bir veri kaydı yapılmaz.
  </p>
</div>

<button
  type="submit"
  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#070A12] transition hover:-translate-y-1 hover:bg-[#F5D98B]"
>
  WhatsApp Üzerinden Görüşme Başlat
</button>
              </form>
            </div>
          </div>

                <section className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-20 sm:px-8 lg:px-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D6B05D]/10 blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl rounded-[2.5rem] border border-[#D6B05D]/20 bg-gradient-to-br from-[#D6B05D]/12 via-white/[0.035] to-[#38BDF8]/10 p-7 shadow-xl backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#F5D98B]">
                NODUS MEDYA ile büyüme hattınızı kurun
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.055em] text-white sm:text-5xl">
                Markanızın reklam, medya ve teknoloji düğümünü birlikte çözelim.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Sosyal medya yönetimi, reklam stratejisi, içerik üretimi, sektörünüze özel medya planı ve AdMind.Ai destekli teknoloji yaklaşımıyla markanız için daha sistemli bir büyüme süreci tasarlayabiliriz.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#070A12] transition hover:-translate-y-1 hover:bg-[#F5D98B]"
              >
                Teklif Formunu Doldur
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-[#D6B05D]/40 hover:bg-white/[0.08]"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050A] px-5 py-14 sm:px-8 lg:px-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D6B05D]/8 blur-[90px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#38BDF8]/8 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
            <div>
              <a href="#" className="inline-flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
                  <Image
                    src="/nodus-logo-512.png"
                    alt="NODUS MEDYA Logo"
                    width={120}
                    height={120}
                    sizes="64px"
                    className="h-full w-full scale-[1.18] object-contain brightness-[1.35] contrast-[1.15]"
                  />
                </div>

                <div>
                  <p className="text-xl font-black tracking-[-0.04em] text-white">
                    NODUS MEDYA
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#D6B05D]">
                    Yeni Nesil Medya Yönetimi
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                NODUS MEDYA; reklam, sosyal medya, marka stratejisi, içerik üretimi ve teknoloji destekli medya çözümleriyle markaların dijital büyüme düğümünü çözer.
              </p>

              <div className="mt-6 rounded-2xl border border-[#D6B05D]/20 bg-[#D6B05D]/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5D98B]">
                  Product Lab
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  AdMind.Ai, NODUS MEDYA ekibi tarafından geliştirilen yapay zekâ destekli reklam ve medya yönetimi MVP’sidir.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Hızlı Linkler
              </h3>

              <div className="mt-5 grid gap-3">
                {navItems.slice(0, 6).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-400 transition hover:text-[#F5D98B]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Hizmetler
              </h3>

              <div className="mt-5 grid gap-3">
                {serviceItems.slice(0, 6).map((service) => (
                  <a
                    key={service.slug}
                    href={`#${service.slug}`}
                    className="text-sm font-medium text-slate-400 transition hover:text-[#F5D98B]"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                İletişim
              </h3>

              <div className="mt-5 grid gap-3">
                {contactItems.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#D6B05D]/30 hover:bg-white/[0.06]"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 break-words text-sm font-bold text-slate-300 transition group-hover:text-white">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 NODUS MEDYA. Tüm hakları saklıdır.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#paketler" className="transition hover:text-[#F5D98B]">
                Paketler
              </a>
              <a href="#admind-ai" className="transition hover:text-[#F5D98B]">
                AdMind.Ai
              </a>
              <a href="#iletisim" className="transition hover:text-[#F5D98B]">
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </footer>
        </div>
      </section>
    </main>
  );
}
