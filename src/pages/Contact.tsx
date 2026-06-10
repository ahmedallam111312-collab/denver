import { AnimatedSection } from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { i18n } = useTranslation();
  const isAr = (i18n.language || '').startsWith('ar');

  const [formData, setFormData] = useState({ fullName: '', email: '', interest: 'Cellulite Reduction' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', interest: 'Cellulite Reduction' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(isAr ? 'خطأ في الشبكة. هل يعمل الخادم؟' : 'Network error. Is the backend running?');
    }
  };

  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>{isAr ? 'اتصل بنا' : 'Contact Us'}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            {isAr ? 'مستعد لتحولك؟ تواصل معنا لتحديد موعد استشارتك.' : 'Ready for your transformation? Get in touch to schedule your consultation.'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ margin: '0 auto' }}>
          <AnimatedSection className="lg:col-span-1" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '400px' }}>
            <img src="/clinic_room.png" alt="Clinic Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '3rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>{isAr ? 'تفاصيل العيادة' : 'Clinic Details'}</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <MapPin color="var(--color-primary)" style={{ marginTop: '0.25rem' }} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>{isAr ? 'العنوان' : 'Address'}</h4>
                <p style={{ opacity: 0.8 }}>{isAr ? '٦ بهجت علي، أبو الفدا، الزمالك، القاهرة' : '6 Bahgat Ali, Abu Al Feda, Zamalek, Cairo, Egypt'}</p>
                <p style={{ opacity: 0.8, marginTop: '0.5rem', fontSize: '0.9rem' }}>{isAr ? 'الفرع الثاني: ٦ ابن النبيه، الزمالك' : 'Also serving at: 6 Ibn Elnabeh, Zamalek'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Phone color="var(--color-primary)" style={{ marginTop: '0.25rem' }} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>{isAr ? 'الهاتف' : 'Phone'}</h4>
                <p style={{ opacity: 0.8 }}>+2 01099355211</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Mail color="var(--color-primary)" style={{ marginTop: '0.25rem' }} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>{isAr ? 'البريد الإلكتروني' : 'Email'}</h4>
                <p style={{ opacity: 0.8 }}>dnvrclinic@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock color="var(--color-primary)" style={{ marginTop: '0.25rem' }} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>{isAr ? 'ساعات العمل' : 'Hours'}</h4>
                <p style={{ opacity: 0.8 }}>{isAr ? 'بميعاد مسبق فقط.' : 'By appointment only.'}<br/>{isAr ? 'يرجى الاتصال أو المراسلة للحجز.' : 'Please call or email to schedule.'}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '3rem' }}>
             <h2 style={{ marginBottom: '2rem' }}>{isAr ? 'أرسل رسالة' : 'Send a Message'}</h2>
             
             {status === 'success' ? (
               <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                 <CheckCircle size={48} color="var(--color-primary)" />
                 <h3 style={{ color: 'var(--color-primary)' }}>{isAr ? 'تم إرسال الرسالة!' : 'Message Sent!'}</h3>
                 <p style={{ opacity: 0.8 }}>{isAr ? 'شكرا لتواصلك معنا. سنرد عليك في أقرب وقت.' : 'Thank you for reaching out. We will get back to you shortly.'}</p>
                 <button className="btn btn-secondary" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>{isAr ? 'إرسال رسالة أخرى' : 'Send Another'}</button>
               </div>
             ) : (
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                 <div>
                   <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>{isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                   <input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
                 </div>
                 <div>
                   <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                   <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
                 </div>
                 <div>
                   <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>{isAr ? 'الاهتمام الأساسي' : 'Interested In'}</label>
                   <select value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
                     <option value="Cellulite Reduction">{isAr ? 'علاج السيلوليت' : 'Cellulite Reduction'}</option>
                     <option value="Body Contouring">{isAr ? 'نحت الجسم' : 'Body Contouring'}</option>
                     <option value="Face Lift">{isAr ? 'شد الوجه بدون جراحة' : 'Face Lift'}</option>
                     <option value="Other">{isAr ? 'أخرى' : 'Other'}</option>
                   </select>
                 </div>
                 
                 {status === 'error' && (
                   <p style={{ color: '#ef4444', fontSize: '0.9rem', margin: 0 }}>{errorMessage}</p>
                 )}
                 
                 <button disabled={status === 'submitting'} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', opacity: status === 'submitting' ? 0.7 : 1 }}>
                   {status === 'submitting' ? (isAr ? 'جاري الإرسال...' : 'Sending...') : (isAr ? 'إرسال الطلب' : 'Submit Request')}
                 </button>
               </form>
             )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
