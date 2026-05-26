import { useTranslation } from 'react-i18next';
import './Contact.css';
import { MessageCircle, Mail } from 'lucide-react';

const WA_NUMBER = '5547991538352';
const EMAIL = 'bfmeridian@gmail.com';

// Track Meta Pixel event safely (avoids errors if Pixel not loaded)
function trackPixel(event: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.('track', event);
  } catch (_) {}
}

export function Contact() {
  const { t, i18n } = useTranslation();

  // Use language-specific WhatsApp message
  const waMessage = encodeURIComponent(t('contact.whatsapp_message'));
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;
  const emailUrl = `mailto:${EMAIL}`;

  const handleWhatsAppClick = () => {
    trackPixel('Lead');
  };

  const handleEmailClick = () => {
    trackPixel('Contact');
  };

  // Suppress unused variable warning — i18n is used to trigger re-render on lang change
  void i18n;

  return (
    <section id="contact" className="section relative contact-section">
      <div className="container contact-container">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-card glass-panel">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-whatsapp"
            id="contact-whatsapp"
            onClick={handleWhatsAppClick}
          >
            <div className="contact-btn-icon">
              <MessageCircle size={24} />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-label">{t('contact.whatsapp')}</span>
              <span className="contact-btn-detail">{t('contact.whatsapp_desc')}</span>
            </div>
            <span className="contact-btn-arrow">→</span>
          </a>

          <div className="contact-or">
            <span>{t('contact.or')}</span>
          </div>

          <a
            href={emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-email"
            id="contact-email"
            onClick={handleEmailClick}
          >
            <div className="contact-btn-icon">
              <Mail size={24} />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-label">{t('contact.email_btn')}</span>
              <span className="contact-btn-detail">{t('contact.email_desc')}</span>
            </div>
            <span className="contact-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
