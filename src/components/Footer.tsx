import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 border-t border-color text-center text-sm text-secondary bg-surface">
      <div className="container flex-col md:flex-row justify-between items-center gap-4">
        <div className="logo font-bold text-lg mb-4 md:mb-0" style={{letterSpacing: '-0.05em'}}>
          <span style={{color: 'var(--accent-color)'}}>BF</span>
          <span style={{color: 'var(--text-primary)', marginLeft: '0.25rem'}}>MERIDIAN</span>
        </div>
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
}
