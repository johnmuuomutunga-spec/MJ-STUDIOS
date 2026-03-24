import { motion } from 'motion/react';

export const Strategy = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Deliverable Documentation</span>
        <h1 className="text-6xl font-serif mb-12">Brand & Digital <br /><span className="italic">Strategy Framework</span></h1>
        
        <div className="space-y-20">
          {/* Sitemap */}
          <section>
            <h2 className="text-3xl font-serif mb-6 border-b border-ink/10 pb-4">1. Website Structure (Sitemap)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Core Pages</h3>
                <ul className="space-y-2 text-ink/70 font-light">
                  <li>• <strong>Homepage:</strong> High-converting entry point.</li>
                  <li>• <strong>About:</strong> Brand story, mission, and the artist's profile.</li>
                  <li>• <strong>Services:</strong> Overview of offerings (Weddings, Portraits, Commercial).</li>
                  <li>• <strong>Portfolio:</strong> Categorized galleries for visual proof.</li>
                  <li>• <strong>Investment:</strong> Pricing transparency and value communication.</li>
                  <li>• <strong>Contact:</strong> Multi-step booking/inquiry funnel.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Support Pages</h3>
                <ul className="space-y-2 text-ink/70 font-light">
                  <li>• <strong>Testimonials:</strong> Dedicated social proof page.</li>
                  <li>• <strong>FAQ:</strong> Objection handling and process clarification.</li>
                  <li>• <strong>Blog:</strong> SEO-driven content and storytelling.</li>
                  <li>• <strong>Client Portal:</strong> Post-booking experience (Optional).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Copywriting */}
          <section>
            <h2 className="text-3xl font-serif mb-6 border-b border-ink/10 pb-4">2. Copywriting Framework</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Brand Voice</h3>
                <p className="text-ink/70 font-light">Sophisticated, empathetic, and authoritative. We use sensory language ("the scent of rain," "the weight of a glance") to trigger emotional responses.</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Messaging Pillars</h3>
                <ul className="list-disc list-inside text-ink/70 font-light space-y-1">
                  <li><strong>Authenticity:</strong> Capturing the real you, not a pose.</li>
                  <li><strong>Artistry:</strong> Every frame is a curated piece of fine art.</li>
                  <li><strong>Legacy:</strong> Creating heirlooms that transcend generations.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Portfolio Strategy */}
          <section>
            <h2 className="text-3xl font-serif mb-6 border-b border-ink/10 pb-4">3. Portfolio Strategy</h2>
            <p className="text-ink/70 font-light mb-4">
              Quality over quantity. We curate galleries to tell a cohesive story rather than showing every shot.
            </p>
            <ul className="space-y-4 text-ink/70 font-light">
              <li>• <strong>The Anchor Image:</strong> Every gallery starts with a "Hero" shot that encapsulates the mood.</li>
              <li>• <strong>Rhythm:</strong> Alternate between wide environmental shots and tight, intimate details.</li>
              <li>• <strong>Emotional Arc:</strong> Arrange photos to follow the chronological or emotional flow of the event.</li>
            </ul>
          </section>

          {/* Conversion & Funnel */}
          <section>
            <h2 className="text-3xl font-serif mb-6 border-b border-ink/10 pb-4">4. Conversion & Booking Funnel</h2>
            <div className="bg-ink text-paper p-8 rounded-sm">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-accent">The User Journey</h3>
              <div className="space-y-4 font-light">
                <div className="flex items-start">
                  <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-xs mr-4 shrink-0">1</span>
                  <p><strong>Landing:</strong> High-impact hero section with immediate value prop.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-xs mr-4 shrink-0">2</span>
                  <p><strong>Exploration:</strong> Portfolio preview and philosophy build trust.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-xs mr-4 shrink-0">3</span>
                  <p><strong>Trust:</strong> Social proof (logos, testimonials) validates quality.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-xs mr-4 shrink-0">4</span>
                  <p><strong>Inquiry:</strong> Low-friction form captures lead data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO & Performance */}
          <section>
            <h2 className="text-3xl font-serif mb-6 border-b border-ink/10 pb-4">5. SEO & Performance</h2>
            <ul className="space-y-4 text-ink/70 font-light">
              <li>• <strong>Local SEO:</strong> Target keywords like "Luxury Wedding Photographer Kenya" or "Premium Portrait Studio KE."</li>
              <li>• <strong>Image Optimization:</strong> WebP format, lazy loading, and descriptive Alt text for every portfolio item.</li>
              <li>• <strong>Semantic HTML:</strong> Proper H1-H6 hierarchy for search engine crawlers.</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
