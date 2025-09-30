"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./page.module.css";

export default function DetalhesPage() {
  const { id } = useParams();
  const router = useRouter();
  const [color, setColor] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const fetchColorDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/hairtones");
      const allColors = response.data;
      const colorData = allColors.find((color) => color.id == id);

      if (colorData) {
        if (!colorData.images || !Array.isArray(colorData.images)) {
          colorData.images = colorData.image ? [colorData.image] : [];
        }
        if (
          !colorData.careInstructions ||
          !Array.isArray(colorData.careInstructions)
        ) {
          colorData.careInstructions = [];
        }
        if (!colorData.suitableFor || !Array.isArray(colorData.suitableFor)) {
          colorData.suitableFor = [];
        }

        setColor(colorData);
        const favorites = JSON.parse(
          localStorage.getItem("favoriteColors") || "[]"
        );
        setIsFavorite(favorites.some((fav) => fav.id === colorData.id));
        toast.success("Detalhes da cor carregados!");
      } else {
        toast.error("Cor não encontrada.");
      }
    } catch (error) {
      toast.error("Erro ao carregar detalhes da cor.");
      console.error("Erro ao carregar detalhes da cor:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchColorDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (!color) return;

    console.log("Toggle favorito chamado para cor:", color.name);

    const favorites = JSON.parse(
      localStorage.getItem("favoriteColors") || "[]"
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== color.id);
      console.log("Removendo dos favoritos");
    } else {
      const colorToSave = {
        id: color.id,
        nome: color.name,
        categoria: color.category,
        preco: color.price || "Consulte",
        imagem: color.image,
      };
      newFavorites = [...favorites, colorToSave];
      console.log("Adicionando aos favoritos:", colorToSave);
    }

    localStorage.setItem("favoriteColors", JSON.stringify(newFavorites));
    console.log("Favoritos salvos:", newFavorites);
    setIsFavorite(!isFavorite);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
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
                src={
                  color.images && color.images[activeImageIndex]
                    ? color.images[activeImageIndex]
                    : color.image || "/placeholder-hair-color.jpg"
                }
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
          </div>

          <div className={styles.infoSection}>
            <div className={styles.headerInfo}>
              <h1 className={styles.colorTitle}>{color.name}</h1>
              <div className={styles.headerActions}>
                <span className={styles.categoryBadge}>{color.category}</span>
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

            <p className={styles.shortDescription}>{color.description}</p>

            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Sobre esta cor</h3>
              <p className={styles.detailedDescription}>
                {color.detailedDescription || color.description}
              </p>
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
