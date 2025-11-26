import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import logoI9 from '@/assets/logo-i9-new.png';
import logoSuperRico from '@/assets/logo-superrico-new.png';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const SolutionSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Excelência Acadêmica i9',
      description: 'Instituição reconhecida pelo MEC com experiência em educação na área jurídica, formando profissionais de alta performance.',
    },
    {
      icon: Rocket,
      title: 'Metodologia Prática SuperRico',
      description: 'Aprenda com a metodologia que já transformou mais de 50.000 vidas através da educação financeira prática e aplicável no dia a dia.',
    },
    {
      icon: Users,
      title: 'Networking Exclusivo',
      description: 'Faça parte de uma comunidade de especialistas, conecte-se com profissionais do mercado e amplie suas oportunidades de negócio.',
    },
    {
      icon: Award,
      title: 'Certificação Reconhecida',
      description: 'Receba certificado com validade nacional, reconhecido por instituições financeiras e pelo mercado de consultoria.',
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
            Combinamos a solidez acadêmica com a prática do mercado para formar os melhores profissionais em saúde financeira do Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 bg-card border border-border rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="text-center md:text-left h-full flex flex-col">
              <div className="inline-block p-4 bg-white rounded-xl mb-4 shadow-sm border border-gray-100 h-24 flex items-center justify-center min-w-[200px] self-center md:self-start w-full md:w-auto">
                <img 
                  src={logoI9} 
                  alt="i9 Educação" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground flex-grow">
                Instituição de ensino superior com certificação MEC e excelência acadêmica reconhecida nacionalmente.
              </p>
            </div>

            <div className="text-center md:text-left h-full flex flex-col">
              <div className="inline-block p-4 bg-white rounded-xl mb-4 shadow-sm border border-gray-100 h-24 flex items-center justify-center min-w-[200px] self-center md:self-start w-full md:w-auto">
                <img 
                  src={logoSuperRico} 
                  alt="SuperRico" 
                  className="h-16 w-auto object-contain" 
                />
              </div>
              <p className="text-muted-foreground flex-grow">
                Metodologia exclusiva de saúde financeira com resultados comprovados em mais de 50.000 alunos.
              </p>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-border">
            <Button
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="gradient-cta text-lg px-8 py-6 hover:opacity-90 transition-opacity w-full md:w-auto animate-pulse-slow shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              QUERO GARANTIR MINHA VAGA GRÁTIS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
