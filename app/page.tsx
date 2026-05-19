"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

const navItems = [
  { label: "Biz Kimiz", href: "#biz-kimiz" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "NODUS Metodu", href: "#nodus-metodu" },
  { label: "Teknoloji", href: "#teknoloji" },
  { label: "SSS", href: "#sss" },
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
  },
  {
    number: "02",
    title: "Reklam Yönetimi",
    description:
      "Meta, Google ve dijital reklam kanallarında bütçeyi doğru hedef kitleyle buluşturan ölçülebilir kampanya süreçleri oluştururuz.",
    accent: "border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]",
  },
  {
    number: "03",
    title: "Marka Stratejisi",
    description:
      "Markanın konumlandırmasını, iletişim tonunu, hedef kitlesini ve büyüme rotasını netleştiren stratejik marka sistemi kurarız.",
    accent: "border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#C4B5FD]",
  },
  {
    number: "04",
    title: "İçerik Üretimi",
    description:
      "Reels, post, story, kampanya metni ve yaratıcı içerik fikirleriyle markanın dijitalde güçlü ve tutarlı görünmesini sağlarız.",
    accent: "border-white/20 bg-white/10 text-white",
  },
  {
    number: "05",
    title: "SEO & GEO Görünürlük",
    description:
      "Markanızın arama motorlarında ve yapay zeka destekli arama deneyimlerinde daha görünür olması için içerik ve görünürlük stratejileri geliştiririz.",
    accent: "border-[#D6B05D]/30 bg-[#D6B05D]/10 text-[#F5D98B]",
  },
  {
    number: "06",
    title: "Teknoloji Destekli Medya Çözümleri",
    description:
      "Reklam, içerik ve medya yönetimi süreçlerini yazılım, veri ve yeni nesil dijital araçlarla daha verimli hale getiririz.",
    accent: "border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]",
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
      logo: "https://nodus-medya-site.vercel.app/nodus-logo.png",
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
    service: "Sosyal Medya Yönetimi",
    message: "",
  });

  const leadMessage = `Merhaba NODUS MEDYA, web siteniz üzerinden bilgi almak istiyorum.

Ad Soyad: ${formData.name || "-"}
Marka / İşletme: ${formData.brand || "-"}
Telefon: ${formData.phone || "-"}
İlgilendiğim Hizmet: ${formData.service || "-"}
Mesaj: ${formData.message || "-"}`;

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
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7C3AED]/20 blur-[120px]" />
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-[#38BDF8]/20 blur-[110px]" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#D6B05D]/10 blur-[110px]" />

        <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="group flex items-center" aria-label="NODUS MEDYA ana sayfa">
  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-visible rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-1 shadow-lg backdrop-blur-2xl transition duration-300 group-hover:border-[#D6B05D]/40 group-hover:bg-white/[0.05] sm:h-20 sm:w-20 sm:rounded-[1.5rem] lg:h-24 lg:w-24 lg:rounded-[1.6rem]">
    <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.04] via-transparent to-[#D6B05D]/[0.06]" />

    <Image
      src="/nodus-logo-1.png"
      alt="NODUS MEDYA Logo"
      width={180}
      height={180}
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
        </header>

        {isMenuOpen && (
          <div className="relative z-30 mx-5 rounded-3xl border border-white/10 bg-[#0B1020]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
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

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-8">
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

            <div className="relative flex h-60 w-60 items-center justify-center rounded-[3rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
              <div className="absolute h-36 w-36 rounded-[2rem] border border-[#D6B05D]/50 rotate-45" />
              <div className="absolute h-28 w-28 rounded-full border border-[#38BDF8]/50" />
              <div className="absolute h-20 w-20 rounded-[1.5rem] border border-white/20 -rotate-12" />
              <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_90px_rgba(214,176,93,0.22)] backdrop-blur-2xl">
  <Image
    src="/nodus-logo-1.png"
    alt="NODUS MEDYA Logo"
    width={250}
    height={250}
    className="h-full w-full object-contain brightness-[1.35] contrast-[1.2] saturate-[1.08]"
    priority
  />
</div>
            </div>

            <div className="absolute right-0 top-20 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B05D]">Nodus Signal</p>
              <p className="mt-2 text-2xl font-black text-white">+ Strateji</p>
              <p className="mt-1 text-sm text-slate-400">Marka büyüme haritası</p>
            </div>

            <div className="absolute bottom-20 left-0 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-2xl">
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
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#D6B05D]/10 blur-[120px]" />

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
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-xl">01</div>
              <h3 className="text-xl font-black text-white">Stratejik Çözüm</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Her marka için aynı şablonu değil, hedefe göre kurgulanan medya ve reklam stratejisini merkeze alırız.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-2xl sm:translate-y-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-xl">02</div>
              <h3 className="text-xl font-black text-white">Yeni Nesil Medya</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Sosyal medya, reklam yönetimi, içerik üretimi ve dijital görünürlüğü tek bir büyüme akışında birleştiririz.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-xl">03</div>
              <h3 className="text-xl font-black text-white">Teknoloji Odağı</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Gelişen teknolojileri, veri odaklı düşünceyi ve yazılım tabanlı yaklaşımı medya yönetimine entegre ederiz.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-2xl sm:translate-y-8">
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
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[130px]" />

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
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
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

                <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#D6B05D]">
                  Detaylı İncele
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl sm:flex sm:items-center sm:justify-between sm:p-8">
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
        id="nodus-metodu"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D6B05D]/10 blur-[130px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[130px]" />

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
                  className={`group relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] ${
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

          <div className="mt-28 rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(214,176,93,0.12),_transparent_34%),rgba(255,255,255,0.045)] p-8 shadow-2xl backdrop-blur-2xl lg:p-10">
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
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[150px]" />

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
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
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

              <div className="absolute -bottom-6 -left-4 hidden rounded-3xl border border-white/10 bg-[#05070D]/80 p-5 shadow-2xl backdrop-blur-2xl sm:block">
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
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC]">
                01
              </div>
              <h3 className="text-xl font-black text-white">Veriyle Güçlenen Strateji</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Reklam ve içerik kararlarını tahmine değil, hedef kitle, performans ve görünürlük verilerine dayandırırız.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B05D]/30 bg-[#D6B05D]/10 text-[#F5D98B]">
                02
              </div>
              <h3 className="text-xl font-black text-white">Yazılım Tabanlı Bakış</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Medya yönetimini yalnızca manuel bir süreç değil, geliştirilebilir ve sistemleştirilebilir bir teknoloji alanı olarak ele alırız.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl">
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
        id="neden-nodus"
        className="relative overflow-hidden border-t border-white/10 bg-[#05070D] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[130px]" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[130px]" />

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
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
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

          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_35%),rgba(255,255,255,0.045)] p-8 shadow-2xl backdrop-blur-2xl lg:p-10">
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
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D6B05D]/10 blur-[130px]" />

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
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-2xl transition hover:border-white/20 hover:bg-white/[0.07] sm:p-7"
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
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#7C3AED]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(214,176,93,0.14),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),_transparent_38%),rgba(255,255,255,0.045)] p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:rounded-[2.5rem] lg:p-12">
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
                    className="group inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-6 py-4 text-sm font-black text-[#080A12] shadow-2xl shadow-[#D6B05D]/20 transition hover:-translate-y-0.5 hover:bg-[#F5D98B] sm:px-7"
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
                      className="group rounded-[1.5rem] border border-white/10 bg-[#05070D]/55 p-5 shadow-2xl backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#05070D]/80 sm:rounded-[2rem] sm:p-6"
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

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
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
                  <input
                    type="text"
                    required
                    placeholder="Ad Soyad"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6B05D]/50"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Marka / İşletme Adı"
                    value={formData.brand}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        brand: event.target.value,
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6B05D]/50"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6B05D]/50"
                  />

                  <select
                    value={formData.service}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        service: event.target.value,
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-[#05070D]/70 px-5 py-4 text-sm text-white outline-none transition focus:border-[#D6B05D]/50"
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} className="bg-[#05070D] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  rows={5}
                  placeholder="Kısaca ihtiyacınızı yazın..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#05070D]/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6B05D]/50"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#D6B05D] px-7 py-4 text-sm font-black text-[#080A12] shadow-2xl shadow-[#D6B05D]/20 transition hover:-translate-y-0.5 hover:bg-[#F5D98B]"
                >
                  Formu WhatsApp’tan Gönder
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 NODUS MEDYA. Tüm hakları saklıdır.</p>

            <div className="flex flex-wrap gap-4">
              <a href="#biz-kimiz" className="transition hover:text-white">
                Biz Kimiz
              </a>
              <a href="#hizmetler" className="transition hover:text-white">
                Hizmetler
              </a>
              <a href="#nodus-metodu" className="transition hover:text-white">
                NODUS Metodu
              </a>
              <a href="#teknoloji" className="transition hover:text-white">
                Teknoloji
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
