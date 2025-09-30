"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ColorCard from "../components/colorCard/ColorCard";
import ServiceCard from "../components/serviceCard/ServiceCard";
import styles from "./page.module.css";

export default function Home() {
  const [featuredColors, setFeaturedColors] = useState([]);
  const [loading, setLoading] = useState(true);

  const popularServices = [
    {
      id: 1,
      title: "Mechas Californianas",
      description:
        "Técnica natural que cria reflexos dourados e iluminados gradualmente",
      buttonText: "Ver Técnica",
      image:
        "https://i.pinimg.com/originals/c3/c3/1d/c3c31d668bd8e6ae9f4a6328589a55f2.jpg",
    },
    {
      id: 2,
      title: "Ombré Hair",
      description: "Degradê suave da raiz escura para pontas mais claras",
      buttonText: "Explorar Ombré",
      image:
        "https://www.londrinatur.com.br/wp-content/uploads/2018/08/ombre-hair.jpg",
    },
    {
      id: 3,
      title: "Luzes Tradicionais",
      description: "Mechas clássicas com touca para um contraste marcante",
      buttonText: "Ver Luzes",
      image:
        "https://i.pinimg.com/564x/a4/01/48/a40148fdce72a7cce85963f8081bdd91.jpg",
    },
  ];

  useEffect(() => {
    const mockColors = [
      {
        id: 1,
        name: "Loiro Platinado",
        image:
          "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
        category: "Loiros",
        favorites: false,
      },
      {
        id: 2,
        name: "Castanho Chocolate",
        image:
          "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
        category: "Castanhos",
        favorites: false,
      },
      {
        id: 3,
        name: "Ruivo Intenso",
        image: "image/cabeloruivo.jpeg",
        category: "Ruivos",
        favorites: false,
      },
    ];

    setFeaturedColors(mockColors);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen">
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Descubra o Tom Perfeito para Seu Cabelo
          </h1>
          <p className={styles.heroSubtitle}>
            Explore nossa coleção exclusiva de tonalidades de tinta para cabelo.
            Encontre a cor ideal que combina com seu estilo e personalidade.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/listagem" className={styles.btnPrimary}>
              Ver Todas as Cores
            </Link>
            <Link href="/sobre" className={styles.btnOutline}>
              Sobre o Projeto
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Cores em Destaque</h2>
          <p className={styles.sectionDescription}>
            Confira algumas das cores mais populares e descubra qual combina
            melhor com você.
          </p>

          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>Carregando cores...</p>
            </div>
          ) : (
            <div className={styles.colorsGrid}>
              {featuredColors.map((color) => (
                <ColorCard key={color.id} color={color} />
              ))}
            </div>
          )}

          <div className={styles.viewAllContainer}>
            <Link href="/listagem" className={styles.btnPrimary}>
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.popularServicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Técnicas Mais Usadas</h2>
          <p className={styles.sectionDescription}>
            Conheça os métodos de coloração mais populares para transformar seu
            visual
          </p>

          <div className={styles.servicesGrid}>
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>1</span>
              </div>
              <h3 className={styles.stepTitle}>Explore</h3>
              <p className={styles.stepDescription}>
                Navegue pelo nosso catálogo de cores e descubra as tonalidades
                disponíveis.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>2</span>
              </div>
              <h3 className={styles.stepTitle}>Escolha</h3>
              <p className={styles.stepDescription}>
                Clique em uma cor para ver detalhes, imagens de referência e
                dicas de cuidados.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>3</span>
              </div>
              <h3 className={styles.stepTitle}>Favorite</h3>
              <p className={styles.stepDescription}>
                Salve suas cores preferidas para consultar depois e criar sua
                paleta pessoal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
