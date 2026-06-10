import { AnimatedSection } from '../components/AnimatedSection';
import { UserPlus, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BodyContouring = () => {
  const { i18n } = useTranslation();
  const isAr = (i18n.language || '').startsWith('ar');

  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>
            {isAr ? 'نحت الجسم' : 'Body Contouring'}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            {isAr ? 'إذابة الدهون المستعصية بشكل غير جراحي وتحقيق حلمك بجسم متناسق.' : 'Dissolve stubborn fat non-invasively and achieve your dream silhouette.'}
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-16" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
          <img src="/bodycontouring.png" alt="Body Contouring and Wellness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection className="glass-panel" style={{ padding: '3rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <UserPlus size={40} color="var(--color-primary)" />
              <h2 style={{ margin: 0 }}>
                {isAr ? 'علاج MFCU' : 'MFCU Treatment'}
              </h2>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              {isAr ? 'تقنية MFCU هي علاج غير جراحي يمكنه إذابة الدهون المستعصية من أي جزء من الجسم. في معظم الحالات، تكفي جلسة واحدة لرؤية نتائج ملحوظة.' : 'MFCU is a non-invasive treatment that can dissolve stubborn fat from any part of the body. In most cases, one session is enough to see remarkable results.'}
            </p>
            <ul style={{ paddingLeft: isAr ? 0 : '1.5rem', paddingRight: isAr ? '1.5rem' : 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>{isAr ? 'فقدان ما يصل إلى 6 سم من جلسة واحدة' : 'Lose up to 6cm from one session'}</li>
              <li>{isAr ? 'مريح وخالي من الألم' : 'Convenient and pain-free'}</li>
              <li>{isAr ? 'يشد الجلد في نفس الوقت' : 'Simultaneously tones the skin'}</li>
              <li>{isAr ? 'لا حاجة لفترة نقاهة' : 'No downtime required'}</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '3rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <Zap size={40} color="var(--color-primary)" />
              <h2 style={{ margin: 0 }}>
                {isAr ? 'نحت العضلات EMSculpting' : 'EMSculpting'}
              </h2>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              {isAr ? 'علاج كهرومغناطيسي عالي الكثافة يقوي العضلات ويحرق الدهون. يعادل آلاف تمارين البطن أو القرفصاء في جلسة واحدة.' : 'High-intensity electromagnetic therapy that tones muscles while burning fat. Equivalent to thousands of crunches or squats in a single session.'}
            </p>
            <ul style={{ paddingLeft: isAr ? 0 : '1.5rem', paddingRight: isAr ? '1.5rem' : 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>{isAr ? 'يبني كتلة العضلات بشكل طبيعي' : 'Builds muscle mass naturally'}</li>
              <li>{isAr ? 'يقلل من رواسب الدهون الموضعية' : 'Reduces localized fat deposits'}</li>
              <li>{isAr ? 'يعزز تحديد الجسم بالكامل' : 'Enhances overall body definition'}</li>
              <li>{isAr ? 'جلسات سريعة مدتها 30 دقيقة' : 'Quick, 30-minute sessions'}</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
