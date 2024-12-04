import React from 'react';
import ReactDOM from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './index.css';
import './styles/global.css';


const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log(`Backend URL: ${backendUrl}`);

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <header className="hero-section">
                <div className="content">
                    <h1>{t('hero.welcome')}</h1>
                    <button className="cta-button">{t('hero.cta')}</button>
                </div>
                <LanguageSwitcher />
            </header>
            
            <section className="banners">
                <img src="/images/banner1.jpg" alt="Persian Art" />
                <img src="/images/banner2.jpg" alt="Persian Calligraphy" />
            </section>

            <main>
                <section className="program-intro">
                    <h2>{t('programs.title')}</h2>
                    <p>{t('programs.description')}</p>
                </section>

                <section className="testimonials">
                    <h2>{t('testimonials.heading')}</h2>
                    <p>{t('testimonials.student1')}</p>
                    <p>{t('testimonials.student2')}</p>
                </section>

                <section className="blog-highlights">
                    <h2>{t('blog.heading')}</h2>
                    <ul>
                        <li>{t('blog.post1')}</li>
                        <li>{t('blog.post2')}</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
