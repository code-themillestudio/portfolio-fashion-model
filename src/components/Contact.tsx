import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RiBuilding4Line, 
  RiShieldFlashLine, 
  RiMapPinLine, 
  RiSendPlaneLine, 
  RiCheckboxCircleLine, 
  RiAwardLine, 
  RiFileTextLine
} from '@remixicon/react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Business/Commercial Booking',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [inquiryResponse, setInquiryResponse] = useState('');

  const inquiryTypes = [
    'Business/Commercial Booking',
    'Film & Theatrical Placement',
    'High Fashion Editorial / Runway',
    'Press & Interview Requests',
    'Philanthropy & Speaking Events',
    'Fan Letter / Admiration',
  ];

  const representations = [
    {
      role: 'Talent Agency',
      name: 'Creative Artists Agency (CAA)',
      agent: 'Richard Lovett & Team',
      location: '2000 Avenue of the Stars, Los Angeles, CA',
      icon: RiBuilding4Line,
    },
    {
      role: 'Global Media Relations',
      name: 'Shelter PR',
      agent: 'Publicity Lead Team',
      location: 'Beverly Hills, California',
      icon: RiFileTextLine,
    },
    {
      role: 'Legal Representation',
      name: 'Gang, Tyre, Ramer & Brown',
      agent: 'Senior Entertainment Partners',
      location: 'Beverly Hills, California',
      icon: RiShieldFlashLine,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    // Simulate luxury agency processing
    setTimeout(() => {
      setFormStatus('success');
      generateSimulatedResponse(formData.inquiryType, formData.name);
    }, 1500);
  };

  const generateSimulatedResponse = (type: string, name: string) => {
    let responseText: string;
    switch (type) {
      case 'Business/Commercial Booking':
        responseText = `Thank you, ${name}. Your commercial inquiry has been routed directly to our CAA Brand Partnership division in Los Angeles. A representative will reach out to your organization within 48 business hours to discuss feasibility and campaign alignment.`;
        break;
      case 'Film & Theatrical Placement':
        responseText = `Dossier received, ${name}. Screenplays or script outlines will undergo review by Gal Gadot's Pilot Wave Productions development committee. Should the scope match our parameters, our literary department will arrange contact.`;
        break;
      case 'High Fashion Editorial / Runway':
        responseText = `Elegance invitation logged. Your modeling campaign offer or runway proposal is routed to our luxury fashion placement team in coordination with global agencies representing Gal Gadot.`;
        break;
      case 'Press & Interview Requests':
        responseText = `Press credentials verified, ${name}. Your media query has been shared with Shelter PR. Please note that ahead of major movie promotional schedules, spaces are extremely limited.`;
        break;
      case 'Philanthropy & Speaking Events':
        responseText = `Warm thanks for your outreach, ${name}. Gal values environmental and child rights causes immensely. Your non-profit proposal is being evaluated against her active philanthropic calendar.`;
        break;
      default:
        responseText = `Hello ${name}! Under our global policy, fan submissions are delivered as monthly bundles to Gal Gadot. She reads as many as she can, and deeply appreciates your heartwarming support!`;
    }
    setInquiryResponse(responseText);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: 'Business/Commercial Booking',
      message: '',
    });
    setFormStatus('idle');
    setInquiryResponse('');
  };

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#070707]' : 'border-neutral-200 bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
            SECURE REPRESENTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
            Professional <span className="font-serif italic font-light">&amp; Fan Inquiries</span>
          </h2>
          <div className={`h-px w-20 mx-auto md:mx-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Fictional representation contacts (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-45 block">
                GLOBAL BOOKING DESKS
              </span>
              <p className="text-sm font-light leading-relaxed opacity-75">
                For official screenplay submissions, runway casting, brand partnerships, or public appearances, please consult Gal Gadot&apos;s verified representations catalogued here:
              </p>
            </div>

            {/* Representations Tree */}
            <div className="space-y-6">
              {representations.map((rep, rIdx) => {
                const Icon = rep.icon;
                return (
                  <div 
                    key={rIdx} 
                    className={`p-5 border flex items-start gap-4 transition-colors duration-500 ${
                      darkMode ? 'bg-neutral-950/20 border-neutral-800' : 'bg-white border-neutral-100'
                    }`}
                  >
                    <div className={`p-2.5 border transition-colors duration-500 ${
                      darkMode ? 'border-neutral-800 text-neutral-300' : 'border-neutral-150 text-neutral-700'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-[0.2em] uppercase opacity-40 block">
                        {rep.role}
                      </span>
                      <h4 className="font-serif text-base font-medium tracking-wide">
                        {rep.name}
                      </h4>
                      <p className="text-xs font-light opacity-80">{rep.agent}</p>
                      <div className="flex items-center gap-1 font-mono text-[9px] opacity-50 pt-1">
                        <RiMapPinLine size={10} />
                        <span>{rep.location}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note alert */}
            <div className={`p-4 border font-mono text-[9px] tracking-wider leading-relaxed opacity-55 flex items-center gap-2 ${
              darkMode ? 'border-neutral-900 bg-neutral-950/45' : 'border-neutral-100 bg-neutral-50/45'
            }`}>
              <RiAwardLine size={14} className="shrink-0" />
              <span>Dossiers undergo executive scrutiny. Unsolicited physical scripts sent to publicist addresses cannot be returned due to legal coverage mandates.</span>
            </div>
          </div>

          {/* Right Side: High-Fashion Custom Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className={`border p-8 md:p-10 transition-colors duration-500 shadow-xl ${
              darkMode ? 'bg-[#0E0E0E] border-neutral-800 text-white' : 'bg-white border-neutral-150 text-black'
            }`}>
              
              <AnimatePresence mode="wait">
                {formStatus !== 'success' ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="text-left space-y-1 pb-4 border-b border-neutral-100 dark:border-neutral-900">
                      <span className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-40">COMMISSION DOCUMENT</span>
                      <h3 className="font-serif text-xl tracking-normal font-light">Direct Contact Commission</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-1 text-left">
                        <label className="font-mono text-[9px] tracking-widest uppercase opacity-55 block" htmlFor="input-name">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full py-2.5 px-3 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none focus:border-neutral-500 ${
                            darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-black'
                          }`}
                          id="input-name"
                          placeholder="e.g. Patty Jenkins"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1 text-left">
                        <label className="font-mono text-[9px] tracking-widest uppercase opacity-55 block" htmlFor="input-email">
                          Professional Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full py-2.5 px-3 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none focus:border-neutral-500 ${
                            darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-black'
                          }`}
                          id="input-email"
                          placeholder="e.g. director@studio.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Organization input */}
                      <div className="space-y-1 text-left">
                        <label className="font-mono text-[9px] tracking-widest uppercase opacity-55 block" htmlFor="input-org">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className={`w-full py-2.5 px-3 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none focus:border-neutral-500 ${
                            darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-black'
                          }`}
                          id="input-org"
                          placeholder="e.g. Warner Bros. Pictures"
                        />
                      </div>

                      {/* Inquiry Type selection dropdown */}
                      <div className="space-y-1 text-left">
                        <label className="font-mono text-[9px] tracking-widest uppercase opacity-55 block" htmlFor="input-inquiry-type">
                          Nature of Inquiry *
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className={`w-full py-2.5 px-3 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none focus:border-neutral-500 ${
                            darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-200' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                          }`}
                          id="input-inquiry-type"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type} className={darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-black'}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1 text-left">
                      <label className="font-mono text-[9px] tracking-widest uppercase opacity-55 block" htmlFor="input-msg">
                        Draft Message Core *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full py-2.5 px-3 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none focus:border-neutral-500 ${
                          darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-black'
                        }`}
                        id="input-msg"
                        placeholder="Draft your professional inquiry, campaign metrics, or friendly message here..."
                      />
                    </div>

                    {/* Submit and action buttons */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                        darkMode
                          ? 'bg-white text-black hover:bg-neutral-200'
                          : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                      id="submit-contact"
                    >
                      {formStatus === 'submitting' ? 'Processing Transmission...' : 'Transmit Inquiry'}
                      <RiSendPlaneLine size={12} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 py-8 text-center"
                  >
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                      >
                        <RiCheckboxCircleLine size={50} className="text-green-500" />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-green-500 block">
                        SECURE TRANSMISSION COMPLETE
                      </span>
                      <h3 className="font-serif text-2xl font-light">Inquiry Dispatched</h3>
                      <p className="text-xs font-light max-w-md mx-auto leading-relaxed opacity-75">
                        Your professional dossier has successfully passed agency security handshake protocols.
                      </p>
                    </div>

                    {/* Simulated Agency Rep Response */}
                    <div className={`p-5 border text-left font-sans text-xs max-w-lg mx-auto leading-relaxed shadow-inner ${
                      darkMode ? 'bg-neutral-900/40 border-neutral-800 text-neutral-200' : 'bg-neutral-50/80 border-neutral-150 text-neutral-800'
                    }`}>
                      <span className="font-mono text-[8px] tracking-[0.2em] uppercase opacity-50 block mb-2 text-sky-500">
                        AUTOMATED SECURE RESPONSE:
                      </span>
                      <p className="italic">{inquiryResponse}</p>
                    </div>

                    <button
                      onClick={handleReset}
                      className={`px-8 py-3 text-[10px] uppercase tracking-widest font-mono border hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer ${
                        darkMode ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                      }`}
                      id="btn-reset-form"
                    >
                      Send New Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
