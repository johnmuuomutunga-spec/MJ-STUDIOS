import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Let's create <br /><span className="italic">magic.</span></h1>
          <p className="text-ink/70 text-lg font-light leading-relaxed mb-12 max-w-md">
            Whether it's your wedding day, a brand launch, or a personal milestone, we're here to capture it with soul and artistry.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 block">Email Us</span>
                <span className="text-lg font-serif">johnmutungamuuo@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 block">Call Us</span>
                <span className="text-lg font-serif">+254708661437</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 block">Visit Us</span>
                <span className="text-lg font-serif">NAIROBI, KENYA, KE</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border border-ink/5"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Full Name</label>
                <input type="text" className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors font-light" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors font-light" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Service Type</label>
              <select className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors font-light bg-transparent">
                <option>Wedding Photography</option>
                <option>Portrait Session</option>
                <option>Commercial / Editorial</option>
                <option>Event Coverage</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Event Date (Optional)</label>
              <input type="date" className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors font-light" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">Tell us about your vision</label>
              <textarea rows={4} className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors font-light resize-none" placeholder="Share some details..."></textarea>
            </div>

            <button type="submit" className="w-full bg-ink text-paper py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent transition-all duration-300 flex items-center justify-center group">
              Send Inquiry <Send size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
