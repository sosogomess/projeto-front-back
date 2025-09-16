'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>Hair Tone</h3>
            <p>
              Projeto dedicado a ajudar você a descobrir o tom perfeito para seu cabelo. 
              Explore nossa coleção de cores e transforme seu visual com segurança e estilo.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/listagem">Cores</a></li>
              <li><a href="/favoritos">Favoritos</a></li>
              <li><a href="/sobre">Sobre Mim</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Categorias</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/listagem?categoria=loiros">Loiros</a></li>
              <li><a href="/listagem?categoria=castanhos">Castanhos</a></li>
              <li><a href="/listagem?categoria=ruivos">Ruivos</a></li>
              <li><a href="/listagem?categoria=fantasias">Cores Fantasia</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Desenvolvido por</h3>
            <p>Sophia Gomes</p>
            <p>Turma: 2TDS2</p>
            <p>Desenvolvimento de Sistemas</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Hair Tone. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}