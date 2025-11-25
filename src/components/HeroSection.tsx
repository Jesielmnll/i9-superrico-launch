import { Button } from '@/components/ui/button';
import { Calendar, Monitor, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Advogado: Assuma o Controle dos seus{' '}
                <span className="text-gradient">Honorários</span> e Construa um{' '}
                <span className="text-gradient">Patrimônio Sólido</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                Aprenda a lidar com a renda variável da advocacia e transforme sua carreira em uma fonte de riqueza estável. Um curso exclusivo Faculdade i9 em parceria com a SuperRico.
              </motion.p>
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border-2 border-primary/20 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Quando:</p>
                    <p className="text-muted-foreground">Dias 08 e 09 | Às 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Formato:</p>
                    <p className="text-muted-foreground">100% Online e Ao Vivo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Certificado:</p>
                    <p className="text-muted-foreground">Incluso e Gratuito</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="gradient-cta text-lg px-8 py-6 hover:opacity-90 transition-opacity w-full md:w-auto"
              >
                QUERO GARANTIR MINHA VAGA GRÁTIS
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Jornada da Saúde Financeira para Advogados"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Vagas Limitadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;