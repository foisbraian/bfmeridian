import { useTranslation } from 'react-i18next';
import './Hero.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <header className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>
      
      <div className="container hero-content flex flex-col items-center justify-center">
        <div className="hero-text-wrapper text-center">
          <div className="badge glass-panel mb-6 inline-block px-4 py-2 rounded-full text-sm font-medium">
            Strategic Consulting
          </div>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          
          <div className="hero-actions flex gap-4 justify-center mt-8">
            <a href="#contact" className="btn btn-primary">
              {t('hero.cta')}
            </a>
            <a href="#services" className="btn btn-outline">
              {t('nav.services')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
