import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowDown, 
  Check, 
  Mail, 
  Printer, 
  Heart, 
  Star, 
  Puzzle, 
  MessageCircle, 
  BookOpen,
  MousePointer2,
  Lock,
  Award,
  VolumeX
} from 'lucide-react';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const initPlayer = () => {
      // @ts-ignore - Vimeo is loaded via script tag in index.html
      if (typeof window !== 'undefined' && videoRef.current && (window as any).Vimeo) {
        try {
          // @ts-ignore
          playerRef.current = new (window as any).Vimeo.Player(videoRef.current);
          playerRef.current.setMuted(true);
          playerRef.current.play().catch((error: any) => {
            console.log("Autoplay blocked or video error:", error);
          });
        } catch (e) {
          console.error("Failed to initialize Vimeo player", e);
        }
      }
    };

    const timer = setTimeout(initPlayer, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.setMuted(false);
      playerRef.current.setVolume(1);
      setIsMuted(false);
    }
  };

  const FAQ_DATA = [
    {
      question: "Para qual faixa etária é indicado?",
      answer: "O Kit de Grafismo Fonético é ideal para crianças de 2 a 12 anos, respeitando o ritmo natural de cada uma, desde o primeiro contato com as letras até o reforço na fluência."
    },
    {
      question: "Funciona para crianças com TDAH ou Autismo?",
      answer: "Sim! O método utiliza estímulos visuais e motores que facilitam o foco e a compreensão, sendo extremamente eficaz para crianças com TDAH, Autismo ou outras dificuldades de aprendizado."
    },
    {
      question: "Como recebo o material?",
      answer: "O acesso é imediato e 100% digital. Após a confirmação do pagamento, você receberá em seu e-mail o link para baixar todos os arquivos em formato PDF."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Com certeza! O seu acesso ao material é vitalício. Você pode baixar e imprimir as atividades sempre que precisar, para um ou mais filhos/alunos."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Praticando apenas 10 minutos por dia, muitas famílias relatam notar uma diferença na confiança e no reconhecimento de sons e sílabas já nos primeiros dias de uso."
    },
    {
      question: "E se eu não gostar do material?",
      answer: "Nós oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o kit não é para você, devolvemos 100% do seu valor investido."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 selection:bg-blue-100 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <header className="bg-pastel-blue pt-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://i.imgur.com/f1Nmr0Y.png" 
              alt="Kit Grafismo Fonético Logo" 
              className="max-w-full h-auto drop-shadow-xl rounded-2xl"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-blue-900 mb-6 leading-tight max-w-5xl mx-auto">
            Descubra a técnica americana que ensina as crianças a ler até 5 vezes mais rápido, sem pressão!
          </h1>
          
          <h2 className="text-xl md:text-3xl font-heading text-green-600 font-bold mb-10">
            Com apenas 10 minutos por dia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/60 rounded-2xl md:text-left border border-blue-100 font-medium text-blue-900 flex items-center justify-center md:justify-start text-base">
              (Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma)
            </div>
            <div className="p-6 bg-white/60 rounded-2xl text-center border border-blue-100 font-medium text-blue-900 flex items-center justify-center text-base">
              (Mesmo que ainda não reconheça letras ou sons)
            </div>
            <div className="p-6 bg-white/60 rounded-2xl md:text-right border border-blue-100 font-medium text-blue-900 flex items-center justify-center md:justify-end text-base">
              Funciona também com crianças com TDAH, Autismo ou dificuldades de foco
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-xl md:text-2xl px-10 py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <MousePointer2 className="w-6 h-6" /> BAIXAR ATIVIDADES AGORA
            </button>
            <p className="text-lg md:text-xl text-blue-900 font-medium max-w-2xl mx-auto px-2">
              Seu filho ou aluno vai aprender a ler até 5x mais rápido de forma divertida, simples e eficaz.
            </p>
          </div>
        </div>
      </header>

      {/* PROBLEM & IDENTIFICATION */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <ArrowDown className="w-10 h-10 text-blue-300 animate-bounce" />
            <ArrowDown className="w-10 h-10 text-blue-300 animate-bounce delay-100" />
            <ArrowDown className="w-10 h-10 text-blue-300 animate-bounce delay-200" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-blue-900 mb-10 px-2">
            Muitos pais acham que cada criança tem seu tempo pra ler. Até que…
          </h3>
          
          <div className="mb-10 flex justify-center">
            <img 
              src="https://i.imgur.com/ktuEAGK.png" 
              alt="Criança frustrada estudando" 
              className="rounded-3xl shadow-2xl max-w-full md:max-w-2xl"
            />
          </div>
          
          <p className="text-2xl md:text-3xl font-heading text-red-600 font-bold mb-12 px-2">
            E o pior: Começa a achar que não é capaz, sem entender o porquê..
          </p>

          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-amber-500" />
            </div>
            
            <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 shadow-sm max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-amber-800 mb-4">Entenda o que realmente atrasa a leitura do seu filho...</h4>
              <p className="text-lg md:text-xl text-amber-900 leading-relaxed">
                Falta de estímulo fonético na fase certa, o que pode tornar o processo de alfabetização mais lento, frustrante e confuso, tanto para a criança quanto para você.
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-blue-900 mt-10 max-w-3xl mx-auto leading-relaxed px-2">
            Mas calma, você não tem culpa disso... É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma leve, divertida e no tempo certo.
          </p>
        </div>
      </section>

      {/* PRODUCT PRESENTATION */}
      <section className="bg-pastel-blue py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blue-900 mb-10">
            Por isso você precisa do Kit Grafismo Fonético...
          </h2>
          
          <div className="space-y-12">
            <img src="https://i.imgur.com/h7j0KIh.png" alt="Exemplo Atividades 1" className="mx-auto rounded-3xl shadow-xl max-w-full" />
            <img src="https://i.imgur.com/YywQAQu.png" alt="Exemplo Atividades 2" className="mx-auto rounded-3xl shadow-xl max-w-full" />
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-blue-900 mb-12 px-2">
              Cada atividade do Kit de Grafismo Fonético foi cuidadosamente criada para:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
              {[
                "Desenvolver a coordenação motora fina",
                "Estimular a criatividade e a atenção da criança",
                "Fortalecer as conexões cerebrais que facilitam a leitura",
                "Despertar o interesse pelas palavras e pelos sons",
                "Tornar o processo de alfabetização leve, divertido e eficaz!"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-blue-900 text-lg leading-snug">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-blue-800 font-medium px-2">
              Tudo isso com apenas alguns minutos por dia, direto de casa, no ritmo natural da criança.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#EBF8FF] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-12 px-2">
            Por que as atividades de Grafismo Fonético funcionam?
          </h2>
          
          <div className="mb-12">
            <img src="https://i.imgur.com/c17m9tt.png" alt="Esquema aprendizado cérebro" className="mx-auto rounded-3xl shadow-lg max-w-full" />
          </div>
          
          <div className="text-lg md:text-xl text-blue-900 space-y-6 text-left md:text-center leading-relaxed px-2">
            <p className="font-bold text-2xl">
              Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões, sons e movimentos.
            </p>
            <p>
              As atividades de grafismo fonético desenvolvem a consciência fonológica e visual, habilidades essenciais para que a criança reconheça sílabas, sons e estruturas das palavras de forma natural.
            </p>
            <p>
              Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as conexões cerebrais responsáveis pela leitura, acelerando o processo de alfabetização de forma divertida e sem pressão.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS / EVOLUTION */}
      <section className="bg-[#F0FFF4] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <img src="https://i.imgur.com/kPw6VBd.png" alt="Criança evoluindo na leitura" className="mx-auto rounded-3xl shadow-lg mb-12 max-w-full" />
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-green-800 text-center mb-10 px-2">
            E em poucos dias você vai notar a diferença na leitura do seu filho:
          </h3>
          
          <div className="space-y-5 mb-16">
            {[
              "Vai reconhecer sílabas e sons com mais facilidade",
              "Vai se sentir mais confiante ao tentar ler palavras novas",
              "Vai mostrar mais interesse por livros e história",
              "Vai aprender no ritmo dele, sem frustração ou comparação",
              "E o melhor: vai começar a gostar do momento de leitura em casa"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-md border border-green-200 group">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                  <Check className="w-7 h-7 text-green-500 font-black group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-green-900 text-lg md:text-xl">{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl text-center border-4 border-green-100">
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-blue-900 mb-8">
              Comece a jornada de aprendizado do seu filho hoje.
            </h4>
            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-xl md:text-2xl px-12 py-6 rounded-3xl shadow-lg transition-transform hover:scale-105 active:scale-95">
              BAIXAR ATIVIDADES AGORA
            </button>
          </div>
        </div>
      </section>

      {/* WHAT THEY LEARN CARDS */}
      <section className="bg-[#F7FAFC] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-blue-900 mb-16">
            O Que Seu Filho Vai Aprender
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 relative overflow-hidden group">
              <Star className="absolute top-4 right-4 text-yellow-300 w-16 h-16 opacity-20" />
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Reconhecimento de Sons e Letras</h4>
              <p className="text-lg text-gray-600">Cada som é associado a letras, fortalecendo as conexões cerebrais de forma sólida e duradoura.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 relative overflow-hidden group">
              <Puzzle className="absolute top-4 right-4 text-blue-300 w-16 h-16 opacity-20" />
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Formação de Palavras</h4>
              <p className="text-lg text-gray-600">Atividades dinâmicas que transformam a construção de palavras em uma experiência divertida e intuitiva.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 relative overflow-hidden group">
              <MessageCircle className="absolute top-4 right-4 text-green-300 w-16 h-16 opacity-20" />
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Compreensão e Leitura Fluente</h4>
              <p className="text-lg text-gray-600">Exercícios práticos que aprimoram a compreensão do que está sendo lido, ajudando seu filho a ganhar fluência e confiança.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 relative overflow-hidden group">
              <BookOpen className="absolute top-4 right-4 text-pink-300 w-16 h-16 opacity-20" />
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Guia Passo a Passo com Ilustrações</h4>
              <p className="text-lg text-gray-600">Instruções visuais e detalhadas para que cada fase do aprendizado seja clara e tranquila, sem complicações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl font-bold text-blue-500 mb-2 uppercase tracking-widest">Aperte o play👇</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-10 leading-tight px-2">
            Veja como é fácil ensinar seu filho a ler com o Grafismo Fonético...
          </h2>
          
          <div className="relative group max-w-[320px] mx-auto mb-12">
            <div className="aspect-[9/16] w-full rounded-[2.5rem] shadow-2xl overflow-hidden border-[10px] border-pastel-blue bg-black relative">
              <iframe 
                ref={videoRef}
                src="https://player.vimeo.com/video/1151447089?autoplay=1&muted=1&loop=1&background=1&transparent=0" 
                className="absolute top-0 left-0 w-full h-full scale-[1.01]"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Vídeo Kit Grafismo Fonético"
              ></iframe>

              {/* Unmute Overlay */}
              {isMuted && (
                <div 
                  onClick={handleUnmute}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer z-10 transition-all hover:bg-black/20"
                >
                  <div className="bg-white/90 p-5 rounded-full shadow-2xl animate-pulse mb-4">
                    <VolumeX className="w-12 h-12 text-blue-600" />
                  </div>
                  <span className="text-white font-bold text-xl uppercase tracking-tighter drop-shadow-lg px-6 text-center leading-tight">
                    CLIQUE PARA ATIVAR O SOM
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-2xl px-12 py-6 rounded-3xl shadow-xl transition-all transform hover:scale-105">
            BAIXAR ATIVIDADES AGORA
          </button>
        </div>
      </section>

      {/* PARA QUEM É (WHO IS IT FOR) */}
      <section className="bg-gray-100 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-16 max-w-4xl mx-auto leading-tight px-2">
            Praticando apenas 10 minutos por dia, seu filho colherá estes benefícios para o resto da vida:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { id: 1, text: "Crianças em fase de alfabetização: Ideal para crianças que estão dando os primeiros passos na leitura, o método oferece uma abordagem estruturada e intuitiva, ajudando a desenvolver uma base sólida e segura." },
              { id: 2, text: "Pais e educadores que buscam alternativas aos métodos tradicionais: Se você procura uma forma de ensino mais personalizada, que respeita o ritmo individual de cada criança, esse método é uma excelente escolha." },
              { id: 3, text: "Crianças com dificuldade de leitura: Para crianças que enfrentam desafios na leitura e compreensão, o Método de Grafismo Fonético oferece um suporte extra com atividades lúdicas que facilitam o entendimento." },
              { id: 4, text: "Escolas e instituições que valorizam inovação no ensino: Perfeito para escolas que buscam métodos comprovados, o grafismo fonético traz uma abordagem moderna que gera resultados reais e duraduros." }
            ].map((item) => (
              <div key={item.id} className="bg-white p-10 rounded-3xl text-left shadow-sm border border-gray-200 relative pt-14">
                <span className="absolute -top-6 -left-4 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-black shadow-lg">{item.id}</span>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS (SOCIAL PROOF) */}
      <section className="bg-[#FFF5F2] py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-16 px-2">
            Veja o que pais e educadores dizem sobre o Kit de Grafismo Fonético
          </h2>
          
          <div className="mb-12 flex justify-center">
            <img 
              src="https://i.imgur.com/fKK43ZL.png" 
              alt="Depoimentos reais de clientes" 
              className="rounded-3xl shadow-xl border-8 border-white max-w-full" 
            />
          </div>
          
          <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-2xl px-12 py-6 rounded-3xl shadow-xl transition-all transform hover:scale-105">
            BAIXAR ATIVIDADES AGORA
          </button>
        </div>
      </section>

      {/* CONTENT OF THE KIT */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-16 px-2">
            Veja tudo que você vai receber no kit de atividades
          </h2>
          
          <div className="max-w-4xl mx-auto bg-pastel-blue p-8 md:p-16 rounded-[3rem] shadow-xl border border-blue-100">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-10">
              + de 100 Atividades de Grafismo Fonético
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Atividades Nível 01: Palavras com 02 Sílabas",
                "Atividades Nível 03: Palavras com 04 Sílabas",
                "Atividades Nível 02: Palavras com 03 Sílabas",
                "Atividades Grafismo na letra Cursiva e Bastão"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/60 p-5 rounded-xl border border-blue-50">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-blue-900 text-base md:text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="w-full md:w-auto mt-16 bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-2xl px-12 py-6 rounded-3xl shadow-xl transition-all transform hover:scale-105">
            BAIXAR ATIVIDADES AGORA
          </button>
        </div>
      </section>

      {/* HOW ACCESS WORKS */}
      <section className="bg-blue-50 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-20 px-2 leading-tight">Muito simples de começar a utilizar!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 uppercase">CHEGA NO E-MAIL</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Após a compra você recebe no e-mail o acesso a plataforma com arquivos em formato PDF.</p>
            </div>
            
            <div className="space-y-6">
              <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl">
                <Printer className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 uppercase">VOCÊ IMPRIME</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Você pode imprimir quando quiser, pois o acesso é VITALÍCIO e quantas vezes desejar.</p>
            </div>
            
            <div className="space-y-6">
              <div className="w-24 h-24 bg-pink-500 rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 uppercase">OS PEQUENOS AMAM</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Temos uma ótima notícia pra você, MÃOS À OBRA! Importante que sempre auxilie seu pequeno nas atividades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="bg-[#FFD700] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-blue-900 mb-4 italic">e ainda não acabou...</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-20 px-2 leading-tight">Garantindo seu acesso hoje você leva 6 SUPER BÔNUS 🎁</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Caderno Alfabeto com Imagem", desc: "Apresenta cada letra do alfabeto com imagens associadas.", oldPrice: 37 },
              { title: "Caderno Quebra Cabeça Alfabeto", desc: "Atividades de quebra-cabeça com letras do alfabeto.", oldPrice: 47 },
              { title: "Caderno Formando Palavras", desc: "Exercícios de formation de palavras que incentivam leitura.", oldPrice: 57 },
              { title: "Caderno Alfabeto com Relógio", desc: "Caderno interativo que ensina as letras junto ao relógio.", oldPrice: 39 },
              { title: "Caderno Alfabeto Traçado", desc: "Caderno perfeito para que as crianças pratiquem a escrita.", oldPrice: 37 },
              { title: "Caderno Alfabeto com Carinhas", desc: "Caderno com expressões divertidas para um alegre aprendizado.", oldPrice: 37 }
            ].map((bonus, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-xl border-4 border-white text-left flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">{bonus.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">{bonus.desc}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-gray-400 line-through">De R$ {bonus.oldPrice}</p>
                  <p className="text-3xl font-black text-green-500">HOJE: GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE SECTION */}
      <section className="bg-[#FFE4B5] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-16 px-2">
            Acesso completo ao Kit Atividades Grafismo Fonético
          </h2>
          
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden mb-12 text-left">
            <div className="bg-blue-50 p-12 md:p-20 text-center">
              <p className="text-xl text-blue-900 mb-4 font-bold uppercase tracking-widest">Aproveite a promoção por apenas</p>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-900">R$</span>
                <span className="text-8xl md:text-9xl font-heading font-bold text-blue-900 tracking-tighter">37</span>
              </div>
              <p className="text-3xl font-black text-green-600 mb-12">5 x de R$ 8,19 *</p>
              
              <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-2xl md:text-4xl py-8 px-16 rounded-3xl shadow-2xl transition-all transform hover:scale-105 mb-12 uppercase">
                BAIXAR ATIVIDADES AGORA
              </button>
              
              <div className="grid grid-cols-3 gap-4 opacity-50 text-[10px] md:text-xs font-bold text-blue-900 uppercase">
                <div className="flex flex-col items-center"><ShieldCheck className="w-6 h-6 mb-2" /> Compra SEGURA</div>
                <div className="flex flex-col items-center"><Award className="w-6 h-6 mb-2" /> Satisfação GARANTIDA</div>
                <div className="flex flex-col items-center"><Lock className="w-6 h-6 mb-2" /> Privacidade PROTEGIDA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & GUARANTEE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-pastel-green p-10 md:p-14 rounded-[3rem] border border-green-100 mb-20 shadow-sm">
            <img src="https://images.tcdn.com.br/img/editor/up/650005/7-dias.png" alt="Selo 7 dias de garantia" className="w-40 h-40 md:w-56 md:h-56 animate-float" />
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-heading font-bold text-green-900 mb-6">Garantia incondicional de 7 dias</h3>
              <p className="text-xl text-gray-700 leading-relaxed">Se por qualquer motivo você não ficar satisfeito(a), devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia.</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-blue-900 mb-12">Perguntas Frequentes</h2>
          <div className="space-y-5 mb-24">
            {FAQ_DATA.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg md:text-2xl font-bold text-blue-900">{item.question}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform text-blue-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-8 pt-0 text-lg md:text-xl text-gray-600 border-t border-gray-50 bg-blue-50/10">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-2xl md:text-3xl px-12 py-8 rounded-3xl shadow-2xl transition-all transform hover:scale-105 uppercase">
              QUERO MEU FILHO(A) LENDO!
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-blue-900 text-white px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-heading font-bold mb-8">Educação Kids</h3>
          <p className="text-blue-200 mb-12 text-base md:text-lg">© 2026 Todos os direitos reservados.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60 grayscale invert">
            <img src="https://hotmart.com/static/images/logo-hotmart.svg" className="h-8 md:h-12" alt="Hotmart" />
            <div className="text-xs font-bold uppercase tracking-widest border border-white/20 p-2">Site Blindado</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;