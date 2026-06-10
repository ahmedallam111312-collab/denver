import { AnimatedSection } from '../components/AnimatedSection';
import { Activity, Wind, Zap, Waves, Target, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Cellulite = () => {
  const { i18n } = useTranslation();
  const isAr = (i18n.language || '').startsWith('ar');

  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-8">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>
            {isAr ? 'علاج السيلوليت' : 'Cellulite Reduction'}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            {isAr ? 'يقلل السيلوليت - ينعم البشرة - يعزز ملامح الجسم' : 'Reduces cellulite - Smoothes out skin - Enhances body contour'}
          </p>
        </AnimatedSection>

        <AnimatedSection className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>
            {isAr ? 'ما هو أفضل علاج غير جراحي للسيلوليت؟' : 'What is the best non-surgical cellulite treatment?'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {isAr ? 'السؤال الصحيح الذي يجب أن تطرحه هو: ' : 'The right question you should ask is: '}
            <strong>{isAr ? 'ما هو أفضل علاج للسيلوليت بالنسبة لي؟' : 'What is the best non-surgical cellulite treatment for me?'}</strong>
          </p>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
            {isAr ? 'لأن السيلوليت ليس هو نفسه للجميع. يمكن أن ينتج السيلوليت عن عوامل مختلفة، ولكل حالة مستوى شدة مختلف. لهذا السبب يجب أن يكون بروتوكول العلاج مخصصًا. ما يعمل بشكل مثالي لشخص ما قد لا يعمل مع شخص آخر.' : 'Because cellulite is not the same for everyone. Cellulite can be caused by different factors, and each case has a different severity level. That’s why our treatment protocol must be personalized. What works perfectly for one person may not work for another.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>{isAr ? 'تراكم الدهون تحت الجلد' : 'Fat accumulation under the skin'}</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>{isAr ? 'أربطة النسيج الضام الضعيفة' : 'Weak connective tissue bands'}</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>{isAr ? 'ضعف الدورة الدموية' : 'Poor circulation'}</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>{isAr ? 'ترهل الجلد أو فقدان الكولاجين' : 'Skin laxity or collagen loss'}</span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mb-16" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
          <img src="/cellulite.png" alt="Cellulite Treatment Device" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </AnimatedSection>

        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>{isAr ? 'علاجاتنا المتقدمة' : 'Our Advanced Treatments'}</h2>

        <div className="grid grid-cols-1 gap-8">
          <AnimatedSection className="glass-panel" style={{ padding: '2.5rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck size={40} color="var(--color-primary)" />
              <h3 style={{ margin: 0 }}>MFCU (3D)</h3>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--color-primary)', marginBottom: '1rem' }}>{isAr ? 'تقنية معتمدة من إدارة الغذاء والدواء' : 'FDA-approved technology'}</p>
            <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
              {isAr ? 'يقلل من الدهون والسيلوليت ويشد الجلد. تساعد طاقة الترددات الراديوية على تدمير الخلايا الدهنية التي يتم التخلص منها بعد ذلك من الجسم بشكل طبيعي عبر الجهاز اللمفاوي. الحرارة المتولدة تشجع الجسم على الدخول في وضع الشفاء، مما يسمح بإنتاج الكولاجين والإيلاستين.' : 'Reduces fat and cellulite and tightens the skin. RF energy helps destroy fat cells which are then eliminated from the body naturally through the lymphatic system. The heat created encourages the body to go into a healing mode, allowing for collagen and elastin production.'}
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              {isAr ? '*يلاحظ معظم المرضى نتائج مهمة من جلسة واحدة. الدهون العنيدة قد تحتاج من 2 إلى 3 جلسات تفصل بينها 4 إلى 6 أسابيع.' : '*Most patients see significant results with one treatment. Stubborn fat may need 2 to 3 sessions per area spaced about 4 to 6 weeks.'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Waves size={24} style={{display:'inline', marginRight:'10px', marginInlineEnd:'10px'}}/>{isAr ? 'LPG والتصريف اللمفاوي' : 'LPG & Lymphatic Drainage'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'يحفز عملية حرق الدهون. يصبح الجلد أكثر مرونة ونعومة ومشدوداً.' : 'Stimulates the process of burning fat. The skin becomes more elastic, smooth, and tightened.'}
              </p>
              <ul style={{ paddingLeft: isAr ? 0 : '1.5rem', paddingRight: isAr ? '1.5rem' : 0, opacity: 0.8 }}>
                <li>{isAr ? 'تقليل الوذمة والسيلوليت' : 'Edema & Cellulite Reduction'}</li>
                <li>{isAr ? 'إزالة السموم' : 'Detoxification'}</li>
                <li>{isAr ? 'دعم قبل وبعد الجراحة' : 'Pre and Post-Surgery Support'}</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Wind size={24} style={{display:'inline', marginRight:'10px', marginInlineEnd:'10px'}}/>{isAr ? 'بدلة العلاج بالضغط' : 'Presso Therapy Suit'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'بدلة ضغط لمفاوي مع 24 خلية ضغط هواء تخلق تدرجاً في الضغط يشجع السوائل الخلالية على التحرك عبر الجهاز اللمفاوي.' : 'A lymphatic compression suit with 24 air pressure cells creates a pressure gradient that encourages interstitial fluids to move through the lymph system.'}
              </p>
              <ul style={{ paddingLeft: isAr ? 0 : '1.5rem', paddingRight: isAr ? '1.5rem' : 0, opacity: 0.8 }}>
                <li>{isAr ? 'تحفيز الجهاز اللمفاوي' : 'Lymphatic System Stimulation'}</li>
                <li>{isAr ? 'الاسترخاء وتخفيف التوتر' : 'Relaxation and Stress Relief'}</li>
                <li>{isAr ? 'التعافي الرياضي' : 'Athletic Performance Recovery'}</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Zap size={24} style={{display:'inline', marginRight:'10px', marginInlineEnd:'10px'}}/>{isAr ? 'إعادة التشكيل الكهرومغناطيسي' : 'Electro-Magnetic-Reshaping'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'علاج كهرومغناطيسي ثوري عالي الكثافة لتقوية العضلات وتقليل الدهون وزيادة الكتلة العضلية. غير جراحي، غير مؤلم، ولا يتطلب فترة نقاهة.' : 'Revolutionary high-intensity electromagnetic therapy to tone muscles, reduce fat, and increase muscle mass. Non-invasive, painless, no downtime.'}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Activity size={24} style={{display:'inline', marginRight:'10px', marginInlineEnd:'10px'}}/>{isAr ? 'الترددات الراديوية مع الفراغ' : 'Vacuum RF'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'يحفز الدورة الدموية ويشجع على إزالة السموم. ينشط الفراغ الدورة الدموية ويكسر رواسب الدهون التي تسبب تجاعيد الجلد.' : 'Stimulates circulation and encourages detoxification. Vacuum activates circulation and breaks down fat deposits that cause skin dimples.'}
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{isAr ? 'العلاج بالموجات التصادمية (AWT)' : 'Shockwave Therapy (AWT)'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'يحفز التأثيرات البيولوجية، وينشط عمليات الأيض، ويجدد النسيج الضام. يسرع إنتاج الكولاجين لشد البشرة.' : 'Triggers biological effects, stimulates metabolic processes, and regenerates connective tissue. Accelerates collagen production for skin firmness.'}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{isAr ? 'جهاز مساج G5 Cellutec' : 'G5 Cellutec'}</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                {isAr ? 'معتمد من FDA لتقليل السيلوليت. الاهتزازات العميقة والمنتظمة تساعد في تكسير الرواسب الدهنية وتخفيف التوتر العضلي.' : 'FDA-cleared for cellulite reduction. Deep, rhythmic vibrations aid in breaking down fat deposits and alleviating muscle tension.'}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
