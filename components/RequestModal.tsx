"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'demo' | 'contact' | 'getStarted' | 'expert';
}

export default function RequestModal({ isOpen, onClose, formType }: RequestModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset errors when modal is closed or opened
  useEffect(() => {
    if (!isOpen) {
      // Clear errors when modal is closed
      setErrors({});
    }
  }, [isOpen]);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('modal.errors.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('modal.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('modal.errors.emailInvalid');
    }
    
    if (!formData.company.trim()) {
      newErrors.company = t('modal.errors.companyRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('modal.errors.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'demo':
        return t('modal.demo.title');
      case 'contact':
        return t('modal.contact.title');
      case 'expert':
        return t('modal.expert.title');
      case 'getStarted':
        return t('modal.getStarted.title');
      default:
        return t('modal.default.title');
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'demo':
        return t('modal.demo.description');
      case 'contact':
        return t('modal.contact.description');
      case 'expert':
        return t('modal.expert.description');
      case 'getStarted':
        return t('modal.getStarted.description');
      default:
        return t('modal.default.description');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-700/50 overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-700 transition-colors"
          aria-label={t('modal.close')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{getFormTitle()}</h2>
                <p className="text-slate-300">{getFormDescription()}</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      {t('modal.form.name')} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                      placeholder={t('modal.form.namePlaceholder')}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      {t('modal.form.email')} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                      placeholder={t('modal.form.emailPlaceholder')}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                      {t('modal.form.company')} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-slate-800 border ${errors.company ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                      placeholder={t('modal.form.companyPlaceholder')}
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      {t('modal.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder={t('modal.form.phonePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                      {t('modal.form.message')} <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none`}
                      placeholder={formType === 'expert' ? t('modal.form.expert.messagePlaceholder') : t('modal.form.messagePlaceholder')}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('modal.form.submitting')}
                        </>
                      ) : (
                        formType === 'expert' ? t('modal.form.expert.submit') : t('modal.form.submit')
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{t('modal.success.title')}</h2>
              <p className="text-slate-300 mb-6">{t('modal.success.message')}</p>
              <button
                onClick={onClose}
                className="py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
              >
                {t('modal.success.close')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
