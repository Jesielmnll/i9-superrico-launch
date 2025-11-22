import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: CheckCircle2, text: 'Certificado Reconhecido MEC' },
    { icon: Users, text: '+10.000 alunos formados' },
    { icon: Award, text: 'Metodologia Exclusiva' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-section -z-10" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-accent text-accent-foreground">
              Parceria Exclusiva i9 + SuperRico
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Domine a{' '}
              <span className="text-gradient">Saúde Financeira</span> com
              metodologia exclusiva
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Torne-se um especialista em finanças pessoais e transforme
              carreiras. Certificação reconhecida pelo MEC com a excelência
              acadêmica da i9 Educação e a metodologia prática da SuperRico.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="gradient-cta hover:opacity-90 transition-opacity text-lg px-8 animate-pulse-slow"
              >
                Quero saber mais
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('conteudo')}
                className="text-lg px-8"
              >
                Ver conteúdo programático
              </Button>
            </div>

            {/* Floating Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm"
                >
                  <badge.icon className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Profissionais de sucesso em consultoria financeira"
                className="w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Próxima turma</p>
                    <p className="text-lg font-bold text-primary">Vagas Limitadas</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => scrollToSection('contato')}
                    className="gradient-cta"
                  >
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;