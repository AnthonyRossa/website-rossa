import InstagramLogo from "../../images/instagram.svg";
import WhatsappLogo from "../../images/whatsapp.svg";
import FacebookLogo from "../../images/facebook.svg";
import EmailLogo from "../../images/email.svg";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contato e Redes Sociais:</h2>
      <div className="contact__content">
        <a href="https://www.instagram.com/rossadefumados">
          <img className="contact__image-instagram" src={InstagramLogo} />
        </a>
        <a href="https://wa.me/554236740156">
          <img className="contact__image-whatsapp" src={WhatsappLogo} />
        </a>
        <a href="https://www.facebook.com/rossadefumados">
          <img className="contact__image-facebook" src={FacebookLogo} />
        </a>
        <a href="mailto:rossa@rossadefumados.com.br">
          <img className="contact__image-email" src={EmailLogo} />
        </a>
      </div>
    </section>
  );
}
