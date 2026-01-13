"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Cloud, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Car, 
  Zap,
  Lock,
  ChevronRight,
  Monitor,
  Smartphone,
  Server,
  Activity,
  ArrowUpRight,
  MousePointer2,
  Users,
  Globe,
  Sparkles,
  Lightbulb,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";



const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GritLogo = ({ className = "h-12 w-12", iconOnly = false }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative h-full aspect-square flex items-center justify-center">
      {/* Outer Red Arc */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-45">
        <path 
          d="M 50,10 A 40,40 0 1,1 10,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="12" 
          strokeLinecap="round"
          className="text-red-600"
        />
      </svg>
      {/* Inner Black Arc */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-135 p-3">
        <path 
          d="M 50,10 A 40,40 0 1,1 10,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="12" 
          strokeLinecap="round"
          className="text-slate-900"
        />
      </svg>
      {/* Center Red Dot */}
      <div className="h-[25%] w-[25%] rounded-full bg-red-600 z-10" />
    </div>
    {!iconOnly && (
      <div className="flex items-baseline">
        <span className="text-2xl font-black tracking-tighter text-slate-900">Gr</span>
        <span className="relative text-2xl font-black tracking-tighter text-slate-900">
          i
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-red-600" />
        </span>
        <span className="text-2xl font-black tracking-tighter text-slate-900">t</span>
      </div>
    )}
  </div>
);

const services = [
  {
    title: "Péage & Parking Intelligent",
    description: "Systèmes de flux automatisés pour une gestion moderne des infrastructures urbaines.",
    icon: Car,
    features: ["Systèmes de péage automatisés", "Gestion intelligente de parkings", "Reconnaissance de plaques (LPR)", "Paiement sans contact"],
    color: "from-red-600 to-slate-900",
    bg: "bg-red-50",
    accent: "text-red-600"
  },
  {
    title: "Sécurité & Contrôle d’Accès",
    description: "Protection biométrique et IA pour une maîtrise totale de vos environnements critiques.",
    icon: ShieldCheck,
    features: ["Contrôle biométrique", "Badges RFID & QR Code", "Vidéos surveillance IA", "Alertes temps réel"],
    color: "from-slate-900 to-red-600",
    bg: "bg-slate-50",
    accent: "text-slate-900"
  },
  {
    title: "Automation & Régulation",
    description: "Optimisation de la performance industrielle via SCADA et maintenance prédictive.",
    icon: Cpu,
    features: ["Automatisation industrielle", "Systèmes SCADA", "Maintenance prédictive", "Optimisation énergétique"],
    color: "from-red-500 to-slate-800",
    bg: "bg-red-50",
    accent: "text-red-500"
  },
  {
    title: "Développement d’Applications",
    description: "Logiciels métiers sur mesure (Web, Mobile, Desktop) pour digitaliser vos processus.",
    icon: Monitor,
    features: ["Applications Web SaaS", "Mobile iOS & Android", "Logiciels Desktop", "Dashboards ERP/CRM"],
    color: "from-slate-800 to-red-500",
    bg: "bg-slate-50",
    accent: "text-slate-800"
  },
  {
    title: "Cloud & Données",
    description: "Hébergement haute disponibilité et sécurisation de vos données critiques.",
    icon: Cloud,
    features: ["Hébergement sécurisé", "Sauvegarde & Disaster recovery", "Scalabilité cloud", "Protection sensible"],
    color: "from-red-600 to-black",
    bg: "bg-red-50",
    accent: "text-red-600"
  },
  {
    title: "Data & Intelligence Artificielle",
    description: "Transformation de vos flux en indicateurs décisionnels stratégiques.",
    icon: Database,
    features: ["Analyse de flux IA", "Prévisions statistiques", "Tableaux décisionnels", "IA générative"],
    color: "from-slate-900 to-red-700",
    bg: "bg-slate-50",
    accent: "text-slate-900"
  }
];

const stats = [
  { label: "Fiabilité Système", value: "99.9%", icon: Activity, color: "text-slate-900" },
  { label: "Experts Tech", value: "25+", icon: Users, color: "text-slate-900" },
  { label: "Solutions Sur Mesure", value: "100%", icon: CheckCircle2, color: "text-red-600" }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-red-100 selection:text-red-900" ref={containerRef}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-400/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute top-[30%] right-[5%] w-[40%] h-[40%] bg-red-400/5 blur-[100px] rounded-full animate-pulse [animation-delay:4s]" />
        <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/50 bg-white/70 px-8 py-4 backdrop-blur-2xl flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative">
          <GritLogo />

            {/* Desktop Nav */}
          <div className="hidden space-x-10 md:flex">
            {["Solutions", "Mission", "Pourquoi nous ?"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(" ?", "").replace(" ", "")}`} 
                className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="rounded-2xl px-8 h-12 font-black text-sm shadow-xl shadow-red-500/20 bg-red-600 hover:bg-red-700 hover:scale-105 transition-all text-white border-none">
              Démarrer un projet
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-red-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 mt-4 w-full rounded-[32px] border border-white bg-white/95 p-8 backdrop-blur-3xl shadow-2xl md:hidden flex flex-col gap-6"
            >
              {["Solutions", "Mission", "Pourquoi nous ?"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(" ?", "").replace(" ", "")}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-xl font-black text-slate-900 hover:text-red-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              <hr className="border-slate-100" />
              <Button className="rounded-2xl h-14 w-full font-black text-lg bg-red-600 text-white">Démarrer un projet</Button>
            </motion.div>
          )}
        </div>
      </nav>


      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center pt-40 pb-20 overflow-hidden">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-100 bg-red-50 text-red-600 shadow-sm"
              >
                <Sparkles size={16} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">L'excellence technologique</span>
              </motion.div>
              
              <div className="relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] text-slate-900"
                >
                  L'avenir est <br/> 
                  <span className="relative inline-block mt-2">
                    <span className="bg-gradient-to-r from-red-600 via-slate-800 to-black bg-clip-text text-transparent">automatisé.</span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-3 w-full bg-red-600/10 rounded-full origin-left"
                    />
                  </span>
                </motion.h1>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative max-w-5xl mx-auto w-full"
              >
                <div className="mt-12 relative rounded-[48px] overflow-hidden border-8 border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] group">
                  <img 
                    src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2000" 
                    alt="Bright Robotic Automation" 
                    className="w-full aspect-[21/9] object-cover transition-transform duration-[3s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent z-10" />
                  
                  {/* Floating Elements for "Jovial" feel */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 z-20 hidden md:flex items-center gap-4 p-5 rounded-[24px] bg-white/90 backdrop-blur-md shadow-xl border border-red-50"
                  >
                    <div className="h-12 w-12 rounded-xl bg-red-600 text-white flex items-center justify-center">
                      <Zap size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-black text-slate-900">Rapidité</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Optimisé IA</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl text-xl font-medium text-slate-600 leading-relaxed"
              >
                Grit Technology est une startup innovante qui transforme la complexité en simplicité. 
                Des infrastructures intelligentes pensées pour l'humain et la performance.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full max-w-lg"
              >
                <Button size="xl" className="group h-16 rounded-[20px] px-10 text-lg font-black shadow-xl shadow-red-500/20 bg-red-600 hover:bg-red-700 text-white flex-1">
                  Notre expertise
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
                <Button size="xl" variant="outline" className="h-16 rounded-[20px] px-10 text-lg font-black border-slate-200 hover:bg-white bg-white shadow-sm flex-1 text-slate-900">
                  Nous contacter
                </Button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 relative bg-white border-y border-slate-100 shadow-sm">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`mb-6 rounded-[24px] bg-slate-50 p-6 ${stat.color} group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                    <stat.icon size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-slate-900">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-32 md:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <motion.div 
                {...fadeIn}
                className="space-y-10"
              >
                  <div className="space-y-6">
                    <Badge className="bg-red-100 text-red-700 border-red-200 px-6 py-2 text-xs font-black uppercase tracking-widest">Notre Vision</Badge>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-slate-900">
                      Sourire à <span className="text-red-600">l'innovation</span> durable.
                    </h2>
                  </div>
                  
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    Nous ne créons pas seulement du code, nous bâtissons des ponts entre vos besoins et les technologies de demain. Plus fluide, plus sûr, plus humain.
                  </p>

                  <div className="grid gap-6">
                    {[
                      { text: "Optimisation intelligente des flux", color: "text-red-600", bg: "bg-red-100" },
                      { text: "Sécurité invisible et performante", color: "text-slate-900", bg: "bg-slate-100" },
                      { text: "Industrie connectée & durable", color: "text-red-600", bg: "bg-red-50" },
                      { text: "Data au service de l'humain", color: "text-slate-900", bg: "bg-slate-50" }
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-white transition-colors">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-lg font-black text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                  <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-white shadow-2xl rotate-2">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                      alt="Joyful Collaboration" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-400/10 blur-3xl rounded-full -z-10" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-400/10 blur-3xl rounded-full -z-10" />


                
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 left-10 p-6 rounded-[24px] bg-white shadow-2xl border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-black text-slate-900">+25 Experts</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="solutions" className="py-32 relative bg-slate-100/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <Badge className="bg-red-600 text-white border-none px-6 py-2 text-xs font-black uppercase tracking-[0.2em]">Nos Solutions</Badge>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">Nos Solutions <span className="text-red-600">High-Tech.</span></h2>
              <p className="text-lg font-medium text-slate-500">
                L'innovation n'a pas de limite quand elle est guidée par la passion et la rigueur.
              </p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="group"
                >
                  <Card className="h-full rounded-[40px] border-none bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] hover:-translate-y-3 overflow-hidden">
                    <CardContent className="p-10">
                      <div className={`mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <service.icon size={32} />
                      </div>
                      <h3 className="mb-4 text-2xl font-black tracking-tighter text-slate-900">{service.title}</h3>
                      <p className="mb-8 text-slate-500 font-medium leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-10">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                            <div className={`h-1.5 w-1.5 rounded-full ${service.accent.replace('text', 'bg')}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className={`p-0 h-auto text-lg font-black ${service.accent} hover:bg-transparent group-hover:translate-x-2 transition-transform`}>
                        Voir plus <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="pourquoinous" className="py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="rounded-[60px] bg-white border border-slate-100 p-12 md:p-24 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-emerald-500" />
              
              <div className="grid gap-16 lg:grid-cols-2 items-center">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">Pourquoi faire <br/>confiance à <br/><span className="text-red-600">Grit ?</span></h2>
                    <p className="text-xl font-medium text-slate-500 max-w-md">
                      Parce que nous aimons les défis et que nous mettons tout en œuvre pour votre réussite.
                    </p>
                  </div>
                  
                  <div className="grid gap-8">
                    {[
                      { title: "Sur mesure", desc: "Des solutions adaptées à VOTRE réalité.", color: "bg-red-100 text-red-600" },
                      { title: "Réactivité", desc: "Un support agile et toujours présent.", color: "bg-orange-100 text-orange-600" },
                      { title: "Sécurité", desc: "Vos données protégées par les meilleurs.", color: "bg-emerald-100 text-emerald-600" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 items-start group"
                      >
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} group-hover:scale-110 transition-transform font-black`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                          <p className="text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative lg:block">
                  <div className="relative aspect-square bg-slate-50 rounded-[48px] p-8 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-10"
                    >
                      <Globe size={600} />
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-6 relative z-10 w-full">
                      {[
                        { icon: ShieldCheck, label: "Sécurisé", color: "text-red-500" },
                        { icon: Activity, label: "Actif", color: "text-emerald-500" },
                        { icon: Cpu, label: "Intelligent", color: "text-slate-900" },
                        { icon: Cloud, label: "Global", color: "text-orange-500" }
                      ].map((item, i) => (
                        <Card key={i} className="rounded-3xl border-none shadow-xl bg-white p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform">
                          <item.icon size={32} className={item.color} />
                          <span className="text-sm font-black text-slate-900">{item.label}</span>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 text-center relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div 
              {...fadeIn}
              className="mx-auto max-w-4xl space-y-12"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                C'est le moment <br/> de <span className="text-red-600 underline decoration-red-400 decoration-wavy underline-offset-8">briller</span>.
              </h2>
              <p className="text-2xl font-medium text-slate-500 max-w-2xl mx-auto">
                Prêt à faire passer votre infrastructure au niveau supérieur ?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <Button size="xl" className="h-20 rounded-2xl px-12 text-xl font-black shadow-2xl shadow-red-500/30 bg-red-600 hover:bg-red-700 text-white group">
                  Démarrer l'aventure
                  <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button size="xl" variant="outline" className="h-20 rounded-2xl px-12 text-xl font-black border-slate-200 hover:bg-white bg-white shadow-sm text-slate-900">
                  Voir nos travaux
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-24 relative z-10 rounded-t-[60px]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-8 col-span-2">
              <GritLogo className="h-10 w-10 text-white" />
              <p className="max-w-md text-lg text-slate-400 font-medium leading-relaxed">
                L'intelligence au cœur de vos infrastructures. 
                Une approche humaine de la haute technologie.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="mb-8 font-black uppercase tracking-widest text-xs text-red-500">Solutions</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Péage Intelligent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité IA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Parking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud & Data</a></li>
              </ul>
            </div>

              <div>
                <h4 className="mb-8 font-black uppercase tracking-widest text-xs text-red-500">Grit</h4>
                <ul className="space-y-4 text-slate-400 font-bold">
                  <li className="hover:text-white transition-colors cursor-pointer">contact@grit-technology.com</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Burkina Faso — France</li>
                  <li className="pt-4">
                    <Badge className="bg-red-600 text-white border-none px-4 py-1 text-[10px] font-black">24/7 SUPPORT</Badge>
                  </li>
                </ul>
              </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <div>© {new Date().getFullYear()} Grit Technology. Innovation with a smile.</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
