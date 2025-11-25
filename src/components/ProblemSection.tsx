import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    'Honorários que oscilam mês a mês (a "montanha-russa" financeira)',
    'Dificuldade em separar o dinheiro pessoal do escritório',
    'Medo de não conseguir se aposentar ou manter o padrão de vida',
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A instabilidade financeira é o maior inimigo da sua{' '}
            <span className="text-gradient">advocacia</span>?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground text-left md:text-center">
            <p>
              Você estudou anos, passou na OAB e luta diariamente pelos direitos dos seus clientes. Mas, quando o assunto é o seu dinheiro, a insegurança bate?
            </p>
            <p>
              Para a maioria dos advogados autônomos e bacharéis, a realidade é dura:
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-4 bg-background p-4 rounded-lg border-2 border-red-500/20"
            >
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-foreground text-lg">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não precisa ser assim.
            </h3>
            <p className="text-lg text-muted-foreground">
              A <span className="font-bold text-primary">Jornada da Saúde Financeira para Advogados</span> vai te entregar o mapa para sair da incerteza e alcançar a liberdade financeira.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;