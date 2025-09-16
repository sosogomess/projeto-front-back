'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Sobre.module.css';

export default function SobrePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageContainer}>
            <Image
              src="/image/IMG_8560.jpeg"
              alt="Sophia Gomes"
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.name}>Sophia Gomes</h1>
            <p className={styles.title}>Estudante de Desenvolvimento de Sistemas</p>
            <p className={styles.subtitle}>
              Criadora do projeto Hair Tone - Catálogo de Cores para Cabelo
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                Olá! Eu sou a <strong>Sophia Gomes</strong>, estudante de Desenvolvimento de Sistemas. 
                Este projeto representa muito mais do que 
                apenas código - é a materialização de todo o conhecimento que adquiri durante 
                minha jornada acadêmica.
              </p>
              <p>
                Como estudante, sempre busquei formas de aplicar os conceitos aprendidos em 
                projetos práticos e significativos. O Hair Tone nasceu dessa necessidade de 
                criar algo que fosse útil, bonito e tecnicamente desafiador.
              </p>
            </div>
            <div className={styles.skillsCard}>
              <h3>Tecnologias Utilizadas</h3>
              <div className={styles.techGrid}>
                <span className={styles.techItem}>Next.js</span>
                <span className={styles.techItem}>React</span>
                <span className={styles.techItem}>CSS Modules</span>
                <span className={styles.techItem}>JavaScript</span>
                <span className={styles.techItem}>HTML</span>
                <span className={styles.techItem}>Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className={styles.projectSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Sobre o Projeto</h2>
          <div className={styles.projectContent}>
            <div className={styles.projectDescription}>
              <h3>Hair Tone - Catálogo de Cores</h3>
              <p>
                O Hair Tone é uma aplicação web completa que desenvolvi para demonstrar 
                os conhecimentos adquiridos durante o curso de Desenvolvimento de Sistemas. 
                O projeto consiste em um catálogo interativo de cores para cabelo, onde 
                os usuários podem:
              </p>
              <ul className={styles.featuresList}>
                <li>Explorar diferentes tonalidades de cabelo</li>
                <li>Filtrar cores por categoria</li>
                <li>Buscar cores específicas</li>
                <li>Salvar suas cores favoritas</li>
                <li>Ver detalhes completos de cada cor</li>
                <li>Acessar dicas de cuidados e aplicação</li>
              </ul>
            </div>
            <div className={styles.purposeCard}>
              <h3>Propósito do Projeto</h3>
              <p>
                Este projeto foi desenvolvido como trabalho quase final do curso, 
                com o objetivo de demonstrar habilidades em:
              </p>
              <ul>
                <li>Desenvolvimento Front-end moderno</li>
                <li>Design responsivo e UX/UI</li>
                <li>Gerenciamento de estado</li>
                <li>Componentização</li>
                <li>Boas práticas de código</li>
                <li>Versionamento com Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className={styles.journeySection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Minha Jornada</h2>
          <div className={styles.journeyContent}>
            <div className={styles.journeyCard}>
              <div className={styles.journeyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>Formação</h3>
              <p>
                Estudante de Desenvolvimento de Sistemas, sempre em busca de 
                novos conhecimentos e desafios na área de tecnologia.
              </p>
            </div>
            <div className={styles.journeyCard}>
              <div className={styles.journeyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <h3>Inspiração</h3>
              <p>
                A ideia do Hair Tone surgiu da vontade de criar algo útil e 
                visualmente atrativo, combinando design e funcionalidade.
              </p>
            </div>
            <div className={styles.journeyCard}>
              <div className={styles.journeyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Objetivos</h3>
              <p>
                Demonstrar competências técnicas adquiridas e criar uma base 
                sólida para futuros projetos profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
