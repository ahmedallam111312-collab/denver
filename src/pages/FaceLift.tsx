import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FaceLift = () => {
  const { i18n } = useTranslation();
  const isAr = (i18n.language || '').startsWith('ar');

  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>
            {isAr ? 'شد الوجه بدون جراحة' : 'Non-Surgical Face Lift'}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            {isAr ? 'اختبر تحولاً مذهلاً لخط الفك وملامح الوجه من خلال إجراءات استثنائية غير جراحية.' : 'Experience an incredible transformation of your jawline and facial contours through remarkable non-invasive procedures.'}
          </p>
        </AnimatedSection>

        <AnimatedSection className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                {isAr ? 'تقنية MMFU (ألترافورمر)' : 'MMFU (Ultraformer)'}
              </h2>
              <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
                {isAr ? 'توفر تقنية الموجات فوق الصوتية الدقيقة والمركزة (MMFU) شداً ورفعاً غير جراحي للوجه. تستهدف طبقات متعددة من الجلد لتحفيز الإنتاج الطبيعي للكولاجين، مما يؤدي إلى مظهر شبابي مشدود.' : 'Micro and Macro Focused Ultrasound (MMFU) technology provides a non-surgical lifting and tightening of the face. It targets multiple layers of the skin to stimulate natural collagen production, resulting in a lifted, youthful appearance.'}
              </p>
              <ul style={{ paddingLeft: isAr ? 0 : '1.5rem', paddingRight: isAr ? '1.5rem' : 0, opacity: 0.8, marginBottom: '2rem' }}>
                <li>{isAr ? 'تحديد خط الفك' : 'Jawline definition'}</li>
                <li>{isAr ? 'تقليل الذقن المزدوج' : 'Double chin reduction'}</li>
                <li>{isAr ? 'تجديد سطح البشرة' : 'Skin resurfacing and rejuvenation'}</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                {isAr ? 'احجز استشارة' : 'Book Consultation'} <ArrowRight size={20} style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
              </Link>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
               <img src="/facelift.png" alt="Face Lift Results" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{isAr ? 'الوخز بالإبر الراديوية' : 'Microneedling RF'}</h3>
            <p style={{ opacity: 0.8 }}>{isAr ? 'يجمع بين طاقة الترددات الراديوية والوخز بالإبر الدقيقة لتحسين ملمس البشرة بشكل جذري، وشد المسام، وتقليل الخطوط الدقيقة.' : 'Combines radiofrequency energy with microneedling to dramatically improve skin texture, tighten pores, and reduce fine lines.'}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{isAr ? 'شد الوجه السائل' : 'Liquid Facelift'}</h3>
            <p style={{ opacity: 0.8 }}>{isAr ? 'وضع استراتيجي لحشوات الجلد (الفيلر) ومرخيات العضلات لاستعادة الحجم، وتنعيم التجاعيد، ورفع الجلد المترهل بلطف.' : 'Strategic placement of dermal fillers and relaxers to restore volume, smooth wrinkles, and gently lift sagging skin.'}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{isAr ? 'إكسوسومات و DNA السلمون' : 'Exosomes & Salmon DNA'}</h3>
            <p style={{ opacity: 0.8 }}>{isAr ? 'علاجات تجديدية متطورة تسرع الشفاء، وتعزز الكولاجين، وتعكس علامات الشيخوخة على المستوى الخلوي.' : 'Cutting-edge regenerative treatments that accelerate healing, boost collagen, and reverse signs of aging at a cellular level.'}</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
