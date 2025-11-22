import { motion } from 'framer-motion';

const LogoSection = () => {
  const partners = [
    'Banco Central',
    'CVM',
    'Anbima',
    'Planejar',
    'IBCPF',
    'Febraban',
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
            Empresas e parceiros que confiam na metodologia
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-12 px-6 flex items-center justify-center bg-background/50 rounded-lg">
                <span className="text-lg font-semibold text-foreground/70">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;