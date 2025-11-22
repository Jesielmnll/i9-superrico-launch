import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: 'João Pedro Almeida',
      role: 'Planejador Financeiro Autônomo',
      content:
        'A metodologia SuperRico aliada à base acadêmica da i9 transformou minha carreira. Em 6 meses já estava atendendo 15 clientes e faturando R$ 18.000 mensais.',
      rating: 5,
    },
    {
      name: 'Marina Santos',
      role: 'Consultora Financeira',
      content:
        'O curso me deu toda a segurança técnica e prática para atender desde investidores iniciantes até clientes de alta renda. Recomendo para todos que querem seriedade na profissão.',
      rating: 5,
    },
    {
      name: 'Ricardo Fernandes',
      role: 'Gestor de Patrimônio',
      content:
        'Trabalho no mercado há 10 anos e o curso me trouxe atualizações importantes e uma visão mais holística sobre saúde financeira. Valeu cada minuto investido.',
      rating: 5,
    },
    {
      name: 'Juliana Costa',
      role: 'CFP® Independente',
      content:
        'Finalmente encontrei uma formação que une teoria sólida com prática do mercado. Os professores são extremamente qualificados e o networking é sensacional.',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Lima',
      role: 'Consultor em Transição de Carreira',
      content:
        'Mudei de área aos 45 anos e hoje sou realizado profissionalmente. O curso me deu ferramentas para começar do zero e construir uma carreira sólida em planejamento financeiro.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-gradient">alunos dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação profissional e sucesso no mercado financeiro.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/20" />

                  <p className="text-muted-foreground italic min-h-[8rem]">
                    "{testimonial.content}"
                  </p>

                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;