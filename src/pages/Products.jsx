import { useTranslation } from 'react-i18next';

function Products() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('products.title')}</h1>
      <p>{t('products.description')}</p>
    </div>
  );
}

export default Products;