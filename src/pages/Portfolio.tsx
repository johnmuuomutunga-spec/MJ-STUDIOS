import { motion } from 'motion/react';

export const Portfolio = () => {
  const categories = ["All", "Weddings", "Portraits", "Commercial", "Editorial"];
  const items = [
    { title: "The Italian Escape", cat: "Weddings", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
    { title: "Urban Soul", cat: "Portraits", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
    { title: "Maison Luxe", cat: "Commercial", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Vogue Editorial", cat: "Editorial", img: "https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800" },
    { title: "Highland Vows", cat: "Weddings", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { title: "", cat: "Portraits", img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Visual Proof</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-12">The <span className="italic">Portfolio</span></h1>
          
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((cat) => (
              <button key={cat} className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/5] mb-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">{item.cat}</span>
              <h3 className="text-2xl font-serif">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
