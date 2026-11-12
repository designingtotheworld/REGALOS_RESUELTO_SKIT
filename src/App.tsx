/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Gift, Sparkles, Check, ChevronRight, ChevronLeft, ShieldCheck, 
  Clock, AlertCircle, HelpCircle, Package, Play, ShoppingCart, Star, Plus, Flame, Award, Video, FileText, MessageCircle
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

  // Dynamic today's date in Spanish for urgency banner
  const todayFormatted = new Date().toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long' 
  });

  const giftIdeas = [
    {
      title: "Totebag de playa",
      para: "tu amiga, tu hermana, la que ya está pensando en las vacaciones.",
      detail: "3 diseños para armar hasta 3 bolsas (34 x 37 cm).",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/PRUEBA_NUEVA_-80_0d595ff8.jpg"
    },
    {
      title: "Neceser de verano",
      para: "el amigo invisible, las chicas del grupo, un regalito para la valija de enero.",
      detail: "3 diseños para armar hasta 3 neceseres (20 x 15 cm).",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/NECESER-80_90e1ba93.jpg"
    },
    {
      title: "Vela \"Por un 2027 lleno de buenos momentos\"",
      para: "la seño, tu suegra, la vecina, un detalle para la mesa del 31.",
      detail: "3 diseños para armar hasta 6 velas (5 x 5 cm, frascos de 8 cm aprox.).",
      tag: "DTF UV",
      img: "/assets/aistudio/VELAS-80_6a96447e.jpg"
    },
    {
      title: "El delantal del asador",
      para: "tu viejo, tu suegro, el que siempre está en la parrilla.",
      detail: "3 diseños para armar hasta 5 delantales.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/DELANTALES-80_721e8d83.jpg"
    },
    {
      title: "Almohadón vintage",
      para: "el que se mudó, tu hermano, un regalo para la casa.",
      detail: "2 diseños para armar 2 almohadones de 40 x 40 cm.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/ALMOHADONES-80_da167cca.jpg"
    },
    {
      title: "Muñecos de animalitos",
      para: "los más chiquitos de la familia o un baby shower.",
      detail: "2 diseños para armar 2 almohadones de animalitos de 30 cm de alto.",
      tag: "DTF TEXTIL",
      img: "/assets/aistudio/BICHITOS-80_7423286e.jpg"
    },
    {
      title: "Vasos \"Save water, drink fernet\"",
      para: "el amigo fernetero, los de la previa, un regalo de a dos.",
      detail: "3 diseños para armar hasta 7 juegos de 2 vasos (sticker de 7 cm).",
      tag: "DTF UV",
      img: "/assets/aistudio/VASOS-80_f555d110.jpg"
    },
    {
      title: "Tazas con stickers laqueados",
      para: "el café de la oficina, el amigo invisible.",
      detail: "3 diseños para armar hasta 12 tazas.",
      tag: "DTF UV",
      img: "/assets/aistudio/TAZAS-80_4e860e58.jpg"
    },
    {
      title: "Anotador 2027",
      para: "la seño, las maestras, los compañeros, un regalo útil para arrancar el año.",
      detail: "4 diseños para armar hasta 6 anotadores (14 x 21 cm).",
      tag: "DTF UV",
      img: "/assets/aistudio/ANOTADOR-80_9770c65c.jpg"
    },
    {
      title: "Stickers para el termo",
      para: "el que no larga el mate ni en la pileta.",
      detail: "4 diseños listos para imprimir (14 unidades).",
      tag: "DTF UV",
      img: "/assets/aistudio/stickers_sueltos-80_90f2b873.jpg"
    },
  ];

  const faqs = [
    { q: "¿Necesito una máquina de estampado profesional?", a: "¡No! Una de las grandes ventajas de este kit es que la guía te enseña paso a paso cómo estampar perfectamente usando la plancha hogareña de tu casa y cómo aplicar DTF UV en superficies rígidas sin equipos costosos." },
    { q: "¿Cómo recibo los archivos después de comprar?", a: "El acceso es inmediato. Una vez procesado el pago, descargas todos los diseños en alta resolución y las guías en PDF y video." },
    { q: "¿Qué impresiones necesito encargar en la imprenta?", a: "Solo llevas nuestros archivos a cualquier imprenta gráfica que haga DTF Textil y DTF UV por metro o plancha. Te entregamos los archivos ya armados con la máxima optimización." },
    { q: "¿Sirve aunque nunca haya hecho manualidades antes?", a: "¡Totalmente! Está diseñado paso a paso para emprendedores y principiantes, con instrucciones visuales claras para que disfrutes el proceso." }
  ];

  const checkoutUrl = "https://patatas-store.impultienda.ar/checkout";
  const whatsappUrl = "https://wa.me/5491136089002?text=Hola%2C%20tengo%20una%20duda%20sobre%20el%20kit%20Regalos%20Resueltos";

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1C1E] font-sans antialiased selection:bg-[#E05A47]/20 selection:text-[#E05A47]">
      {/* CSS KEYFRAMES FOR BELL SWINGING & GARLAND BLINKING */}
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

      {/* TOP URGENCY BANNER WITH SWINGING BELLS */}
      <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] text-white py-3.5 px-4 text-center text-xs md:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg sticky top-0 z-50">
        <span className="bell-ring text-lg">🔔</span>
        <span>⚡ PRECIO ESPECIAL DE LANZAMIENTO ARS $12.900 (50% OFF) ⚡</span>
        <span className="bell-ring text-lg">🔔</span>
      </div>

      {/* WHITE AIR GAP */}
      <div className="h-6 w-full bg-[#FAF9F5]"></div>

      {/* TOP BRAND BANNER WITH GARLAND LIGHTS */}
      <header className="w-full bg-white border-y-4 border-[#D4AF37] relative overflow-hidden shadow-2xl">
        {/* Garland lights top bar */}
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

        <img 
          src="/assets/aistudio/esta_58d0175c.png" 
          alt="Regalos Resueltos - Promesa Principal" 
          className="w-full h-auto object-cover block m-0 p-0"
          referrerPolicy="no-referrer"
        />

        {/* Garland lights bottom bar */}
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

        {/* NUEVO TEXTO INTRODUCTORIO (COMPACTO) */}
        <section className="bg-white border-2 border-[#D4AF37] rounded-3xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto space-y-4 text-[#1C1C1E]">
          <h2 className="text-xl md:text-2xl font-black text-center text-[#996515]">
            Diciembre llega y la lista de regalos no para de crecer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-medium text-[#48484A] max-w-xl mx-auto bg-[#FAF9F5] p-4 rounded-2xl border border-[#D4AF37]/30">
            <div className="flex items-center gap-2"><span>🎁</span> <span>El amigo invisible del laburo</span></div>
            <div className="flex items-center gap-2"><span>🍎</span> <span>La seño de los chicos</span></div>
            <div className="flex items-center gap-2"><span>👧</span> <span>Los sobrinos</span></div>
            <div className="flex items-center gap-2"><span>🏡</span> <span>Tu suegra, tus viejos, tus hermanos</span></div>
          </div>
          <p className="text-xs md:text-sm text-[#6E6E73] italic text-center leading-relaxed">
            Hacé regalos únicos y personalizados por una fracción de su costo.
          </p>
        </section>

        {/* HERO CTA (BOTÓN 1) */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2">
          <div className="pt-2 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <a 
                href={checkoutUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto px-6 py-5 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-1 border-2 border-white/90 text-center"
              >
                <div className="text-sm md:text-base font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO MI KIT!</div>
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mt-1">ARS $12.900</div>
              </a>
            </div>
          </div>
        </section>

        {/* VIDEO DEMOSTRATIVO (YOUTUBE SHORTS EMBED) */}
        <section className="space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E] leading-snug">
              Mirá lo fácil que es armar tus<br />regalos <span className="text-[#D93829]">personalizados</span>
            </h3>
            <p className="text-xs text-[#6E6E73] uppercase tracking-wider font-semibold">
              Paso a paso: elegís diseño → mandás a imprimir → aplicás el DTF → resultado final.
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
                title="Kit Digital Regalos Resueltos" 
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
              SIN MÁQUINAS NI EXPERIENCIA
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight">
              No necesitás saber diseñar ni tener una máquina de estampar
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              El secreto se llama <strong className="text-[#D4AF37]">DTF</strong>: una lámina con tu diseño ya impreso que se aplica con plancha (cuando es para telas) o si es UV DTF (TIPO STICKER) se pega directo, sobre material rígido tipo taza, termo, vaso, etc.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Elegís tus diseños</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Descargás el kit del regalo que quieras hacer. Por ejemplo el KIT TOTE BAGS. Ese archivo viene armado con 3 impresiones para estampar 3 bolsas. (Si quisieras hacer más de 3, podés mandar a imprimir el archivo más de una vez).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Los mandás a imprimir</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Llevás o mandás los archivos a cualquier imprenta o taller que haga DTF textil o DTF UV. Ya vienen acomodados para aprovechar al máximo la lámina y que pagues lo menos posible.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#D93829] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Los aplicás en tu casa</h4>
                <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                  Bolsas, delantales y almohadones se estampan con la plancha de tu casa. Tazas, vasos, velas y anotadores llevan stickers que se pegan directo. Te mostramos cada paso en video.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout Box */}
          <div className="max-w-3xl mx-auto bg-[#0B2920] border-2 border-[#D4AF37]/40 rounded-2xl p-6 shadow-inner text-white text-xs md:text-sm leading-relaxed space-y-2">
            <p className="font-bold text-[#D4AF37]">
              ¿Cuánto más gastás?
            </p>
            <p className="text-white/90">
              Los objetos los podés encontrar a un precio super económico en MercadoLibre o en donde prefiras. Y la impresión, que ronda <span className="bg-[#D4AF37] text-[#1C1C1E] font-black px-2 py-0.5 rounded">entre ARS $11.000 y ARS $15.000 el metro</span>. En un solo metro podés mandar a imprimir varios kits de regalos. Por ejemplo, todos los de DTF TEXTIL.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a 
              href={checkoutUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C2A130] text-[#1C1C1E] border-2 border-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition-all inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 text-[#1C1C1E]" />
              <span>QUIERO MI KIT DIGITAL REGALOS RESUELTOS</span>
            </a>
          </div>
        </section>

        {/* GALERÍA DE LAS 10 IDEAS DE REGALO (CARRUSEL DE 1 EN 1) */}
        <section className="space-y-6 bg-white/80 border border-[#E5E5EA] rounded-3xl p-6 md:p-12 shadow-sm relative max-w-xl mx-auto">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D93829] text-white font-extrabold text-xs uppercase tracking-widest border border-[#D4AF37] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Catálogo Oficial Exclusivo
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#1C1C1E]">
              Las 10 Ideas de Regalo Incluidas en el Kit
            </h3>
            <p className="text-xs md:text-sm text-[#6E6E73]">
              Diseños profesionales listos para personalizar y deslumbrar en estas fiestas.
            </p>
          </div>

          {/* Carousel Container with Navigation Arrows */}
          <div className="relative">
            {/* Prev Button */}
            <button 
              onClick={() => setActiveGiftIndex(p => p === 0 ? giftIdeas.length - 1 : p - 1)}
              className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border-2 border-[#D4AF37] text-[#996515] flex items-center justify-center font-bold shadow-lg hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button with Blinking Arrow Indicator */}
            <button 
              onClick={() => setActiveGiftIndex(p => p + 1 >= giftIdeas.length ? 0 : p + 1)}
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border-2 border-[#D4AF37] text-[#996515] flex items-center justify-center font-bold shadow-lg hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer animate-pulse"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Single Gift Card Display */}
            {(() => {
              const gift = giftIdeas[activeGiftIndex];
              const idx = activeGiftIndex;
              return (
                <div 
                  className="bg-white border-2 border-[#D4AF37] rounded-2xl shadow-xl overflow-hidden flex flex-col p-6 space-y-4 transition-all duration-300"
                >
                  {/* Header text */}
                  <div className="space-y-1">
                    <div className="text-[#B31942] font-black text-xs md:text-sm uppercase tracking-wider">
                      REGALO {idx + 1} DE 10
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-[#1C1C1E] tracking-tight">
                      {gift.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#1C1C1E] font-medium leading-relaxed">
                      <strong className="text-[#1B4D3E] font-bold">Para:</strong> {gift.para}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full bg-[#FAF9F5] rounded-xl overflow-hidden border border-[#E5E5EA]">
                    <img 
                      src={gift.img} 
                      alt={`Regalo #${idx + 1} - ${gift.title}`} 
                      className="w-full h-auto object-contain block m-0 p-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bottom detail box (Brilliant Red Box Style) */}
                  <div className="bg-[#FF0000] border-2 border-[#D4AF37] rounded-2xl p-5 shadow-xl space-y-2 text-white">
                    <div className="font-extrabold text-base md:text-lg tracking-tight text-white flex items-center justify-between">
                      <span>¿Qué incluye el kit?</span>
                      <span className="shrink-0 bg-white/25 text-white text-[11px] font-black px-3 py-1 rounded-xl border border-white/40 uppercase tracking-wider">
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

          {/* Swipe / Slide Hint */}
          <div className="text-center text-xs font-bold text-[#996515] flex items-center justify-center gap-1.5 animate-pulse pt-1">
            <span>👉 Hacé clic en la flecha hacia la derecha (o desliza) para ver todos los regalos</span>
          </div>

          {/* Dots Indicator for all 10 */}
          <div className="flex justify-center items-center gap-1.5 pt-1 flex-wrap">
            {giftIdeas.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveGiftIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${activeGiftIndex === i ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-gray-300'}`}
                aria-label={`Ir al regalo ${i + 1}`}
              />
            ))}
          </div>

          {/* Botón de compra adicional abajo de las tarjetas (BOTÓN 3) */}
          <div className="pt-4 flex justify-center max-w-md mx-auto">
            <a 
              href={checkoutUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-5 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-1 border-2 border-white/90 text-center"
            >
              <div className="text-sm md:text-base font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO MI KIT!</div>
              <div className="text-[11px] font-bold text-amber-100 uppercase tracking-widest">A UN PRECIO INCREIBLE DE LANZAMIENTO</div>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mt-1">ARS $12.900</div>
            </a>
          </div>
        </section>

        {/* SINGLE CONSOLIDATED VALUE STACK CARD ("TODO LO QUE RECIBÍS HOY") */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl space-y-6">
            {/* Top Graphic Base Image (Edge-to-edge, no rounded corners) */}
            <div className="w-full m-0 p-0 bg-[#FAF9F5] relative">
              <img 
                src="https://i.imgur.com/0M1eeP4.png" 
                alt="Kit Regalos Resueltos - Todo lo que recibís" 
                className="w-full h-auto object-cover m-0 p-0 rounded-none block"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 md:p-8 space-y-6">
              {/* Top Badge & Title */}
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#996515] text-white font-extrabold text-xs uppercase tracking-widest shadow-sm">
                  <Package className="w-4 h-4 text-[#D4AF37]" /> Paquete Completo Todo Incluido
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#1C1C1E]">
                  Todo lo que recibís hoy al adquirir el Kit
                </h3>
                <p className="text-xs md:text-sm text-[#6E6E73] max-w-lg mx-auto">
                  Acceso inmediato y vitalicio a todo el material profesional para resolver tus regalos de fin de año.
                </p>
              </div>

              {/* Checklist of Deliverables in One Card */}
              <div className="space-y-3 bg-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl p-4 md:p-6 shadow-inner text-left">
                {/* Item 1: Guía de Bienvenida */}
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]/40">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Guía de bienvenida y cómo usar el kit</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Explicación paso a paso para acceder a tus archivos, entender cada material y empezar a armar tus regalos sin dudas desde el primer minuto.
                    </p>
                  </div>
                </div>

                {/* Item 2: Kits de diseños */}
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]/40">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">10 kits de regalo por separado para armar solo los que más te gusten</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      (Entre todos rinde + 50 regalos) Archivos PNG de alta resolución (300 DPI), preparados para DTF textil y DTF UV.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]/40">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Videos cortos paso a paso</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Cómo estampar con la plancha de tu casa y cómo aplicar los stickers en objetos rígidos.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#D4AF37]/40">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    ✓
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Guía de Canva</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      [qué permite hacer: agregar nombres, personalizar frases…].
                    </p>
                  </div>
                </div>

                {/* Item 5 (Bono) */}
                <div className="flex items-start gap-3 pt-0.5">
                  <div className="w-7 h-7 rounded-full bg-[#B31942] text-white flex items-center justify-center shrink-0 font-bold shadow text-xs">
                    🎁
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-extrabold text-xs md:text-sm text-[#1C1C1E]">Bono: 12 tags navideños para imprimir</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Etiquetas "Para / De" a juego, para imprimir en cartulina A4 y que cada regalo quede presentado como de tienda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bonus Image with Pinterest Warm White Fairy Lights Garland */}
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

              <div className="px-5 pt-1">
                <p className="text-xs text-[#6E6E73] text-center italic font-medium">
                  Kit de etiquetas y presentación incluido 100% gratis con tu compra hoy.
                </p>
              </div>

              {/* Price Box inside the Single Card (BOTÓN 4) */}
              <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] rounded-3xl p-5 md:p-8 text-white shadow-xl text-center space-y-4 border-2 border-white/60 relative overflow-hidden">
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
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-widest bg-white/25 px-4 py-1.5 rounded-full inline-block shadow-sm">
                    🔥 OFERTA DE LANZAMIENTO (50% OFF)
                  </span>
                  <p className="text-xs md:text-sm font-medium opacity-95 pt-1">Valor Total Real del Paquete: <span className="line-through font-black text-base text-white decoration-white">ARS $25.800</span></p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border-2 border-white/40 inline-block px-8 py-3 shadow-inner">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-black opacity-95 text-amber-100">SOLO HOY PAGÁS</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">ARS $12.900</p>
                </div>

                <div className="pt-1 flex justify-center">
                  <a 
                    href={checkoutUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md px-5 py-4 bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] hover:opacity-95 text-white rounded-2xl shadow-2xl transition-all flex flex-col items-center justify-center gap-0.5 border-2 border-white/90 text-center"
                  >
                    <div className="text-xs md:text-sm font-black text-white uppercase tracking-wider drop-shadow">¡QUIERO MI KIT!</div>
                    <div className="text-[10px] font-bold text-amber-100 uppercase tracking-widest">🇦🇷 Pagar con Mercado Pago</div>
                    <div className="text-2xl md:text-3xl font-black text-white drop-shadow-lg mt-0.5">ARS $12.900</div>
                  </a>
                </div>
                
                <div className="pt-2 border-t border-white/30 flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold text-amber-100">
                  <span>🔒 Pago 100% Seguro</span>
                  <span>•</span>
                  <span>⚡ Acceso Inmediato y Vitalicio</span>
                  <span>•</span>
                  <span>🛡️ Garantía de Satisfacción</span>
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

        {/* ESCASEZ / URGENCIA */}
        <section className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>¡Atención: Tiempo Límite!</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E]">
            Llegá a tiempo: descargá hoy y armá tus regalos de Navidad.
          </h3>
          <p className="text-sm text-[#6E6E73] max-w-xl mx-auto">
            Diciembre se acerca rápido y los talleres gráficos colapsan. Descargá hoy tus archivos y adelantá tus regalos con total tranquilidad.
          </p>
        </section>

        {/* SECCIÓN FERIANTE */}
        <section className="bg-gradient-to-r from-[#1B4D3E] to-[#143B30] text-white rounded-3xl p-8 pt-12 pb-12 shadow-xl max-w-3xl mx-auto text-center space-y-3 border-2 border-[#D4AF37] relative overflow-hidden">
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

          <h3 className="text-2xl font-black text-[#D4AF37]">¿Sos feriante?</h3>
          <p className="text-sm text-white/90">Armá regalos personalizados para vender en tu puesto y aprovechá la temporada de Navidad.</p>

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
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ) */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#996515] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              DUDAS FRECUENTES
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E]">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E5E5EA] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-sm md:text-base text-[#1C1C1E] flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition-transform text-[#996515] font-bold ${openFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs md:text-sm text-[#6E6E73] leading-relaxed border-t border-[#E5E5EA] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FLOATING WHATSAPP BUTTON WITH DOUBTS TOOLTIP */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="bg-white text-[#1C1C1E] text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-[#D4AF37] hidden sm:block animate-pulse max-w-[240px] text-right">
          ¿Tenés dudas? Leé bien todo y si te queda alguna, escribinos 💬
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 border-2 border-white animate-bounce shrink-0"
          aria-label="Consultar dudas por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1C1C1E] text-white/70 py-12 px-6 border-t border-white/10 mt-20 text-center space-y-4">
        <div className="space-y-1">
          <p className="font-bold text-white text-base">Regalos Resueltos — Kit Digital Navideño</p>
          <p className="text-xs">Todos los derechos reservados © {new Date().getFullYear()}</p>
        </div>
        <p className="text-[11px] text-white/40 max-w-md mx-auto">
          Este sitio no está afiliado a Meta ni a Facebook. Las marcas mencionadas pertenecen a sus respectivos dueños.
        </p>
      </footer>
    </div>
  );
}
