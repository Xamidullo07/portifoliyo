import { useTranslation } from 'react-i18next';

function Users() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('users.title')}</h1>
      <p>{t('users.description')}</p>
    </div>
  );
}

export default Users;