import { useTranslation } from 'react-i18next';
import './Services.css';
import { BarChart3, LineChart, Cpu, Globe, Code2 } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <BarChart3 size={28} />,
      tag: t('services.tag_strategy'),
      title: t('services.data_analysis'),
      desc: t('services.data_analysis_desc'),
      bullets: [
        t('services.data_analysis_b1'),
        t('services.data_analysis_b2'),
        t('services.data_analysis_b3'),
      ],
    },
    {
      icon: <LineChart size={28} />,
      tag: t('services.tag_strategy'),
      title: t('services.situational'),
      desc: t('services.situational_desc'),
      bullets: [
        t('services.situational_b1'),
        t('services.situational_b2'),
        t('services.situational_b3'),
      ],
    },
    {
      icon: <Cpu size={28} />,
      tag: t('services.tag_strategy'),
      title: t('services.strategy'),
      desc: t('services.strategy_desc'),
      bullets: [
        t('services.strategy_b1'),
        t('services.strategy_b2'),
        t('services.strategy_b3'),
      ],
    },
    {
      icon: <Globe size={28} />,
      tag: t('services.tag_web'),
      title: t('services.web_dev'),
      desc: t('services.web_dev_desc'),
      bullets: [
        t('services.web_dev_b1'),
        t('services.web_dev_b2'),
        t('services.web_dev_b3'),
      ],
      highlight: true,
    },
    {
      icon: <Code2 size={28} />,
      tag: t('services.tag_software'),
      title: t('services.software_dev'),
      desc: t('services.software_dev_desc'),
      bullets: [
        t('services.software_dev_b1'),
        t('services.software_dev_b2'),
        t('services.software_dev_b3'),
      ],
      highlight: true,
    },
  ];

  return (
    <section id="services" className="section relative services-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="services-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`service-card glass-panel rounded-xl transition-all${service.highlight ? ' service-card--highlight' : ''}`}
            >
              <div className="service-card-top">
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-bullets">
                {service.bullets.map((b, i) => (
                  <li key={i} className="service-bullet">
                    <span className="bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
