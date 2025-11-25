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
      name: 'Daniela Coelho',
      role: 'Local Guide · 86 reviews · 352 photos',
      content:
        'Gostaria de registrar meu reconhecimento pelo excelente atendimento que recebi. Os funcionários sempre muito atenciosos, prestativos e demonstram grande empenho em atender minhas solicitações com agilidade e cordialidade. O atendimento via WhatsApp também merece destaque pela eficiência e prontidão nas respostas.',
      rating: 5,
      timeAgo: '4 months ago'
    },
    {
      name: 'Elci Lemes Pereira Junior',
      role: '1 review',
      content:
        'Atendimento excelente! Fui muito bem atendido pela equipe da Faculdade i9. O atendimento foi rápido, eficaz e totalmente personalizado, com atenção aos detalhes e muita cordialidade. Parabéns à equipe pelo profissionalismo!',
      rating: 5,
      timeAgo: '4 months ago'
    },
    {
      name: 'CRISTIANE GOMES',
      role: '1 review',
      content:
        'A Instituição i9, possui excelentes cursos, ótimos professores que ensinam de forma prática, sem contar o valor dos cursos e pós graduações cabem no seu bolso. Super indico',
      rating: 5,
      timeAgo: '6 months ago'
    },
    {
      name: 'Rafael Bandeira',
      role: '1 review',
      content:
        'Minha experiência foi ótima com a i9, aulas muito bem planejadas e de fácil compreensão, plataforma muito intuitiva. recomendo a todos.',
      rating: 5,
      timeAgo: '4 months ago'
    },
    {
      name: 'Gilson de Souza',
      role: '1 review',
      content:
        'Sou graduado em Gestão Pública, e fiz duas pós-graduação na I9 Educação. Curso de Direitos Humanos e Ciências Jurídicas, A mesma oferece conteúdo atualizado, uma plataforma muito boa. Recomento a i9 Educação pra quem quer fazer uma pós na área de Direito. Só benção!',
      rating: 5,
      timeAgo: '6 months ago'
    },
    {
      name: 'Kamila Barbosa',
      role: 'Local Guide · 12 reviews',
      content:
        'Não tenho que falar aprendi muito são excelentes e me tiram dúvidas no que preciso estão sempre a disposição obrigada i9',
      rating: 5,
      timeAgo: '4 months ago'
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
            Avaliações reais de alunos da Faculdade i9 no Google.
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