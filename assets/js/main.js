(function () {
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const storage = {
    theme: 'portfolio-theme',
    lang: 'portfolio-lang',
    font: 'portfolio-font'
  };

  const translations = {
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'hero.role': 'Angular / Frontend / UI Developer',
      'hero.summary': 'Angular Developer with 4+ years of professional experience in building secure and scalable enterprise web applications with Angular (v11-v17), TypeScript, SCSS, and Bootstrap.',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaContact': 'Contact Me',
      'hero.quickProfile': 'Quick Profile',
      'profile.locationLabel': 'Location:',
      'profile.phoneLabel': 'Phone:',
      'profile.emailLabel': 'Email:',
      'badges.title': 'Technology Stack Badges',
      'about.title': 'Professional Summary',
      'about.p1': 'Results-driven Angular Developer with 4 years of experience building enterprise-level web applications. Expert in Angular (v11-17), TypeScript, and modern frontend frameworks with proven ability to deliver scalable, secure, and user-centric solutions.',
      'about.p2': 'Strong background in Agile methodologies, REST API integration, cross-functional collaboration, and production-ready releases with VAPT-compliant secure frontend implementations.',
      'about.strengthTitle': 'Core Strengths',
      'about.s1': 'Angular architecture and reusable components',
      'about.s2': 'Reactive forms and complex validations',
      'about.s3': 'JWT authentication and role-based access',
      'about.s4': 'Enterprise UI optimization and cross-browser support',
      'skills.title': 'Technical Skills',
      'experience.title': 'Professional Experience',
      'projects.title': 'Key Projects',
      'education.title': 'Education & Certifications',
      'access.title': 'Accessibility Tools',
      'access.desc': 'Use these controls for better readability and accessibility support.',
      'access.inc': 'Increase Text',
      'access.dec': 'Decrease Text',
      'access.reset': 'Reset Text',
      'contact.title': 'Let’s Build Scalable Frontend Solutions',
      'contact.desc': 'Open to Angular / Frontend / UI opportunities for enterprise product teams.',
      'footer.note': 'Built with HTML, SCSS, JavaScript, Bootstrap, and Angular ecosystem practices.'
    },
    hi: {
      'nav.about': 'परिचय',
      'nav.skills': 'कौशल',
      'nav.experience': 'अनुभव',
      'nav.projects': 'प्रोजेक्ट्स',
      'nav.education': 'शिक्षा',
      'nav.contact': 'संपर्क',
      'hero.role': 'एंगुलर / फ्रंटएंड / UI डेवलपर',
      'hero.summary': '4+ वर्षों का अनुभव रखने वाले एंगुलर डेवलपर, जिन्होंने Angular (v11-v17), TypeScript, SCSS और Bootstrap के साथ सुरक्षित और स्केलेबल एंटरप्राइज वेब एप्लिकेशन बनाए हैं।',
      'hero.ctaProjects': 'प्रोजेक्ट्स देखें',
      'hero.ctaContact': 'संपर्क करें',
      'hero.quickProfile': 'त्वरित प्रोफ़ाइल',
      'profile.locationLabel': 'स्थान:',
      'profile.phoneLabel': 'फ़ोन:',
      'profile.emailLabel': 'ईमेल:',
      'badges.title': 'टेक्नोलॉजी बैज',
      'about.title': 'प्रोफेशनल सारांश',
      'about.p1': '4 वर्षों के अनुभव के साथ परिणाम-उन्मुख एंगुलर डेवलपर, जिन्होंने एंटरप्राइज स्तर के वेब एप्लिकेशन बनाए हैं। Angular (v11-17), TypeScript और आधुनिक फ्रंटएंड फ्रेमवर्क में विशेषज्ञता।',
      'about.p2': 'Agile पद्धतियों, REST API इंटीग्रेशन, क्रॉस-फंक्शनल सहयोग और VAPT-अनुरूप सुरक्षित रिलीज़ का मजबूत अनुभव।',
      'about.strengthTitle': 'मुख्य क्षमताएँ',
      'about.s1': 'Angular आर्किटेक्चर और री-यूज़ेबल कंपोनेंट्स',
      'about.s2': 'Reactive forms और जटिल validation',
      'about.s3': 'JWT authentication और role-based access',
      'about.s4': 'Enterprise UI optimization और cross-browser support',
      'skills.title': 'तकनीकी कौशल',
      'experience.title': 'व्यावसायिक अनुभव',
      'projects.title': 'मुख्य प्रोजेक्ट्स',
      'education.title': 'शिक्षा और प्रमाणपत्र',
      'access.title': 'एक्सेसिबिलिटी टूल्स',
      'access.desc': 'बेहतर पठनीयता और पहुंच के लिए इन विकल्पों का उपयोग करें।',
      'access.inc': 'टेक्स्ट बढ़ाएँ',
      'access.dec': 'टेक्स्ट घटाएँ',
      'access.reset': 'रीसेट टेक्स्ट',
      'contact.title': 'आइए स्केलेबल फ्रंटएंड समाधान बनाएं',
      'contact.desc': 'एंटरप्राइज टीमों के लिए Angular / Frontend / UI अवसरों के लिए उपलब्ध।',
      'footer.note': 'HTML, SCSS, JavaScript, Bootstrap और Angular best practices से निर्मित।'
    }
  };

  const applyLang = (lang) => {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = translations[lang][key];
      if (val) el.textContent = val;
    });
    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.textContent = lang === 'en' ? 'हिंदी' : 'English';
    localStorage.setItem(storage.lang, lang);
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(storage.theme, theme);
  };

  const applyFontSize = (size) => {
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem(storage.font, String(size));
  };

  const lang = localStorage.getItem(storage.lang) || 'en';
  const theme = localStorage.getItem(storage.theme) || 'dark';
  const font = Number(localStorage.getItem(storage.font) || '16');
  applyLang(lang);
  applyTheme(theme);
  applyFontSize(Math.min(20, Math.max(14, font)));

  document.getElementById('langToggle')?.addEventListener('click', () => {
    const next = (localStorage.getItem(storage.lang) || 'en') === 'en' ? 'hi' : 'en';
    applyLang(next);
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next = (localStorage.getItem(storage.theme) || 'dark') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  document.getElementById('fontIncrease')?.addEventListener('click', () => {
    const current = Number(localStorage.getItem(storage.font) || '16');
    applyFontSize(Math.min(20, current + 1));
  });

  document.getElementById('fontDecrease')?.addEventListener('click', () => {
    const current = Number(localStorage.getItem(storage.font) || '16');
    applyFontSize(Math.max(14, current - 1));
  });

  document.getElementById('fontReset')?.addEventListener('click', () => applyFontSize(16));

  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navCollapse = document.getElementById('navbarNav');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navCollapse = document.getElementById('navbarNav');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });
})();
