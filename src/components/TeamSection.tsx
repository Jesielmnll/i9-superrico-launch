import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Dr. Roberto Martins',
      role: 'Coordenador Acadêmico i9',
      credentials: 'PhD em Economia - USP',
      description: 'Especialista em mercado financeiro com 20 anos de experiência em instituições bancárias.',
    },
    {
      name: 'Ana Paula Costa',
      role: 'Diretora de Metodologia SuperRico',
      credentials: 'CFP®, MBA em Finanças',
      description: 'Planejadora financeira certificada, responsável pela metodologia de saúde financeira.',
    },
    {
      name: 'Prof. Carlos Eduardo',
      role: 'Especialista em Investimentos',
      credentials: 'CFA, Mestre em Finanças',
      description: 'Ex-gestor de fundos com R$ 2 bilhões sob gestão, professor de estratégias de investimento.',
    },
    {
      name: 'Dra. Mariana Silva',
      role: 'Psicóloga Econômica',
      credentials: 'PhD em Behavioral Finance',
      description: 'Pesquisadora em comportamento financeiro e tomada de decisão sob incerteza.',
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
            Aprenda com os <span className="text-gradient">melhores do mercado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professores doutores, certificados e com experiência comprovada em
            planejamento financeiro e consultoria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-cta flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.credentials}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Linkedin size={16} />
                    <span className="text-sm font-medium">LinkedIn</span>
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