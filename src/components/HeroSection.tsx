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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground"
              >
                Advogado: Assuma o Controle dos seus{' '}
                <span className="text-[#1a4d2e]">Honorários</span> e Construa um{' '}
                <span className="text-[#1a4d2e]">Patrimônio Sólido</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base md:text-lg text-[#1a4d2e] mb-6"
              >
                Aprenda a lidar com a renda variável da advocacia e transforme sua carreira em uma fonte de riqueza estável. Um curso exclusivo Faculdade i9 em parceria com a SuperRico.
              </motion.p>
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/40 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Quando:</p>
                    <p className="text-sm text-foreground/80">Dias 08 e 09 | Às 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Formato:</p>
                    <p className="text-sm text-foreground/80">100% Online e Ao Vivo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Certificado:</p>
                    <p className="text-sm text-foreground/80">Incluso e Gratuito</p>
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
                className="bg-white text-primary hover:bg-white/90 transition-all text-base md:text-lg px-6 py-5 w-full md:w-auto font-bold shadow-xl"
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
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-5 py-2.5 rounded-lg shadow-lg">
                <p className="font-bold text-base">Vagas Limitadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;