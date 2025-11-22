import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: 'Mercado em Expansão',
      description:
        'O mercado de planejamento financeiro cresce 23% ao ano no Brasil, mas faltam profissionais qualificados para atender a demanda.',
      stat: '+23%',
      statLabel: 'crescimento anual',
    },
    {
      icon: Users,
      title: 'Carência de Especialistas',
      description:
        'Apenas 5% dos brasileiros têm acesso a consultoria financeira profissional. A oportunidade é imensa para quem se especializar.',
      stat: '95%',
      statLabel: 'mercado desassistido',
    },
    {
      icon: Briefcase,
      title: 'Alta Remuneração',
      description:
        'Planejadores financeiros certificados podem ganhar de R$ 8.000 a R$ 30.000 mensais, trabalhando de forma autônoma ou em instituições.',
      stat: 'R$ 30k',
      statLabel: 'potencial de renda',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-secondary/10 text-secondary">O Mercado</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O mercado financeiro precisa de{' '}
            <span className="text-gradient">especialistas reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transformação digital e a democratização dos investimentos criaram uma
            oportunidade única para profissionais que desejam atuar neste mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold">{problem.title}</h3>

                  <p className="text-muted-foreground">{problem.description}</p>

                  <div className="pt-4 border-t border-border">
                    <div className="text-3xl font-bold text-primary">
                      {problem.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {problem.statLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${className}`}>
    {children}
  </span>
);