import { useTranslation } from 'react-i18next';
import './Methodology.css';
import { Search, BarChart2, Map, Rocket } from 'lucide-react';

export function Methodology() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Search size={20} />,
      step: '01',
      title: t('methodology.step1_title'),
      desc: t('methodology.step1_desc'),
      duration: t('methodology.step1_duration'),
    },
    {
      icon: <BarChart2 size={20} />,
      step: '02',
      title: t('methodology.step2_title'),
      desc: t('methodology.step2_desc'),
      duration: t('methodology.step2_duration'),
    },
    {
      icon: <Map size={20} />,
      step: '03',
      title: t('methodology.step3_title'),
      desc: t('methodology.step3_desc'),
      duration: t('methodology.step3_duration'),
    },
    {
      icon: <Rocket size={20} />,
      step: '04',
      title: t('methodology.step4_title'),
      desc: t('methodology.step4_desc'),
      duration: t('methodology.step4_duration'),
    },
  ];

  return (
    <section id="methodology" className="section methodology-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('methodology.title')}</h2>
          <p className="methodology-subtitle">{t('methodology.subtitle')}</p>
        </div>

        <div className="methodology-steps">
          {steps.map((step, idx) => (
            <div key={idx} className="method-step">
              <div className="step-header">
                <span className="step-number-badge">{step.step}</span>
                <span className="step-duration">{step.duration}</span>
              </div>
              <div className="step-content glass-panel">
                <div className="step-icon-wrap">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="step-connector-line" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
