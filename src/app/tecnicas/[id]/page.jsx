"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function TecnicaDetalhesPage() {
  const { id } = useParams();
  const router = useRouter();
  const [tecnica, setTecnica] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const mockTecnicas = [
      {
        id: 1,
        title: "Mechas Californianas",
        description:
          "Técnica natural que cria reflexos dourados e iluminados gradualmente",
        detailedDescription:
          "As mechas californianas são uma técnica de coloração que simula o efeito natural do sol no cabelo. Criada para reproduzir o visual de quem passa muito tempo na praia, esta técnica proporciona um degradê suave e natural, com tons mais claros nas pontas e mais escuros na raiz.",
        image:
          "https://i.pinimg.com/originals/c3/c3/1d/c3c31d668bd8e6ae9f4a6328589a55f2.jpg",
        priceRange: "R$ 200 - R$ 400",
      },
      {
        id: 2,
        title: "Ombré Hair",
        description: "Degradê suave da raiz escura para pontas mais claras",
        detailedDescription:
          "O ombré hair é uma técnica francesa que cria um degradê marcante entre duas cores, geralmente da raiz escura para pontas claras. Este estilo oferece um contraste elegante e moderno, perfeito para quem quer uma mudança mais dramática sem comprometer todo o cabelo.",
        image:
          "https://www.londrinatur.com.br/wp-content/uploads/2018/08/ombre-hair.jpg",
        priceRange: "R$ 300 - R$ 600",
      },
      {
        id: 3,
        title: "Luzes Tradicionais",
        description: "Mechas clássicas com touca para um contraste marcante",
        detailedDescription:
          "As luzes tradicionais são a técnica clássica de coloração que utiliza touca e agulha para criar mechas uniformes e bem definidas. Esta técnica atemporal oferece um contraste marcante e regular, ideal para quem busca um visual mais estruturado e clássico.",
        image:
          "https://i.pinimg.com/564x/a4/01/48/a40148fdce72a7cce85963f8081bdd91.jpg",
        priceRange: "R$ 150 - R$ 300",
      },
    ];

    const foundTecnica = mockTecnicas.find((t) => t.id === parseInt(id));

    if (foundTecnica) {
      setTecnica(foundTecnica);

      const favorites = JSON.parse(
        localStorage.getItem("favoriteTechniques") || "[]"
      );
      setIsFavorite(favorites.some((fav) => fav.id === foundTecnica.id));
    }

    setLoading(false);
  }, [id]);

  const toggleFavorite = () => {
    if (!tecnica) return;

    console.log("Toggle favorito chamado para técnica:", tecnica.title);

    const favorites = JSON.parse(
      localStorage.getItem("favoriteTechniques") || "[]"
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== tecnica.id);
      console.log("Removendo técnica dos favoritos");
    } else {
      const techniqueToSave = {
        id: tecnica.id,
        title: tecnica.title,
        image: tecnica.image,
        priceRange: tecnica.priceRange,
      };
      newFavorites = [...favorites, techniqueToSave];
      console.log("Adicionando técnica aos favoritos:", techniqueToSave);
    }

    localStorage.setItem("favoriteTechniques", JSON.stringify(newFavorites));
    console.log("Favoritos de técnicas salvos:", newFavorites);
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Carregando detalhes da técnica...</p>
      </div>
    );
  }

  if (!tecnica) {
    return (
      <div className={styles.notFoundContainer}>
        <h1>Técnica não encontrada</h1>
        <p>A técnica que você está procurando não existe ou foi removida.</p>
        <Link href="/" className={styles.backButton}>
          Voltar ao Início
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbContainer}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <span className={styles.breadcrumbCurrent}>{tecnica.title}</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={tecnica.image}
                alt={`${tecnica.title} - Imagem principal`}
                className={styles.mainImage}
                onError={(e) => {
                  e.target.src = "/placeholder-hair-technique.jpg";
                }}
              />
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.headerInfo}>
              <h1 className={styles.techniqueTitle}>{tecnica.title}</h1>
              <div className={styles.headerActions}>
                <button
                  className={`${styles.favoriteButton} ${
                    isFavorite ? styles.favoriteActive : ""
                  }`}
                  onClick={toggleFavorite}
                  title={
                    isFavorite
                      ? "Remover dos favoritos"
                      : "Adicionar aos favoritos"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>

            <p className={styles.shortDescription}>{tecnica.description}</p>

            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Sobre esta técnica</h3>
              <p className={styles.detailedDescription}>
                {tecnica.detailedDescription}
              </p>
            </div>

            <div className={styles.actionButtons}>
              <Link href="/listagem" className={styles.exploreColorsButton}>
                <svg
                  className={styles.actionIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4a1 1 0 0 1 0 2h-1v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6H3a1 1 0 1 1 0-2h4zM6 6v14h12V6H6z"
                  />
                </svg>
                Explorar Cores
              </Link>

              <Link href="/" className={styles.backToHomeButton}>
                <svg
                  className={styles.actionIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
