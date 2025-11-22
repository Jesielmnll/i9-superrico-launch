import { motion } from 'framer-motion';
import { GraduationCap, Target, Network, Award } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Excelência Acadêmica i9',
      description:
        'Instituição reconhecida pelo MEC com mais de 15 anos de experiência em educação executiva e formação de profissionais de alta performance.',
    },
    {
      icon: Target,
      title: 'Metodologia Prática SuperRico',
      description:
        'Aprenda com a metodologia que já transformou mais de 50.000 vidas através da educação financeira prática e aplicável no dia a dia.',
    },
    {
      icon: Network,
      title: 'Networking Exclusivo',
      description:
        'Faça parte de uma comunidade de especialistas, conecte-se com profissionais do mercado e amplie suas oportunidades de negócio.',
    },
    {
      icon: Award,
      title: 'Certificação Reconhecida',
      description:
        'Receba certificado com validade nacional, reconhecido por instituições financeiras e pelo mercado de consultoria.',
    },
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A união que <span className="text-gradient">transforma carreiras</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos a solidez acadêmica com a prática do mercado para formar
            os melhores profissionais em saúde financeira do Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 bg-card border border-border rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">i9 Educação</span>
              </div>
              <p className="text-muted-foreground">
                Instituição de ensino superior com certificação MEC e excelência
                acadêmica reconhecida nacionalmente.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-block px-6 py-3 bg-secondary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-secondary">SuperRico</span>
              </div>
              <p className="text-muted-foreground">
                Metodologia exclusiva de saúde financeira com resultados
                comprovados em mais de 50.000 alunos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;