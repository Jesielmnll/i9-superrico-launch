import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import certificateImage from '@/assets/certificate.jpg';

const CertificateSection = () => {
  const benefits = [
    'Certificado reconhecido pelo MEC',
    'Validade em todo território nacional',
    'Aceito por instituições financeiras',
    'Chancela de duas marcas líderes',
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Certificação</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Certificado com <span className="text-gradient">validade nacional</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Ao concluir o curso, você receberá um certificado emitido pela
              Faculdade i9 Educação, com reconhecimento do MEC, que comprova sua
              formação em Saúde Financeira e Planejamento Patrimonial.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Importante:</strong> O certificado é emitido digitalmente com
                QR Code de autenticidade e também pode ser solicitado impresso.
              </p>
            </div>
          </motion.div>

          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={certificateImage}
                alt="Certificado i9 Educação e SuperRico"
                className="w-full h-auto"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-xl"
              >
                <Award className="w-8 h-8 mb-1" />
                <span className="text-xs font-bold text-center">Reconhecido<br />MEC</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;