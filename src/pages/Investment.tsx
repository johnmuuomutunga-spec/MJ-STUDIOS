import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Investment = () => {
  const packages = [
    {
      name: "Portrait Session",
      price: "From KSh 20,000",
      features: ["2 Hours of Shooting", "20 Hand-Edited Images", "Online Gallery", "Personal Usage Rights"]
    },
    {
      name: "Wedding Collection",
      price: "From KSh 200,000",
      features: ["8 Hours of Coverage", "High-Res Digital Files", "Engagement Session", "Fine Art Album", "Second Photographer"]
    },
    {
      name: "Commercial / Brand",
      price: "KSh 300,000",
      features: ["Full Day Coverage", "Full Commercial Rights", "Creative Direction", "Rapid Delivery", "Social Media Edits"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Pricing & Value</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8">The <span className="italic">Investment</span></h1>
          <p className="text-ink/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Photography is an investment in your legacy. We offer transparent pricing structures designed to provide maximum value and artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 border border-ink/5 shadow-xl flex flex-col h-full"
            >
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">{pkg.name}</h3>
              <div className="text-4xl font-serif mb-8">{pkg.price}</div>
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm font-light text-ink/70">
                    <Check size={14} className="mr-3 text-accent" /> {feat}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="w-full border border-ink py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-center hover:bg-ink hover:text-paper transition-all">
                Inquire for Details
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 bg-ink text-paper p-16 rounded-sm text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 italic">"Quality is remembered long after the price is forgotten."</h2>
          <p className="text-paper/60 font-light max-w-xl mx-auto">
            Every session is unique. If you have a specific vision that doesn't fit into these collections, we'd love to create a custom proposal for you.
          </p>
        </div>
      </div>
    </div>
  );
};
