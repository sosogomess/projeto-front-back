"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./ColorCard.module.css";

export default function ColorCard({
  color,
  showFavoriteButton = true,
  showPrice = false,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("hairToneFavorites") || "[]"
    );
    setIsFavorite(favorites.includes(color.id));
  }, [color.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const favorites = JSON.parse(
      localStorage.getItem("hairToneFavorites") || "[]"
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((id) => id !== color.id);
    } else {
      newFavorites = [...favorites, color.id];
    }

    localStorage.setItem("hairToneFavorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/detalhes/${color.id}`} className={styles.colorCard}>
      <div className={styles.imageContainer}>
        <img
          src={color.image}
          alt={color.name}
          className={styles.colorImage}
          onError={(e) => {
            e.target.src = "/placeholder-hair-color.jpg";
          }}
        />
        {showFavoriteButton && (
          <button
            onClick={toggleFavorite}
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.active : ""
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
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.colorName}>{color.name}</h3>
        <p className={styles.colorCategory}>Categoria: {color.category}</p>
        {showPrice && color.price && (
          <p className={styles.colorPrice}>{color.price}</p>
        )}
        {color.description && (
          <p className={styles.colorDescription}>{color.description}</p>
        )}
        <div className={styles.cardFooter}>
          <span className={styles.viewDetails}>Ver detalhes</span>
          <svg
            className={styles.arrowIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
