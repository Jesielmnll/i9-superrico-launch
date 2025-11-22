import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  DollarSign,
  TrendingUp,
  Brain,
  PieChart,
  Shield,
  Users,
  Briefcase,
  Heart,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ContentCarousel = () => {
  const modules = [
    {
      icon: DollarSign,
      title: 'Fundamentos da Economia',
      description: 'Entenda os pilares econômicos e como eles influenciam as finanças pessoais e empresariais.',
      duration: '20h',
    },
    {
      icon: Brain,
      title: 'Psicologia Econômica',
      description: 'Aprenda sobre comportamento financeiro, vieses cognitivos e tomada de decisão.',
      duration: '16h',
    },
    {
      icon: TrendingUp,
      title: 'Investimentos e Mercado',
      description: 'Domine estratégias de investimento, análise de risco e construção de portfólios.',
      duration: '32h',
    },
    {
      icon: PieChart,
      title: 'Planejamento Financeiro',
      description: 'Técnicas avançadas de planejamento, orçamento e gestão patrimonial.',
      duration: '24h',
    },
    {
      icon: Shield,
      title: 'Proteção Patrimonial',
      description: 'Seguros, previdência privada e estratégias de proteção de patrimônio.',
      duration: '18h',
    },
    {
      icon: Users,
      title: 'Consultoria Financeira',
      description: 'Metodologias de atendimento, captação de clientes e gestão de carteira.',
      duration: '20h',
    },
    {
      icon: Briefcase,
      title: 'Planejamento Sucessório',
      description: 'Sucessão familiar, holding familiar e planejamento tributário.',
      duration: '16h',
    },
    {
      icon: Heart,
      title: 'Ética e Compliance',
      description: 'Regulamentação do mercado, compliance e ética profissional.',
      duration: '12h',
    },
  ];

  return (
    <section id="conteudo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo programático completo desenvolvido por especialistas do mercado
            financeiro e professores doutores da i9 Educação.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {modules.map((module, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shadow-md">
                    <module.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold">{module.title}</h3>

                  <p className="text-muted-foreground text-sm min-h-[3rem]">
                    {module.description}
                  </p>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      Módulo {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {module.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-block px-6 py-3 bg-success/10 rounded-full">
            <span className="text-success font-bold">Carga horária total: 158 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCarousel;