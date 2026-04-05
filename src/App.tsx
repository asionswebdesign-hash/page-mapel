import { 
  Rocket, 
  BookOpen, 
  LayoutGrid, 
  Gift, 
  Bot, 
  ArrowRight, 
  Search, 
  Trophy, 
  Star, 
  Coins, 
  Sparkles,
  Ruler,
  Beaker,
  Palette,
  Globe,
  Puzzle,
  Play,
  Lock,
  Brush
} from 'lucide-react';
import { motion } from 'motion/react';

const Sidebar = () => {
  const menuItems = [
    { icon: BookOpen, label: 'Pelajaran', active: true },
    { icon: LayoutGrid, label: 'Kuis', active: false },
    { icon: Gift, label: 'Hadiah', active: false },
    { icon: Bot, label: 'AI Buddy', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col py-8 bg-white w-64 rounded-r-xl shadow-[20px_0_40px_0_rgba(0,96,169,0.06)] z-50">
      <div className="px-8 mb-10 flex items-center gap-3">
        <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-primary">
          <Rocket className="w-8 h-8 fill-current" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary leading-tight">Halo, Juara!</h2>
          <p className="text-xs text-slate-500 font-medium">Level 12 Explorer</p>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col gap-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`px-6 py-3 my-1 mx-2 flex items-center gap-3 font-medium rounded-full transition-all ${
              item.active 
                ? 'bg-blue-100 text-primary translate-x-1' 
                : 'text-slate-500 hover:bg-blue-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
          <span>Mulai Belajar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

const TopBar = () => {
  return (
    <header className="w-full sticky top-0 flex justify-between items-center px-6 py-4 bg-blue-50/80 backdrop-blur-md border-b-2 border-blue-100/50 shadow-sm z-40">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black text-primary font-headline">MathPlayground</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex gap-2 mr-4">
          <button className="p-2 rounded-full text-blue-400 hover:bg-blue-100 transition-colors">
            <Trophy className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full text-blue-400 hover:bg-blue-100 transition-colors">
            <Star className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full text-blue-400 hover:bg-blue-100 transition-colors">
            <Coins className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 px-3 py-1 bg-surface-container rounded-full">
          <span className="font-bold text-on-primary-container text-sm">2,450 XP</span>
          <img 
            alt="Student avatar" 
            className="w-8 h-8 rounded-full border-2 border-primary-container" 
            src="https://picsum.photos/seed/student/100/100"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};

const SubjectCard = ({ 
  title, 
  description, 
  icon: Icon, 
  colorClass, 
  borderClass, 
  badge, 
  footer 
}: any) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`group relative ${colorClass} p-8 rounded-xl border-b-4 ${borderClass} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-inherit shadow-sm">
          <Icon className="w-10 h-10" />
        </div>
        {badge && (
          <span className={`px-3 py-1 ${badge.color} text-white text-xs font-bold rounded-full`}>
            {badge.text}
          </span>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-70 mb-8">{description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        {footer}
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex bg-surface">
      <Sidebar />
      
      <div className="pl-64 flex-1 flex flex-col">
        <TopBar />
        
        <main className="p-8 flex-1 max-w-7xl mx-auto w-full">
          <div className="mb-10 relative">
            <h1 className="text-4xl font-extrabold text-on-surface mb-2 flex items-center gap-4">
              Pilih Petualangan Belajarmu Hari Ini!
              <Sparkles className="text-secondary w-10 h-10 animate-pulse" />
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Halo Juara! Mau jago di bidang apa hari ini? Pilih pelajaran favoritmu dan mulai kumpulkan bintang!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <SubjectCard 
              title="Matematika"
              description="Belajar angka & logika dengan cara yang seru dan menantang!"
              icon={Ruler}
              colorClass="bg-primary-container/40 text-on-primary-container"
              borderClass="border-primary"
              badge={{ text: 'POPULER', color: 'bg-primary' }}
              footer={
                <>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-container"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-tertiary-container"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-bold">+12</div>
                  </div>
                  <div className="bg-primary-container text-primary p-2 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </>
              }
            />

            <SubjectCard 
              title="Bahasa"
              description="Eksplorasi kata-kata indah dan cerita petualangan yang hebat."
              icon={BookOpen}
              colorClass="bg-secondary-container/30 text-on-secondary-container"
              borderClass="border-secondary"
              footer={
                <>
                  <div className="text-sm font-bold text-secondary">15 Modul Tersisa</div>
                  <div className="bg-white text-secondary p-2 rounded-full shadow-sm hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </>
              }
            />

            <SubjectCard 
              title="Sains"
              description="Rahasia alam semesta, dari atom terkecil hingga galaksi raksasa."
              icon={Beaker}
              colorClass="bg-surface-container-high text-on-surface"
              borderClass="border-blue-400"
              footer={
                <div className="w-full flex items-center gap-4">
                  <div className="flex-1 bg-white/50 rounded-full h-2">
                    <div className="bg-blue-500 h-full rounded-full w-2/3"></div>
                  </div>
                  <span className="text-xs font-bold text-blue-600">67%</span>
                </div>
              }
            />

            <SubjectCard 
              title="Seni"
              description="Ekspresikan dirimu melalui warna, bentuk, dan imajinasi liar."
              icon={Palette}
              colorClass="bg-tertiary-container/30 text-on-tertiary-container"
              borderClass="border-tertiary"
              badge={{ text: 'BARU', color: 'bg-tertiary' }}
              footer={
                <>
                  <div className="flex items-center gap-2 text-tertiary">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Terbuka</span>
                  </div>
                  <div className="bg-tertiary text-on-tertiary p-2 rounded-full hover:rotate-12 transition-transform">
                    <Brush className="w-5 h-5" />
                  </div>
                </>
              }
            />

            <SubjectCard 
              title="Dunia"
              description="Keliling dunia dan kenali budaya serta sejarah dari berbagai negara."
              icon={Globe}
              colorClass="bg-green-50 text-green-900"
              borderClass="border-green-500"
              footer={
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-green-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                  <div className="text-xs text-green-500">2.5rb+ Pelajar</div>
                </div>
              }
            />

            <SubjectCard 
              title="Logika"
              description="Asah otakmu dengan tantangan puzzle dan teka-teki logika harian."
              icon={Puzzle}
              colorClass="bg-orange-50 text-orange-900"
              borderClass="border-orange-400"
              footer={
                <div className="px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-xs font-bold">
                  TANTANGAN HARIAN
                </div>
              }
            />
          </div>

          <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm flex items-center gap-8 relative overflow-hidden">
              <div className="z-10 flex-1">
                <h4 className="text-xl font-bold text-on-surface mb-2">Terus Berlanjut!</h4>
                <p className="text-on-surface-variant mb-4">
                  Kamu hampir mencapai target harianmu. Belajar 15 menit lagi untuk mendapatkan peti harta karun!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-surface-container h-4 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[80%] rounded-full"></div>
                  </div>
                  <span className="font-bold text-secondary">80%</span>
                </div>
              </div>
              <img 
                alt="Reward illustration" 
                className="w-40 h-40 object-contain hidden sm:block" 
                src="https://picsum.photos/seed/treasure/200/200"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-tertiary p-8 rounded-xl shadow-lg text-on-tertiary flex flex-col justify-center items-center text-center">
              <Bot className="w-12 h-12 mb-4 fill-current" />
              <h4 className="text-lg font-bold mb-2">Butuh Bantuan?</h4>
              <p className="text-sm opacity-90 mb-6">Tanya AI Buddy tentang soal yang sulit bagimu!</p>
              <button className="bg-white text-tertiary px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform">
                Chat Sekarang
              </button>
            </div>
          </section>
        </main>

        <footer className="p-8 text-center text-on-surface-variant opacity-60 text-sm">
          © 2024 MathPlayground — Dibuat dengan ❤️ untuk para penjelajah cilik.
        </footer>
      </div>
    </div>
  );
}
