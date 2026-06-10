import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { i18n } = useTranslation();
  const isAr = (i18n.language || '').startsWith('ar');

  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '4rem 0 2rem', marginTop: 'auto' }}>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{isAr ? 'عيادة دنفر' : 'DENVER Clinic'}</h3>
          <p style={{ opacity: 0.8, maxWidth: '300px' }}>
            {isAr ? 'اختبر تحولاً مذهلاً من خلال إجراءاتنا غير الجراحية مع نتائج استثنائية قبل وبعد.' : 'Experience an incredible transformation through our non-invasive procedures with remarkable before-and-after results.'}
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{isAr ? 'العلاجات' : 'Treatments'}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
            <Link to="/cellulite" style={{ transition: 'opacity 0.2s' }}>{isAr ? 'علاج السيلوليت' : 'Cellulite Reduction'}</Link>
            <Link to="/body-contouring" style={{ transition: 'opacity 0.2s' }}>{isAr ? 'نحت الجسم' : 'Body Contouring'}</Link>
            <Link to="/face-lift" style={{ transition: 'opacity 0.2s' }}>{isAr ? 'شد الوجه بدون جراحة' : 'Non-Surgical Face Lift'}</Link>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{isAr ? 'اتصل بنا' : 'Contact'}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
            <p>{isAr ? '٦ ابن النبيه، الزمالك، القاهرة، مصر' : '6 Ibn Elnabeh, Zamalek, Cairo, Egypt'}</p>
            <p>{isAr ? 'هاتف: +2 01099355211' : 'Tel: +2 01099355211'}</p>
            <p>{isAr ? 'بريد إلكتروني: dnvrclinic@gmail.com' : 'Email: dnvrclinic@gmail.com'}</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} {isAr ? 'عيادة دنفر للتجميل. جميع الحقوق محفوظة.' : 'Denver Aesthetic Clinic. All rights reserved.'}</p>
      </div>
    </footer>
  );
};
