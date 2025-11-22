import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* i9 Educação */}
          <div>
            <h3 className="text-lg font-bold mb-4">i9 Educação</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1234<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@i9educacao.com.br</span>
              </li>
            </ul>
          </div>

          {/* SuperRico */}
          <div>
            <h3 className="text-lg font-bold mb-4">SuperRico</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Av. Faria Lima, 2000<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 4000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@superrico.com.br</span>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#sobre" className="hover:text-background transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-background transition-colors">
                  Conteúdo Programático
                </a>
              </li>
              <li>
                <a href="#professores" className="hover:text-background transition-colors">
                  Professores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            
            <p className="text-xs text-background/60 mt-6">
              Site desenvolvido por uma parceria entre i9 Educação e SuperRico para
              formação de especialistas em saúde financeira.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {currentYear} i9 Educação & SuperRico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;