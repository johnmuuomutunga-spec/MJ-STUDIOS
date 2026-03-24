import { motion } from 'motion/react';
import { Camera, Users, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      icon: <Heart size={32} />,
      desc: "Documenting your love story with editorial elegance and documentary soul. From intimate elopements to grand celebrations.",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Portrait Sessions",
      icon: <Users size={32} />,
      desc: "Authentic portraits for individuals, couples, and families. We create a comfortable space for your true personality to emerge.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Commercial & Brand",
      icon: <Briefcase size={32} />,
      desc: "Elevating your brand identity through high-end visual storytelling. Perfect for product launches, lifestyle content, and campaigns.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Editorial & Fashion",
      icon: <Camera size={32} />,
      desc: "Creative direction and photography for magazines, designers, and artists looking for a unique, artistic perspective.",
      img: "https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">What We Offer</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Our <span className="italic">Services</span></h1>
          <p className="text-ink/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            We specialize in capturing life's most significant moments across a variety of disciplines, always maintaining our signature artistic style.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-sm shadow-2xl aspect-[16/10]">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-accent mb-6">{service.icon}</div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">{service.title}</h2>
                <p className="text-ink/70 text-lg font-light leading-relaxed mb-10">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-block border border-ink px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-paper transition-all">
                  Inquire About {service.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
