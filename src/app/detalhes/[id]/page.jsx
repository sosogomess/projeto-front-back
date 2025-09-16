"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function DetalhesPage() {
  const { id } = useParams();
  const router = useRouter();
  const [color, setColor] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!id) return;

    const mockColors = [
      {
        id: 1,
        name: "Loiro Platinado",
        image:
          "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
        category: "loiros",
        favorites: false,
        description:
          "Tom loiro platinado ultra claro, perfeito para quem busca um visual marcante e moderno.",
        detailedDescription:
          "O loiro platinado é uma das cores mais desejadas no mundo da coloração capilar. Este tom ultra claro proporciona um visual sofisticado e contemporâneo, ideal para quem deseja se destacar com elegância.",
        careInstructions: [
          "Use shampoo matizador roxo 2-3 vezes por semana",
          "Aplique máscara nutritiva semanalmente",
          "Evite exposição excessiva ao sol",
          "Use protetor térmico antes do secador",
          "Hidrate profundamente a cada 15 dias",
        ],
        suitableFor: [
          "Peles claras e médias",
          "Olhos claros ou escuros",
          "Cabelos com base clara",
        ],
        duration: "4-6 semanas",
        difficulty: "Alta - Requer descoloração",
        images: [
          "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
          "/placeholder-platinum-2.jpg",
          "/placeholder-platinum-3.jpg",
        ],
      },
      {
        id: 2,
        name: "Castanho Chocolate",
        image: "/placeholder-brown.jpg",
        category: "castanhos",
        favorites: true,
        description:
          "Castanho chocolate rico e profundo, ideal para um look natural e elegante.",
        detailedDescription:
          "O castanho chocolate é um tom clássico e versátil que combina com diversos tipos de pele. Sua riqueza e profundidade proporcionam um visual natural e sofisticado.",
        careInstructions: [
          "Use shampoo para cabelos coloridos",
          "Aplique leave-in com proteção UV",
          "Faça cronograma capilar mensal",
          "Use água fria no enxágue final",
          "Evite lavagens diárias",
        ],
        suitableFor: [
          "Todos os tipos de pele",
          "Olhos castanhos ou verdes",
          "Base natural média",
        ],
        duration: "6-8 semanas",
        difficulty: "Baixa - Cor de fácil aplicação",
        images: [
          "/placeholder-brown.jpg",
          "/placeholder-brown-2.jpg",
          "/placeholder-brown-3.jpg",
        ],
      },
    ];

    const foundColor = mockColors.find((c) => c.id === parseInt(id));

    if (foundColor) {
      setColor(foundColor);

      const favorites = JSON.parse(
        localStorage.getItem("hairToneFavorites") || "[]"
      );
      setIsFavorite(favorites.includes(foundColor.id));
    }

    setLoading(false);
  }, [id]);

  const toggleFavorite = () => {
    if (!color) return;

    const favorites = JSON.parse(
      localStorage.getItem("hairToneFavorites") || "[]"
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((favId) => favId !== color.id);
    } else {
      newFavorites = [...favorites, color.id];
    }

    localStorage.setItem("hairToneFavorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes("Baixa")) return styles.difficultyEasy;
    if (difficulty.includes("Média")) return styles.difficultyMedium;
    if (difficulty.includes("Alta")) return styles.difficultyHard;
    return "";
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Carregando detalhes da cor...</p>
      </div>
    );
  }

  if (!color) {
    return (
      <div className={styles.notFoundContainer}>
        <h1>Cor não encontrada</h1>
        <p>A cor que você está procurando não existe ou foi removida.</p>
        <Link href="/listagem" className={styles.backButton}>
          Voltar ao Catálogo
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
          <Link href="/listagem" className={styles.breadcrumbLink}>
            Cores
          </Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <span className={styles.breadcrumbCurrent}>{color.name}</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={color.images[activeImageIndex]}
                alt={`${color.name} - Imagem ${activeImageIndex + 1}`}
                className={styles.mainImage}
                onError={(e) => {
                  e.target.src = "/placeholder-hair-color.jpg";
                }}
              />
              <button
                onClick={toggleFavorite}
                className={`${styles.favoriteButton} ${
                  isFavorite ? styles.favoriteActive : ""
                }`}
              >
                <svg
                  className={styles.favoriteIcon}
                  fill={isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {color.images.length > 1 && (
              <div className={styles.thumbnailsContainer}>
                {color.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={`${styles.thumbnail} ${
                      index === activeImageIndex ? styles.thumbnailActive : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${color.name} - Miniatura ${index + 1}`}
                      className={styles.thumbnailImage}
                      onError={(e) => {
                        e.target.src = "/placeholder-hair-color.jpg";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.infoSection}>
            <div className={styles.headerInfo}>
              <h1 className={styles.colorTitle}>{color.name}</h1>
              <span className={styles.categoryBadge}>{color.category}</span>
            </div>

            <p className={styles.shortDescription}>{color.description}</p>

            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Sobre esta cor</h3>
              <p className={styles.detailedDescription}>
                {color.detailedDescription}
              </p>
            </div>

            <div className={styles.technicalInfo}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Duração:</span>
                  <span className={styles.infoValue}>{color.duration}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Dificuldade:</span>
                  <span
                    className={`${styles.infoValue} ${getDifficultyColor(
                      color.difficulty
                    )}`}
                  >
                    {color.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.suitabilityCard}>
              <h3 className={styles.cardTitle}>Adequado para</h3>
              <ul className={styles.suitabilityList}>
                {color.suitableFor.map((item, index) => (
                  <li key={index} className={styles.suitabilityItem}>
                    <svg
                      className={styles.checkIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.careCard}>
              <h3 className={styles.cardTitle}>Dicas de Cuidados</h3>
              <ul className={styles.careList}>
                {color.careInstructions.map((instruction, index) => (
                  <li key={index} className={styles.careItem}>
                    <span className={styles.careNumber}>{index + 1}</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actionButtons}>
              <button
                onClick={toggleFavorite}
                className={`${styles.favoriteActionButton} ${
                  isFavorite ? styles.favoriteActionActive : ""
                }`}
              >
                <svg
                  className={styles.actionIcon}
                  fill={isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {isFavorite
                  ? "Remover dos Favoritos"
                  : "Adicionar aos Favoritos"}
              </button>

              <Link href="/listagem" className={styles.backToListButton}>
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
                Voltar ao Catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
