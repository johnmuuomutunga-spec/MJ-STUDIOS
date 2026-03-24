import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">The Artist</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8">Meet <span className="italic">JOHN MUUO.</span></h1>
            <p className="text-ink/70 text-lg font-light leading-relaxed mb-8">
              With over a decade of experience in fine art and commercial photography, JOHN founded MJ Studios with a simple mission: to capture the beauty that often goes unnoticed.
            </p>
            <p className="text-ink/70 text-lg font-light leading-relaxed mb-8">
              His work is characterized by a deep appreciation for natural light, organic movement, and the quiet, emotional spaces between moments. JOHN'S background in classical painting informs his unique eye for composition and color.
            </p>
            <div className="flex space-x-12 mt-12">
              <div>
                <span className="text-3xl font-serif block">5+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40">Years Experience</span>
              </div>
              <div>
                <span className="text-3xl font-serif block">450+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40">Stories Told</span>
              </div>
              <div>
                <span className="text-3xl font-serif block">15</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40">Awards Won</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              
              alt="JOHN MUUO. - Photographer" 
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 text-paper hidden md:block">
              <p className="font-serif italic text-xl">"I don't take photos, I preserve feelings."</p>
            </div>
          </motion.div>
        </div>

        <section className="py-20 border-t border-ink/10">
          <h2 className="text-4xl font-serif mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Intentionality", desc: "Every click of the shutter is a conscious choice to preserve something meaningful." },
              { title: "Excellence", desc: "We strive for perfection in every detail, from the shoot to the final hand-edited print." },
              { title: "Connection", desc: "We build genuine relationships with our clients to ensure their true selves shine through." }
            ].map((val, i) => (
              <div key={i} className="text-center">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 text-accent">{val.title}</h3>
                <p className="text-ink/70 font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
