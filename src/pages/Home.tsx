import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
            alt="Golden Hour Sunset - Fine Art Photography" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-paper/80 mb-4 block">Fine Art Photography</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-paper font-serif leading-none mb-8">
              Moments <br />
              <span className="italic font-light">Worth Keeping</span>
            </h1>
            <p className="text-paper/80 text-lg md:text-xl max-w-xl font-light mb-10 leading-relaxed">
              We don't just take photos; we document the soul of your story. Premium visual storytelling for weddings, portraits, and commercial brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/portfolio" className="bg-paper text-ink px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-paper transition-all duration-300 flex items-center justify-center group">
                View Portfolio <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <Link to="/contact" className="border border-paper text-paper px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-all duration-300 flex items-center justify-center">
                Book Your Session
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-paper/40">
            Based in Nairobi — Available Worldwide
          </div>
        </div>
      </section>

      {/* Trust Signals / Social Proof */}
      <section className="py-12 bg-ink text-paper/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Vogue Weddings</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">The Knot</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Junebug Weddings</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Rangefinder Magazine</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Wedding Wire</span>
        </div>
      </section>

      {/* Emotional Storytelling Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000" 
              alt="Emotional Moment" 
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-80 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=500" 
                alt="Detail Shot" 
                className="w-full h-full object-cover border-8 border-paper shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:pl-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
            Artistry in every <br />
            <span className="italic">fleeting second</span>.
          </h2>
          <p className="text-ink/70 text-lg font-light leading-relaxed mb-8">
            We believe that the best photos aren't posed; they're felt. Our approach combines editorial precision with documentary authenticity to capture the raw, unscripted beauty of your most important milestones.
          </p>
          <p className="text-ink/70 text-lg font-light leading-relaxed mb-10 italic">
            "MJ Studios captured the parts of our wedding we didn't even know were happening. Looking at the photos feels like reliving the day all over again."
          </p>
          <Link to="/about" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-ink pb-2 hover:text-accent hover:border-accent transition-all">
            Discover Our Story
          </Link>
        </motion.div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-paper/40 mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-serif">The Gallery</h2>
            </div>
            <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-paper/40 pb-2 hover:text-accent hover:border-accent transition-all mt-8 md:mt-0">
              View All Galleries
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Weddings", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" },
              { title: "Portraits", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
              { title: "Editorial", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[3/4] mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-paper/40">Explore Collection</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-12">
            "Photography is not just about capturing what I see, but how I feel. Every session is an opportunity to create a timeless legacy that speaks when words fail."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&q=80&w=150" alt="John Muuo" referrerPolicy="no-referrer" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">JOHN MUUO</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-1">Creative Director, MJ</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent text-paper">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-serif mb-12">Ready to tell <br /><span className="italic">your story?</span></h2>
          <p className="text-paper/80 text-lg max-w-xl mx-auto font-light mb-12">
            Limited availability for 2026. Contact us today to secure your date and begin your visual journey.
          </p>
          <Link to="/contact" className="inline-block bg-paper text-ink px-16 py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-ink hover:text-paper transition-all duration-300">
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};
