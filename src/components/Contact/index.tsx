import Image from 'next/image';
import ContactForm from '../ContactForm';
import style from './Contact.module.css';
import Facebook from '../../assets/socialMedia/facebook.png';
import Instagram from '../../assets/socialMedia/instagram.png';
import WhatsApp from '../../assets/socialMedia/whatsapp.png';
import Watermark from '../../assets/logo-watermark.png';

const socialMedia = [
  {
    image: Facebook,
    alt: 'Facebook',
    link: 'https://www.facebook.com/InstitutoPedroHenriqueDH',
  },
  {
    image: Instagram,
    alt: 'Instagram',
    link: 'https://www.instagram.com/institutopedrohenrique',
  },
  {
    image: WhatsApp,
    alt: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=5511961382744&text=Ol%C3%A1!%20Vim%20pelo%20site%20para%20conversar%20sobre%20o%20Instituto%20Pedro%20Henrique%20:)',
  },
];

const renderSocialMedia = () => socialMedia.map(({ image, alt, link }) => (
  <a
    href={link}
    target="_blank"
    className={style.contact_socialMediaitem}
    rel="noreferrer"
    key={alt}
  >
    <Image src={image} alt={alt} key={alt} />
  </a>
));

export default function Contact() {
  return (
    <article id="contato" className={style.contact}>
      <h1 className="article-title">Entre em contato</h1>
      <h2 className={style.contact__cta}>
        Para participar e apoiar nossa causa!
      </h2>
      <main className={style.contact__main}>
        <ContactForm />
        <span className={style.contact__cta}>ou em nossas redes sociais:</span>
        <div>
          {renderSocialMedia()}
        </div>
        <div className={style.contact__watermark}>
          <Image
            src={Watermark}
            alt=""
          />
        </div>
      </main>
    </article>
  );
}
