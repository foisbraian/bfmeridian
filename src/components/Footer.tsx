import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-color text-center text-sm text-secondary bg-surface">
      <div className="container flex-col md:flex-row justify-between items-center gap-4">
        <div className="logo font-bold text-lg mb-4 md:mb-0" style={{letterSpacing: '-0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <svg className="logo-svg" viewBox="0 0 376 200" fill="currentColor" style={{width: '1.65rem', height: 'auto', aspectRatio: '376 / 200', color: 'var(--accent-color)', flexShrink: 0}}>
            <path fillRule="evenodd" clipRule="evenodd" d="M 376 0 L 50 0 A 50 50 0 0 0 50 100 A 50 50 0 0 0 50 200 L 226 200 L 226 125 L 360 125 L 360 75 L 226 75 L 226 50 L 376 50 Z M 176 50 L 87.5 50 A 12.5 12.5 0 0 0 87.5 75 L 176 75 Z M 176 125 L 87.5 125 A 12.5 12.5 0 0 0 87.5 150 L 176 150 Z" />
          </svg>
          <span style={{color: 'var(--text-primary)'}}>MERIDIAN</span>
        </div>
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
}
