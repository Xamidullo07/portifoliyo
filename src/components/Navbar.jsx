import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/products">{t('nav.products')}</Link>
        <Link to="/users">{t('nav.users')}</Link>
        <Link to="/partners">{t('nav.partners')}</Link>
      </div>
      <div className="language-selector">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('uz')}>UZ</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
      </div>
    </nav>
  );
}

export default Navbar;