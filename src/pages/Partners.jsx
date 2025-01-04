import { useTranslation } from 'react-i18next';

function Partners() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('partners.title')}</h1>
      <p>{t('partners.description')}</p>
    </div>
  );
}

export default Partners;