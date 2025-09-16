'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import ColorCard from "../components/colorCard/ColorCard";
import ServiceCard from "../components/serviceCard/ServiceCard";
import styles from './page.module.css';

export default function Home() {
  const [featuredColors, setFeaturedColors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dados dos serviços populares
  const popularServices = [
    {
      id: 1,
      title: "Produtos & Acessórios",
      description: "Descubra os melhores produtos para cuidar do seu cabelo em casa",
      buttonText: "Explorar Produtos",
      image: "/placeholders/hair-dryer.jpg"
    },
    {
      id: 2,
      title: "Tratamentos Especiais",
      description: "Tratamentos profissionais para cabelos danificados",
      buttonText: "Ver Tratamentos",
      image: "/placeholders/hair-treatment.jpg"
    },
    {
      id: 3,
      title: "Coloração Profissional",
      description: "Técnicas avançadas de coloração para resultados perfeitos",
      buttonText: "Agendar Consulta",
      image: "/placeholders/hair-color.jpg"
    },
    {
      id: 4,
      title: "Extensões Premium",
      description: "Extensões de cabelo natural para volume e comprimento",
      buttonText: "Ver Extensões",
      image: "/placeholders/hair-extensions.jpg"
    }
  ];

  useEffect(() => {
    // Aqui você conectará com seu back-end
    // Por enquanto, vou usar dados mockados baseados no esquema do banco
    const mockColors = [
      {
        id: 1,
        name: "Loiro Platinado",
        image: "/placeholder-blonde.jpg",
        category: "Loiros",
        favorites: false
      },
      {
        id: 2,
        name: "Castanho Chocolate",
        image: "/placeholder-brown.jpg", 
        category: "Castanhos",
        favorites: false
      },
      {
        id: 3,
        name: "Ruivo Intenso",
        image: "/placeholder-red.jpg",
        category: "Ruivos", 
        favorites: false
      }
    ];
    
    setFeaturedColors(mockColors);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Cores em Destaque */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Cores em Destaque
          </h2>
          <p className={styles.sectionDescription}>
            Confira algumas das cores mais populares e descubra qual combina melhor com você.
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

      {/* Serviços Populares */}
      <section className={styles.popularServicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Nossos Serviços Populares
          </h2>
          <p className={styles.sectionDescription}>
            Descubra os serviços mais procurados para cuidar e transformar seu cabelo
          </p>

          <div className={styles.servicesGrid}>
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className={styles.howItWorksSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Como Funciona
          </h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>1</span>
              </div>
              <h3 className={styles.stepTitle}>Explore</h3>
              <p className={styles.stepDescription}>
                Navegue pelo nosso catálogo de cores e descubra as tonalidades disponíveis.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>2</span>
              </div>
              <h3 className={styles.stepTitle}>Escolha</h3>
              <p className={styles.stepDescription}>
                Clique em uma cor para ver detalhes, imagens de referência e dicas de cuidados.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberText}>3</span>
              </div>
              <h3 className={styles.stepTitle}>Favorite</h3>
              <p className={styles.stepDescription}>
                Salve suas cores preferidas para consultar depois e criar sua paleta pessoal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
