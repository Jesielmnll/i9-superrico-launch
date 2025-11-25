import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const SolutionSection = () => {
  const features = [
    {
      icon: TrendingDown,
      title: 'Domar a Renda Variável',
      description: 'Estratégias práticas para quem não tem salário fixo.',
    },
    {
      icon: DollarSign,
      title: 'Fluxo de Caixa Blindado',
      description: 'Como organizar sua vida financeira e parar de vender o almoço para pagar o jantar.',
    },
    {
      icon: TrendingUp,
      title: 'De Ativo para Passivo',
      description: 'Aprenda a transformar sua força de trabalho (renda ativa) em investimentos que trabalham por você (renda passiva).',
    },
    {
      icon: Shield,
      title: 'Proteção Patrimonial',
      description: 'Como proteger sua capacidade de gerar renda ao longo de toda a vida.',
    },
  ];

  return (
    <section id="solucao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold mb-6">
            O Método Exclusivo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Curva de Vitalidade Financeira®</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Neste curso intensivo de dois dias, utilizaremos a metodologia prática da SuperRico para te ensinar a:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('contato')}
            className="gradient-cta text-lg px-8 py-6 hover:opacity-90 transition-opacity"
          >
            INSCREVER-ME AGORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
