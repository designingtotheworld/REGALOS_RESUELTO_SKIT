/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Gift, Sparkles, Check, ChevronRight, ChevronLeft, ShieldCheck, 
  Clock, AlertCircle, HelpCircle, Package, Play, ShoppingCart, Star, Plus, Flame, Award, Video, FileText, MessageCircle, Store, TrendingUp
} from 'lucide-react';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeGiftIndex, setActiveGiftIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveGiftIndex((prev) => (prev + 1 >= giftIdeas.length ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const giftIdeas = [
    {
      title: "Totebag de playa y verano",
      para: "turistas y veraneantes buscando accesorios cancheros.",
      detail: "3 diseños profesionales para armar hasta 3 bolsas (34 x 37 cm) con 300% de margen.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/PRUEBA_NUEVA_-80_0d595ff8.jpg"
    },
    {
      title: "Neceser de verano y viaje",
      para: "la valija de enero, ferias costeras y regalos de temporada.",
      detail: "3 diseños para armar hasta 3 neceseres (20 x 15 cm) de altísima salida en ferias.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/NECESER-80_90e1ba93.jpg"
    },
    {
      title: "Vela temática fin de año y buena energía",
      para: "decoración navideña, mesas festivas y regalos detallistas.",
      detail: "3 diseños para armar hasta 6 velas (5 x 5 cm) con etiquetas premium DTF UV.",
      tag: "DTF UV",
      img: "/assets/aistudio/VELAS-80_6a96447e.jpg"
    },
    {
      title: "El delantal del asador festivo",
      para: "regalos para papás, asados de fin de año y reuniones familiares.",
      detail: "3 diseños para armar hasta 5 delantales de cocina de alta resistencia.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/DELANTALES-80_721e8d83.jpg"
    },
    {
      title: "Almohadón deco vintage",
      para: "renovación de hogares para las fiestas y turistas.",
      detail: "2 diseños para armar 2 almohadones de 40 x 40 cm listos para lucir en tu puesto.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/ALMOHADONES-80_da167cca.jpg"
    },
    {
      title: "Muñecos de animalitos tiernos",
      para: "regalos infantiles en ferias navideñas y Reyes Magos.",
      detail: "2 diseños para armar 2 almohadones de animalitos de 30 cm de alto.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/BICHITOS-80_7423286e.jpg"
    },
    {
      title: "Vasos térmicos y de fernet",
      para: "la previa, jóvenes y turistas en la costa y sierras.",
      detail: "3 diseños para armar hasta 7 juegos de vasos (sticker UV de alta durabilidad).",
      tag: "DTF UV",
      img: "/assets/aistudio/VASOS-80_f555d110.jpg"
    },
    {
      title: "Tazas coleccionables navideñas",
      para: "regalos empresariales, amigos invisibles y souvenirs.",
      detail: "3 diseños para armar hasta 12 tazas personalizadas con acabado brillante.",
      tag: "DTF UV",
      img: "/assets/aistudio/TAZAS-80_4e860e58.jpg"
    },
    {
      title: "Anotadores y Agendas",
      para: "regalos útiles para arrancar el año con todo en enero.",
      detail: "4 diseños para armar hasta 6 anotadores profesionales (14 x 21 cm).",
      tag: "DTF UV",
      img: "/assets/aistudio/ANOTADOR-80_9770c65c.jpg"
    },
    {
      title: "Stickers para termos y botellas",
      para: "el furor del mate en la playa, pileta y camping.",
      detail: "4 planchas de stickers listos para vender por unidad o combo en tu puesto.",
      tag: "DTF UV",
      img: "/assets/aistudio/stickers_sueltos-80_90f2b873.jpg"
    },
  ];

  const faqs = [
    { q: "¿Necesito una máquina de estampado profesional para empezar en la feria?", a: "¡No! Una de las grandes ventajas para emprendedores es que no invertís en costosas planchas térmicas industriales. Las guías te enseñan a estampar con la plancha hogareña y a aplicar DTF UV en rígidos sin máquinas." },
    { q: "¿Cómo recibo los archivos al comprar?", a: "El acceso es inmediato. Descargas todos los vectores y archivos listos en alta resolución (300 DPI) para enviar a imprimir a cualquier imprenta gráfica por metro." },
    { q: "¿Cuánto le gano a cada producto en mi puesto o redes?", a: "¡Entre un 200% y un 300% de margen! Con solo vender 2 o 3 productos recuperás el costo total del kit digital completo." },
    { q: "¿Sirve tanto para ferias navideñas como para la temporada turística de verano?", a: "¡Exacto! El kit incluye productos pensados tanto para las compras de fin de año y Reyes como para el furor de turistas en la costa, sierras y centros de vacaciones." }
  ];

  const checkoutUrl = "https://patatas-store.impultienda.ar/checkout";
  const whatsappUrl = "https://wa.me/5491122868735?text=Hola%2C%20tengo%20una%20duda%20sobre%20el%20kit%20para%20emprendedores%20y%20feriantes";

  const handleCheckoutClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'InitiateCheckout');
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1C1E] font-sans antialiased selection:bg-red-200 selection:text-red-900">
      <style>{`
        @keyframes ring {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(18deg); }
          40% { transform: rotate(-18deg); }
          60% { transform: rotate(12deg); }
          80% { transform: rotate(-12deg); }
          100% { transform: rotate(0deg); }
        }
        .bell-ring {
          animation: ring 1.1s ease-in-out infinite;
          display: inline-block;
          transform-origin: top center;
        }
        @keyframes blink-light {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); filter: drop-shadow(0 0 10px #FFD700); }
        }
        .garland-light-1 { animation: blink-light 0.9s ease-in-out infinite; }
        .garland-light-2 { animation: blink-light 0.9s ease-in-out infinite 0.3s; }
        .garland-light-3 { animation: blink-light 0.9s ease-in-out infinite 0.6s; }
      `}</style>

      {/* TOP URGENCY BANNER */}
      <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] text-white py-3.5 px-4 text-center text-xs md:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg sticky top-0 z-50">
        <span className="bell-ring text-lg">🔔</span>
        <span>⚡ KIT EMPRENDEDORES & FERIANTES: OFERTA LANZAMIENTO ARS $15.000 (50% OFF) ⚡</span>
        <span className="bell-ring text-lg">🔔</span>
      </div>

      {/* WHITE AIR GAP */}
      <div className="h-6 w-full bg-[#FAF9F5]"></div>

      {/* TOP BRAND BANNER WITH GARLAND LIGHTS */}
      <header className="w-full bg-white border-y-4 border-[#D4AF37] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-5 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-b border-[#D4AF37]">
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
        </div>

        <div className="w-full bg-white relative">
          <img 
            src="/assets/aistudio/image_7a09c028.png" 
            alt="Kit Digital Regalos Resueltos - Promesa Principal" 
            className="w-full h-auto object-cover block m-0 p-0"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Super converting promise banner */}
        <div className="bg-gradient-to-r from-[#1B4D3E] via-[#0F382B] to-[#143B30] py-6 px-6 text-center text-white border-t-2 border-[#D4AF37] space-y-2 relative z-20 shadow-xl">
          <span className="text-[11px] md:text-xs font-black uppercase tracking-widest bg-[#D4AF37] text-[#1C1C1E] px-4 py-1.5 rounded-full shadow-md inline-block">
            🌟 KIT EMPRENDEDORES & FERIANTES
          </span>
          <h1 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase drop-shadow-lg">
            ¡Triplicá tus ventas con el kit para armar más de 50 productos rentables y con diseños en tendencia!
          </h1>
          <p className="text-xs md:text-sm text-white/90 max-w-xl mx-auto font-medium leading-relaxed">
            Diseños profesionales listos para ferias navideñas y turísticas con 300% de margen y sin máquinas caras.
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-5 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-t border-[#D4AF37]">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

        {/* SECCIÓN ENFOQUE EMPRENDEDORES Y FERIANTES */}
        <section className="bg-white border-2 border-[#D4AF37] rounded-3xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto space-y-6 text-[#1C1C1E]">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4D3E] text-white font-black text-xs uppercase tracking-widest shadow">
              <Store className="w-4 h-4 text-[#D4AF37]" /> Diseñado para Emprendedores y Feriantes
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#996515]">
              Aprovechá la temporada de Fiestas y Ferias Turísticas de Verano
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#48484A] text-center leading-relaxed max-w-2xl mx-auto">
            ¿Querés stock con alta rotación y <strong className="text-[#B31942]">300% de rentabilidad</strong> para vender en tu puesto de feria, local o por redes sociales? Este kit te da todo listo para producir sin depender de grandes inversiones ni máquinas industriales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-bold text-[#1C1C1E] max-w-xl mx-auto bg-[#FAF9F5] p-5 rounded-2xl border border-[#D4AF37] shadow-inner">
            <div className="flex items-center gap-2.5"><span>⛺</span> <span>Ferias navideñas de fin de año</span></div>
            <div className="flex items-center gap-2.5"><span>🏖️</span> <span>Ferias en destinos turísticos (Costa y Sierras)</span></div>
            <div className="flex items-center gap-2.5"><span>📱</span> <span>Ventas directas por Instagram y WhatsApp</span></div>
            <div className="flex items-center gap-2.5"><span>💰</span> <span>Bajo costo de producción por metro</span></div>
          </div>
        </section>

        {/* HERO CTA (BOTÓN 1) */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2">
          <div className="pt-2 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <a 
                href={checkoutUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCheckoutClick}
                className="w-full max-w-md mx-auto px-6 py-5 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-1 border-2 border-white text-center"
              >
                <div className="text-sm md:text-base font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO EL KIT PARA MI EMPRENDIMIENTO!</div>
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mt-1">ARS $15.000</div>
              </a>
            </div>
          </div>
        </section>

        {/* VIDEO DEMOSTRATIVO */}
        <section className="space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E] leading-snug">
              Mirá lo fácil que es armar stock para<br />tu <span className="text-[#D93829]">puesto o negocio</span>
            </h3>
            <p className="text-xs text-[#6E6E73] uppercase tracking-wider font-semibold">
              Paso a paso: elegís diseño → mandás a imprimir → armás tus productos y vendés.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto', aspectRatio: '9/16', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#000' }}>
            {!isPlayingVideo ? (
              <div 
                onClick={() => setIsPlayingVideo(true)}
                className="absolute inset-0 cursor-pointer group flex items-center justify-center bg-black"
              >
                <img 
                  src="https://img.youtube.com/vi/xsQWX1yWCEM/hqdefault.jpg" 
                  alt="Portada del Video" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#D93829] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current translate-x-0.5 text-white" />
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/xsQWX1yWCEM?autoplay=1" 
                title="Kit Digital Emprendedores" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </section>

        {/* CÓMO FUNCIONA / BLOQUE VERDE (BOTÓN 2) */}
        <section className="bg-[#0F382B] border-2 border-[#D4AF37] rounded-3xl p-6 md:p-12 shadow-2xl space-y-8 text-white relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C1C1E] bg-[#D4AF37] px-5 py-2 rounded-full shadow-md inline-block">
              PRODUCCIÓN ÁGIL Y RENTABLE
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight">
              ¿Cómo armás tus productos para vender sin máquinas caras?
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              Trabajamos con <strong className="text-[#D4AF37]">DTF Textil y DTF UV</strong>: recibís los diseños optimizados por metro para mandar a imprimir en imprentas gráficas y aplicar rápidamente en tu casa o taller.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37] shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Elegís el kit de productos</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Totebags, neceseres, tazas, vasos, termos o delantales ideales para turistas y compradores navideños. Archivos preparados a escala real para aprovechar al máximo cada centímetro.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37] shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Mandás a imprimir por metro</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Llevás los archivos a tu imprenta gráfica amiga. Un metro de impresión DTF (que rinde para varios productos) ronda entre ARS $11.000 y $15.000, asegurando costos bajísimos por artículo.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37] shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Armás stock y salís a vender</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Aplicás con plancha hogareña en textiles o pegás los stickers UV en rígidos. ¡Listo! Ya tenés productos profesionales con tu marca o diseño para tu puesto en la feria.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-[#0B2920] border-2 border-[#D4AF37] rounded-2xl p-6 shadow-inner text-white text-xs md:text-sm leading-relaxed space-y-2">
            <p className="font-bold text-[#D4AF37]">
              💡 Alta Rentabilidad Garantizada
            </p>
            <p className="text-white/90">
              Con un solo metro de impresión y los blanks mayoristas, el costo por producto es mínimo, permitiéndote ofrecer precios competitivos en ferias navideñas y de temporada turística con márgenes superiores al 300%.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a 
              href={checkoutUrl} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckoutClick}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C2A130] text-[#1C1C1E] border-2 border-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition-all inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 text-[#1C1C1E]" />
              <span>QUIERO EL KIT EMPRENDEDORES Y FERIANTES</span>
            </a>
          </div>
        </section>

        {/* GALERÍA DE LOS 10 KITS DE PRODUCTOS (CARRUSEL DE 1 EN 1) */}
        <section className="space-y-6 bg-white/80 border border-[#E5E5EA] rounded-3xl p-6 md:p-12 shadow-sm relative max-w-xl mx-auto">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D93829] text-white font-extrabold text-xs uppercase tracking-widest border border-[#D4AF37] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Catálogo de Productos Alta Rentabilidad
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#1C1C1E]">
              Los 10 Productos Incluidos para tu Negocio
            </h3>
            <p className="text-xs md:text-sm text-[#6E6E73]">
              Ideales para ferias navideñas, centros turísticos y venta online.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Smaller Prev Button */}
            <button 
              onClick={() => setActiveGiftIndex(p => p === 0 ? giftIdeas.length - 1 : p - 1)}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-25 w-7 h-7 rounded-full bg-white border-2 border-[#D4AF37] text-[#996515] flex items-center justify-center font-bold shadow-md hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Smaller Next Button with Blinking Arrow Indicator */}
            <button 
              onClick={() => setActiveGiftIndex(p => p + 1 >= giftIdeas.length ? 0 : p + 1)}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-25 w-7 h-7 rounded-full bg-white border-2 border-[#D4AF37] text-[#996515] flex items-center justify-center font-bold shadow-md hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer animate-pulse"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Single Product Card Display */}
            {(() => {
              const gift = giftIdeas[activeGiftIndex];
              const idx = activeGiftIndex;
              return (
                <div 
                  className="bg-white border-2 border-[#D4AF37] rounded-2xl shadow-xl overflow-hidden flex flex-col p-6 space-y-4 transition-all duration-300"
                >
                  <div className="space-y-1">
                    <div className="text-[#B31942] font-black text-xs md:text-sm uppercase tracking-wider">
                      PRODUCTO {idx + 1} DE 10
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-[#1C1C1E] tracking-tight">
                      {gift.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#1C1C1E] font-medium leading-relaxed">
                      <strong className="text-[#1B4D3E] font-bold">Ideal para:</strong> {gift.para}
                    </p>
                  </div>

                  <div className="w-full bg-[#FAF9F5] rounded-xl overflow-hidden border border-[#E5E5EA]">
                    <img 
                      src={gift.img} 
                      alt={`Producto #${idx + 1} - ${gift.title}`} 
                      className="w-full h-auto object-contain block m-0 p-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="bg-[#FF0000] border-2 border-[#D4AF37] rounded-2xl p-5 shadow-xl space-y-2 text-white">
                    <div className="font-extrabold text-base md:text-lg tracking-tight text-white flex items-center justify-between">
                      <span>Detalle del Kit</span>
                      <span className="shrink-0 bg-white/30 text-white text-[11px] font-black px-3 py-1 rounded-xl border border-white uppercase tracking-wider">
                        {gift.tag}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white font-medium leading-relaxed">
                      {gift.detail}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="text-center text-xs font-bold text-[#996515] flex items-center justify-center gap-1.5 animate-pulse pt-1">
            <span>👉 Hacé clic en la flechita para ver todos los productos</span>
          </div>

          <div className="flex justify-center items-center gap-1.5 pt-1 flex-wrap">
            {giftIdeas.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveGiftIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${activeGiftIndex === i ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-gray-300'}`}
                aria-label={`Ir al producto ${i + 1}`}
              />
            ))}
          </div>

          {/* BOTÓN 3 */}
          <div className="pt-4 flex justify-center max-w-md mx-auto">
            <a 
              href={checkoutUrl} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckoutClick}
              className="w-full px-6 py-5 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-1 border-2 border-white text-center"
            >
              <div className="text-sm md:text-base font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO EL KIT EMPRENDEDORES!</div>
              <div className="text-[11px] font-bold text-amber-100 uppercase tracking-widest">OFERTA ESPECIAL TEMPORADA</div>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mt-1">ARS $15.000</div>
            </a>
          </div>
        </section>

        {/* SINGLE CONSOLIDATED VALUE STACK CARD */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl space-y-6">
            <div className="w-full m-0 p-0 bg-[#FAF9F5] relative">
              <img 
                src="https://i.imgur.com/0M1eeP4.png" 
                alt="Kit Emprendedores - Todo lo que recibís" 
                className="w-full h-auto object-cover m-0 p-0 rounded-none block"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 md:p-8 space-y-6">
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#996515] text-white font-extrabold text-xs uppercase tracking-widest shadow-sm">
                  <Package className="w-4 h-4 text-[#D4AF37]" /> Paquete Comercial Completo
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#1C1C1E]">
                  Todo lo que recibís hoy al adquirir tu kit
                </h3>
                <p className="text-xs md:text-sm text-[#6E6E73] max-w-lg mx-auto">
                  Acceso inmediato y vitalicio a todo el material gráfico profesional para tu negocio.
                </p>
              </div>

              <div className="space-y-3 bg-[#FAF9F5] border border-[#D4AF37] rounded-2xl p-4 md:p-6 shadow-inner text-left">
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Guía operativa para feriantes y emprendedores</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Paso a paso para optimizar metros de impresión, preparar stock masivo y rentabilizar cada fin de semana de feria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">10 kits profesionales por separado (+50 productos listos)</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Archivos PNG en alta resolución (300 DPI) estructurados para DTF Textil y DTF UV.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Videos cortos de producción y aplicación</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Técnicas exactas para estampar textiles con plancha casera y colocar stickers en rígidos sin mermas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Guía y plantillas de Canva</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Personalización rápida de nombres, frases y marcas propias para tus clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-0.5">
                  <div className="w-7 h-7 rounded-full bg-[#B31942] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    🎁
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Bono: 12 tags y etiquetas comerciales para imprimir</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Presentación profesional con etiquetas "Para / De" y marca para elevar el valor percibido de tus productos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bonus Image with Garland */}
              <div className="w-full bg-white border-y-4 border-[#D4AF37] shadow-lg overflow-hidden relative p-0 m-0">
                <div className="absolute top-0 inset-x-0 h-4 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-b border-[#D4AF37]">
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                </div>

                <img 
                  src="https://i.imgur.com/ECPthhX.png" 
                  alt="Bono Exclusivo" 
                  className="w-full h-auto object-cover m-0 p-0 block pt-4 pb-4"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-0 inset-x-0 h-4 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-t border-[#D4AF37]">
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                </div>
              </div>

              {/* Price Box inside the Single Card (BOTÓN 4) */}
              <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] rounded-3xl p-5 md:p-8 text-white shadow-xl text-center space-y-4 border-2 border-white relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-4 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-b border-[#D4AF37]">
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-widest bg-white/30 px-4 py-1.5 rounded-full inline-block shadow-sm">
                    🔥 OFERTA EMPRENDEDORES (50% OFF)
                  </span>
                  <p className="text-xs md:text-sm font-medium opacity-95 pt-1">Valor Total Real del Paquete: <span className="line-through font-black text-base text-white decoration-white">ARS $30.000</span></p>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border-2 border-white inline-block px-8 py-3 shadow-inner">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-black opacity-95 text-amber-100">SOLO HOY INVERTÍS</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">ARS $15.000</p>
                </div>

                <div className="pt-1 flex justify-center">
                  <a 
                    href={checkoutUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCheckoutClick}
                    className="w-full max-w-md px-5 py-4 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-0.5 border-2 border-white text-center"
                  >
                    <div className="text-xs md:text-sm font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO EL KIT PARA MI NEGOCIO!</div>
                    <div className="text-[10px] font-bold text-amber-100 uppercase tracking-widest">🇦🇷 Pagar con Mercado Pago</div>
                    <div className="text-2xl md:text-3xl font-black text-white drop-shadow-lg mt-0.5">ARS $15.000</div>
                  </a>
                </div>
                
                <div className="pt-2 border-t border-white/30 flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold text-amber-100">
                  <span>🔒 Pago 100% Seguro</span>
                  <span>•</span>
                  <span>⚡ Acceso Inmediato y Vitalicio</span>
                  <span>•</span>
                  <span>🛡️ Garantía Comercial</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-4 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-t border-[#D4AF37]">
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-3 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_6px_white]"></span>
                  <span className="w-2 h-2 rounded-full bg-white garland-light-2 shadow-[0_0_6px_white]"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO MP4 */}
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-[#D4AF37]">
          <video 
            src="https://i.imgur.com/mScaTdr.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto object-cover block m-0 p-0"
          ></video>
        </div>

        {/* URGENCIA TEMPORADA */}
        <section className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>¡Temporada Alta a la Vista!</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E]">
            Preparate con anticipación para las ferias navideñas y turísticas de verano.
          </h3>
          <p className="text-sm text-[#6E6E73] max-w-xl mx-auto">
            Los talleres gráficos colapsan en diciembre y enero. Descargá tus archivos hoy mismo, armá tu stock con tiempo y asegurá tus ventas.
          </p>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ) */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#996515] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              DUDAS FRECUENTES
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1C1C1E]">
              Preguntas Frecuentes de Feriantes y Emprendedores
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E5E5EA] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-sm md:text-base text-[#1C1C1E] flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#D4AF37] font-black transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-[#6E6E73] leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#1B4D3E] text-white py-12 px-6 border-t-4 border-[#D4AF37] mt-20 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 font-black text-lg tracking-wider text-[#D4AF37]">
          <span>🎁</span>
          <span>PATATAS STORE • EMPRENDEDORES & FERIANTES</span>
          <span>🎁</span>
        </div>
        <p className="text-xs text-white/80 max-w-md mx-auto">
          Kit digital profesional de alta rentabilidad para potenciar tus ventas en ferias navideñas y de temporada turística.
        </p>
        <div className="text-[11px] text-white/60 pt-4 border-t border-white/10">
          © {new Date().getFullYear()} Patatas Store. Todos los derechos reservados.
        </div>
      </footer>

      {/* FLOATING WHATSAPP SUPPORT BUTTON WITH HELPER TOOLTIP */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="bg-white text-[#1C1C1E] px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-[#25D366] text-xs font-bold animate-bounce hidden sm:flex items-center gap-2">
          <span>👋 ¿Tenés dudas sobre el kit para feriantes? ¡Escribinos!</span>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacto de Soporte WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer border-2 border-white"
        >
          <MessageCircle className="w-8 h-8 fill-current text-white" />
        </a>
      </div>
    </div>
  );
}
