import { useTranslation } from 'react-i18next';
import './About.css';
import { Target } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section glass-panel relative about-section m-4 rounded-xl">
      <div className="container md:grid-cols-2 grid gap-8 items-center">
        <div className="about-content">
          <div className="icon-badge mb-4">
            <Target size={24} className="text-accent" />
          </div>
          <h2 className="section-title mb-6">{t('about.title')}</h2>
          <p className="about-description text-lg text-secondary">
            {t('about.description')}
          </p>
        </div>
        <div className="about-graphic relative">
          <div className="graphic-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="graphic-dots"></div>
          <div className="floating-card glass-panel p-6 rounded-lg absolute">
            <div className="floating-card-eyebrow">✦ {t('about.standard_title')}</div>
            <p className="text-sm text-secondary mb-4">{t('about.standard_desc')}</p>
            <div className="methodology-tags">
              <span className="method-tag">{t('about.tag1')}</span>
              <span className="method-tag">{t('about.tag2')}</span>
              <span className="method-tag">{t('about.tag3')}</span>
              <span className="method-tag">{t('about.tag4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
