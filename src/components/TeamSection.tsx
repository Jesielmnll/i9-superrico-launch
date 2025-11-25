import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Carlos Castro',
      role: 'CEO da SuperRico',
      credentials: 'CFP®, Engenheiro | FGV, Insper, MIT',
      description: 'Fundador da SuperRico e membro do Conselho da Planejar (entidade que certifica o CFP® no Brasil). É Engenheiro com formação executiva pela FGV, Insper e MIT. Planejador Financeiro CFP® e consultor autorizado pela CVM. A maior autoridade para te ensinar a gerir riscos e investimentos.',
      initials: 'CC',
    },
    {
      name: 'Clay Gonçalves',
      role: 'Gerente de Projetos SuperRico',
      credentials: 'CFP®, Planejadora Financeira',
      description: 'Planejadora Financeira CFP® com uma trajetória única de transição de carreira: da Saúde e Polícia Civil para o mercado financeiro. Especialista em diagnósticos precisos e construção de hábitos saudáveis, ela ensina como o uso inteligente do dinheiro gera liberdade e autonomia.',
      initials: 'CG',
    },
  ];

  return (
    <section id="professores" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aprenda com a <span className="text-gradient">Elite do Planejamento Financeiro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais certificados CFP® com experiência comprovada em planejamento financeiro e gestão de riscos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  {/* Avatar */}
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-cta flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {member.initials}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-base text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {member.credentials}
                    </p>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4">
                    <Linkedin size={18} />
                    <span className="text-sm font-medium">Ver Perfil no LinkedIn</span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;