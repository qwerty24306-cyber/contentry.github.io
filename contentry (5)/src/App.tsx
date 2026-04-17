import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, Target, Sparkles, MessageSquare, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StatusBadge = ({ text, color = "emerald" }: { text: string; color?: "emerald" | "zinc" | "white" }) => {
  const dotColor = color === "emerald" ? "bg-emerald-500" : color === "zinc" ? "bg-zinc-400" : "bg-white";
  const pingColor = color === "emerald" ? "bg-emerald-400" : color === "zinc" ? "bg-zinc-300" : "bg-white/50";
  const textColor = color === "emerald" ? "text-emerald-500" : color === "zinc" ? "text-zinc-400" : "text-white";

  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColor} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${textColor}`}>{text}</span>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" className="font-bold text-2xl tracking-tighter uppercase italic hover:opacity-70 transition-opacity">contentry</a>
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
        <a href="#philosophy" className="hover:text-zinc-500 transition-colors">Philosophy</a>
        <a href="#trials" className="hover:text-zinc-500 transition-colors">Trials</a>
        <a href="#contact" className="hover:text-zinc-500 transition-colors">Contact</a>
      </div>
      <Button variant="outline" size="sm" className="rounded-none border-black px-6 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all">
        Start a Trial
      </Button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="pt-48 pb-32 px-6 bg-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000" 
        alt="Background" 
        className="w-full h-full object-cover opacity-[0.15] grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
    </div>
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <StatusBadge text="Lab System Online" />
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-black"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Cultural Content Lab</span>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-16 leading-[0.8] uppercase">
          Try <br />
          <span className="text-black">Everything</span>
        </h1>
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-zinc-900 mb-8">
              완벽한 기획은 없습니다. <br />
              <span className="text-black font-bold underline underline-offset-8 decoration-1">수많은 시도</span>만이 정답입니다. 
            </p>
            <p className="text-lg text-zinc-500 max-w-lg">
              문화콘텐츠의 본질을 탐구하며, 우리는 매 순간 새로운 가능성을 실험하고 브랜드의 고유한 서사를 구축합니다.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-end">
            <Button size="lg" className="rounded-none px-12 h-20 text-xs font-bold uppercase tracking-widest bg-black text-white hover:bg-zinc-800 transition-all group border border-black" asChild>
              <a href="#trials">
                Explore Trials <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Philosophy = () => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const overlays = {
    field: {
      title: "Field Logs",
      subtitle: "현장의 치열함이 만드는 결과물",
      content: [
        {
          title: "The Reality of Production",
          text: "제작 현장은 변수의 연속입니다.\n조명의 각도 하나, 현장의 공기 흐름 하나가 콘텐츠의 질을 결정합니다.\n우리는 그 모든 순간을 기록하고 최선의 답을 찾아냅니다.",
          img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200"
        },
        {
          title: "Real-time Problem Solving",
          text: "이론적인 기획안이 현장에서 무너질 때, 진짜 실력이 드러납니다.\n우리는 수많은 현장 경험을 통해 어떤 상황에서도 브랜드의 핵심 가치를 지켜내는 유연함을 익혀 왔습니다.",
          img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200"
        }
      ]
    },
    insight: {
      title: "Insight Archive",
      subtitle: "본질을 꿰뚫는 시선",
      content: [
        {
          title: "Cultural Archetype",
          text: "모든 트렌드 아래에는 변하지 않는 문화적 원형이 존재합니다.\n우리는 고전과 현대를 넘나드는 탐구를 통해 브랜드가 뿌리 내릴 수 있는 단단한 서사를 기획합니다.",
          img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
        },
        {
          title: "Visual Language",
          text: "말하지 않아도 느껴지는 감각, 그것이 우리가 추구하는 비주얼 언어입니다.\n텍스트 너머의 감정을 전달하기 위해 우리는 매일 새로운 시각적 자극을 아카이빙합니다.",
          img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200"
        }
      ]
    }
  };

  return (
    <section id="philosophy" className="py-40 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-24">
          <div className="md:col-span-8">
            <StatusBadge text="Researching Essence" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-16">Our Philosophy</h2>
            <div className="space-y-16">
              <h3 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight uppercase">
                <span className="text-zinc-400 text-[0.85em]">경험이 만든</span> <span className="text-white">식견</span>, <br />
                <span className="text-zinc-400 text-[0.85em]">과정이 증명하는</span> <span className="text-white">가치</span>.
              </h3>
              <div className="grid md:grid-cols-2 gap-16 text-zinc-400 leading-relaxed text-xl font-light">
                <p>
                  콘텐츠는 책상이 아닌 현장에서 완성됩니다. <br />
                  이론 너머의 감각을 직접 부딪히며 체득합니다.
                </p>
                <p>
                  수많은 시도와 깊은 식견. <br />
                  치열한 기록이 증명하는 contentry의 가치입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center gap-6">
            <button 
              onClick={() => setActiveOverlay('field')}
              className="text-left p-10 border-2 border-zinc-700 bg-zinc-900/50 backdrop-blur-sm group hover:border-white transition-all duration-500 outline-none"
            >
              <Plus className="h-8 w-8 mb-8 group-hover:rotate-180 transition-transform duration-700 text-zinc-400 group-hover:text-white" />
              <h4 className="font-bold uppercase text-sm tracking-widest mb-4">Field Experience</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">현장에서 직접 부딪히며 배운 실전 감각을 통해 브랜드의 실질적인 성장을 도모합니다.</p>
            </button>
            <button 
              onClick={() => setActiveOverlay('insight')}
              className="text-left p-10 border-2 border-zinc-700 bg-zinc-900/50 backdrop-blur-sm group hover:border-white transition-all duration-500 outline-none"
            >
              <Plus className="h-8 w-8 mb-8 group-hover:rotate-180 transition-transform duration-700 text-zinc-400 group-hover:text-white" />
              <h4 className="font-bold uppercase text-sm tracking-widest mb-4">Cultural Insight</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">콘텐츠의 본질을 꿰뚫는 깊은 식견으로 뻔하지 않은 솔루션을 제안합니다.</p>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeOverlay && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black overflow-y-auto"
          >
            <div className="min-h-screen p-6 md:p-24 relative">
              <button 
                onClick={() => setActiveOverlay(null)}
                className="fixed top-8 right-8 md:top-12 md:right-12 z-[10001] p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8">
                    {activeOverlay === 'field' ? 'Field Experience' : 'Cultural Insight'}
                  </h2>
                  <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-12">
                    {overlays[activeOverlay as keyof typeof overlays].title}
                  </h3>
                  <p className="text-2xl text-zinc-400 font-light mb-32 max-w-2xl">
                    {overlays[activeOverlay as keyof typeof overlays].subtitle}
                  </p>
                </motion.div>

                <div className="space-y-40 pb-40">
                  {overlays[activeOverlay as keyof typeof overlays].content.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="grid md:grid-cols-2 gap-20 items-center"
                    >
                      <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                        <h4 className="text-3xl font-bold uppercase mb-8">{item.title}</h4>
                        <p className="text-zinc-500 leading-relaxed text-lg font-light whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                      <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-1000"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Trials = () => {
  const [activeTrial, setActiveTrial] = useState<string | null>(null);

  const trialDetails = {
    "01": {
      title: "Field Insight & Flow",
      hypothesis: "현장의 무질서 속에서도 브랜드가 지향하는 고유의 리듬(Rhythm)은 반드시 존재한다.",
      process: [
        { step: "01. Observation", detail: "제작 현장의 모든 동선과 소음, 빛의 변화를 데이터화하여 기록" },
        { step: "02. Hypothesis", detail: "현장의 우연한 요소들이 콘텐츠의 진정성을 높이는 핵심 변수임을 가정" },
        { step: "03. Execution", detail: "계획된 연출과 현장의 우연성을 결합한 새로운 촬영 워크플로우 실험" }
      ],
      insight: "완벽하게 통제된 스튜디오보다,\n통제 불가능한 현장의 변수가 브랜드의 '살아 있는 이미지'를 만든다는 것을 확인했습니다.",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
    },
    "02": {
      title: "Visual & Textual Harmony",
      hypothesis: "텍스트는 정보를 전달하는 도구를 넘어, 그 자체로 시각적 무게감을 가진 디자인 요소로 기능한다.",
      process: [
        { step: "01. Analysis", detail: "다양한 매체에서의 텍스트 밀도와 이미지의 상관관계 분석" },
        { step: "02. Design", detail: "여백의 미와 타이포그래피의 배치를 통한 시각적 긴장감 조성 실험" },
        { step: "03. Feedback", detail: "사용자가 정보를 인지하는 속도와 감정적 반응의 변화 측정" }
      ],
      insight: "단순히 예쁜 디자인보다,\n텍스트와 이미지의 '무게 중심'이 맞을 때 메시지의 전달력이 극대화됨을 깨달았습니다.",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1200"
    },
    "03": {
      title: "Narrative Strategy",
      hypothesis: "모든 지속 가능한 콘텐츠는 고전적 서사 원형(Archetype)의 현대적 변주에서 시작된다.",
      process: [
        { step: "01. Research", detail: "신화와 고전 문학에서 발견되는 공통적인 서사 구조 추출" },
        { step: "02. Strategy", detail: "추출된 원형을 현대 브랜드의 문제 해결 과정에 대입" },
        { step: "03. Prototype", detail: "공감을 이끌어내는 3단계 서사 구조(결핍-여정-해소) 설계" }
      ],
      insight: "사람들은 새로운 기술보다 익숙한 이야기에 반응합니다.\n본질적인 서사 구조가 단단할 때 기술적 화려함도 빛을 발합니다.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
    }
  };

  const trials = [
    {
      id: "01",
      title: "Field Insight & Flow",
      context: "Production Experience",
      description: "현장의 수많은 변수에 대응하며 얻은 실전 감각을 통해 콘텐츠의 유기적인 서사를 설계합니다.",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "02",
      title: "Visual & Textual Harmony",
      context: "Creative Observation",
      description: "시각 요소와 텍스트의 결합을 통해\n브랜드 메시지의 밀도를 높이는 새로운 감각을 탐구합니다.",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "03",
      title: "Narrative Strategy",
      context: "Content Archetype",
      description: "문화콘텐츠학적 관점에서 서사의 원형을 탐구하고\n전략적인 스토리텔링 구조를 기획합니다.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="trials" className="py-40 px-6 bg-zinc-100">
      <div className="max-w-7xl mx-auto">
        <StatusBadge text="3 Active Experiments" />
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-8">Ongoing Trials</h2>
            <h3 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">Records of <br />Attempts</h3>
          </div>
          <div className="max-w-xs text-zinc-500 text-[13px] leading-relaxed border-l border-zinc-200 pl-6 break-keep">
            우리는 완성된 마침표보다 이어지는 시도를 믿습니다. 프로젝트마다 새로운 가설을 세우고 이를 증명해 나가는 과정의 기록입니다.
          </div>
        </div>
        
        <div className="space-y-48">
          {trials.map((trial, i) => (
            <motion.div 
              key={trial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-16 items-start group"
            >
              <div className="md:col-span-1 text-6xl font-black text-zinc-200 group-hover:text-black transition-colors duration-700 leading-none">
                {trial.id}
              </div>
              <div className="md:col-span-5 space-y-10 pt-2">
                <div className="space-y-4">
                  <Badge variant="outline" className="rounded-none border-zinc-400 text-zinc-500 text-[10px] uppercase tracking-[0.2em] px-4 py-1.5">
                    {trial.context}
                  </Badge>
                  <h4 className="text-5xl font-bold tracking-tighter uppercase leading-tight">{trial.title}</h4>
                </div>
                <p className="text-zinc-600 text-xl leading-relaxed font-light whitespace-pre-line">
                  {trial.description}
                </p>
                <Button 
                  onClick={() => setActiveTrial(trial.id)}
                  variant="link" 
                  className="p-0 h-auto text-black font-bold uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform"
                >
                  View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
              <div className="md:col-span-6 relative group-hover:-translate-y-4 transition-transform duration-700">
                <div className="absolute -inset-4 border border-zinc-300 -z-10 group-hover:inset-0 transition-all duration-700"></div>
                <div className="overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-zinc-100 shadow-2xl shadow-black/5">
                  <img 
                    src={trial.img} 
                    alt={trial.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeTrial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-100 overflow-y-auto"
          >
            <div className="min-h-screen p-6 md:p-24 relative">
              <button 
                onClick={() => setActiveTrial(null)}
                className="fixed top-12 right-12 z-[110] p-4 bg-black text-white rounded-full hover:scale-110 transition-transform"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="max-w-4xl mx-auto pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t-2 border-black pt-12"
                >
                  <div className="flex justify-between items-start mb-24">
                    <div>
                      <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4">Trial Report #{activeTrial}</h2>
                      <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                        {trialDetails[activeTrial as keyof typeof trialDetails].title}
                      </h3>
                    </div>
                    <div className="text-right hidden md:block">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-2">Status</div>
                      <div className="px-3 py-1 bg-black text-white text-[10px] uppercase font-bold">Completed</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-12 gap-20 mb-32">
                    <div className="md:col-span-5 flex flex-col">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">The Hypothesis</h4>
                      <div className="flex-1 flex items-center">
                        <p className="text-xl font-medium leading-tight whitespace-pre-line">
                          "{trialDetails[activeTrial as keyof typeof trialDetails].hypothesis}"
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <div className="aspect-video overflow-hidden bg-zinc-200">
                        <img 
                          src={trialDetails[activeTrial as keyof typeof trialDetails].img} 
                          alt="Trial"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-32 mb-32">
                    <div className="space-y-12">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">The Process</h4>
                      <div className="space-y-8">
                        {trialDetails[activeTrial as keyof typeof trialDetails].process.map((p, i) => (
                          <div key={i} className="flex gap-8">
                            <span className="text-[10px] font-bold text-zinc-300 pt-1 w-24 shrink-0">{p.step}</span>
                            <p className="text-sm text-zinc-600 leading-relaxed flex-1">{p.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-12">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Key Insight</h4>
                      <div className="p-10 bg-white border border-zinc-200 relative">
                        <Sparkles className="absolute -top-3 -right-3 h-6 w-6 text-zinc-300" />
                        <p className="text-lg leading-relaxed italic text-zinc-800 break-keep whitespace-pre-line">
                          {trialDetails[activeTrial as keyof typeof trialDetails].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 border-t border-zinc-200 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 pb-20">
                    <span>contentry lab archive</span>
                    <span>© 2024 records of attempts</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const seoulTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(seoulTime.toUpperCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="py-48 px-6 bg-black text-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[25vw] font-black text-zinc-900/30 select-none pointer-events-none tracking-tighter uppercase leading-none">
        Try
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 mb-48">
          <div className="lg:col-span-7">
            <StatusBadge text="Available for New Attempts" />
            
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-16">
              Let's <br />
              Try <br />
              Together!
            </h2>
            
            <p className="text-zinc-400 text-xl max-w-md leading-relaxed font-light break-keep">
              당신의 아이디어가 단순한 상상에 머물지 않도록, <br />
              식견과 시도를 더해 보세요.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end py-4">
            <div className="space-y-16">
              {/* Director Info */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block">DIRECTOR</span>
                <h3 className="text-3xl font-light tracking-tight">천서희 <span className="text-zinc-500 text-sm ml-2 uppercase tracking-widest">Seohui Cheon</span></h3>
              </div>

              {/* Email with Hover Effect */}
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block">DIRECT MAIL</span>
                <motion.a 
                  href="mailto:s411h@hansung.ac.kr" 
                  whileHover={{ x: 10 }}
                  className="block text-3xl md:text-4xl font-light hover:text-emerald-400 transition-colors tracking-tight border-b border-zinc-800 pb-6"
                >
                  s411h@hansung.ac.kr
                </motion.a>
              </div>

              {/* Index Style Links */}
              <div className="space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block">INDEX / ARCHIVE</span>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/_s411h", id: "01" }
                  ].map((link) => (
                    <a 
                      key={link.label} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-zinc-800 pb-2 hover:border-zinc-700 transition-colors"
                    >
                      <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.label}</span>
                      <span className="text-[10px] font-mono text-zinc-500 group-hover:text-emerald-500 transition-colors">[{link.id}]</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
          <div className="font-bold text-2xl tracking-tighter uppercase italic order-2 md:order-1">contentry</div>
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] text-center order-3 md:order-2 whitespace-nowrap">
            © 2024 contentry by seohui cheon. all rights reserved.
          </div>
          <div className="flex justify-end order-1 md:order-3 w-full md:w-auto">
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-4">
               <span>Local Time</span>
               <span className="text-white font-mono">SEOUL {time}</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white overflow-x-hidden relative">
      <div className="grain-overlay" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Philosophy />
        <Trials />
        <Contact />
      </main>
    </div>
  );
}
