import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Qual é o investimento no curso?',
      answer:
        'O investimento varia de acordo com a forma de pagamento escolhida. Entre em contato com nossos consultores através do formulário para receber uma proposta personalizada com condições especiais.',
    },
    {
      question: 'Qual a duração do curso?',
      answer:
        'O curso tem carga horária de 158 horas, podendo ser concluído em 6 a 12 meses, dependendo do ritmo de estudos do aluno. As aulas são disponibilizadas em formato EAD, permitindo flexibilidade total.',
    },
    {
      question: 'O curso é totalmente online?',
      answer:
        'Sim, todo o conteúdo é disponibilizado em nossa plataforma EAD. Você pode assistir as aulas quando e onde quiser. Além disso, oferecemos encontros ao vivo mensais com professores e networking com outros alunos.',
    },
    {
      question: 'Preciso ter formação prévia em finanças?',
      answer:
        'Não é necessário. O curso foi desenvolvido tanto para iniciantes quanto para profissionais que já atuam no mercado. Nosso conteúdo começa do básico e evolui gradualmente até temas avançados.',
    },
    {
      question: 'O certificado é reconhecido pelo MEC?',
      answer:
        'Sim. O certificado é emitido pela Faculdade i9 Educação, instituição de ensino superior reconhecida pelo MEC, com validade em todo o território nacional.',
    },
    {
      question: 'Posso atuar como planejador financeiro após o curso?',
      answer:
        'Sim. Ao concluir o curso, você estará apto a atuar como consultor financeiro, planejador financeiro ou assessor de investimentos. Recomendamos também buscar certificações complementares como CFP® e CPA-20 conforme sua área de atuação.',
    },
    {
      question: 'Existe suporte durante o curso?',
      answer:
        'Sim. Você terá acesso a uma equipe de tutores para tirar dúvidas, além de participar de grupos de estudos com outros alunos e professores. Também oferecemos mentorias ao vivo mensalmente.',
    },
    {
      question: 'Posso parcelar o investimento?',
      answer:
        'Sim, oferecemos diversas opções de parcelamento. Entre em contato com nossos consultores através do formulário para conhecer as condições disponíveis e escolher a que melhor se adequa ao seu perfil.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso, certificação e forma de pagamento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;