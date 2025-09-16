'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Favoritos() {
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [favoriteTechniques, setFavoriteTechniques] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedFavoriteColors = JSON.parse(localStorage.getItem('favoriteColors') || '[]');
      const storedFavoriteTechniques = JSON.parse(localStorage.getItem('favoriteTechniques') || '[]');
      
      console.log('Cores favoritas carregadas:', storedFavoriteColors);
      console.log('Técnicas favoritas carregadas:', storedFavoriteTechniques);
      
      setFavoriteColors(storedFavoriteColors);
      setFavoriteTechniques(storedFavoriteTechniques);
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
      setFavoriteColors([]);
      setFavoriteTechniques([]);
    }
    
    setIsLoading(false);
  }, []);

  const removeFavoriteColor = (colorId) => {
    const updatedColors = favoriteColors.filter(color => color.id !== colorId);
    setFavoriteColors(updatedColors);
    localStorage.setItem('favoriteColors', JSON.stringify(updatedColors));
  };

  const removeFavoriteTechnique = (techniqueId) => {
    const updatedTechniques = favoriteTechniques.filter(technique => technique.id !== techniqueId);
    setFavoriteTechniques(updatedTechniques);
    localStorage.setItem('favoriteTechniques', JSON.stringify(updatedTechniques));
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <p>Carregando seus favoritos...</p>
        </div>
      </div>
    );
  }

  const hasFavorites = favoriteColors.length > 0 || favoriteTechniques.length > 0;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Favoritos</h1>
        <p className={styles.subtitle}>
          Aqui estão todas as cores e técnicas que você salvou
        </p>
      </header>

      {!hasFavorites ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <h2 className={styles.emptyTitle}>Nenhum favorito ainda</h2>
          <p className={styles.emptyText}>
            Comece explorando nossas cores e técnicas para salvar seus favoritos
          </p>
          <div className={styles.emptyActions}>
            <Link href="/listagem" className={styles.exploreButton}>
              Explorar Cores
            </Link>
            <Link href="/#servicos" className={styles.exploreButton}>
              Ver Técnicas
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          {favoriteColors.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Cores Favoritas</h2>
              <div className={styles.grid}>
                {favoriteColors.map((color) => (
                  <div key={color.id} className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={color.imagem} alt={color.nome} />
                      <button 
                        className={styles.removeButton}
                        onClick={() => removeFavoriteColor(color.id)}
                        title="Remover dos favoritos"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{color.nome}</h3>
                      <p className={styles.cardCategory}>{color.categoria}</p>
                      <p className={styles.cardPrice}>A partir de {color.preco}</p>
                      <Link href={`/detalhes/${color.id}`} className={styles.viewButton}>
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {favoriteTechniques.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Técnicas Favoritas</h2>
              <div className={styles.grid}>
                {favoriteTechniques.map((technique) => (
                  <div key={technique.id} className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={technique.image} alt={technique.title} />
                      <button 
                        className={styles.removeButton}
                        onClick={() => removeFavoriteTechnique(technique.id)}
                        title="Remover dos favoritos"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{technique.title}</h3>
                      <p className={styles.cardCategory}>Técnica</p>
                      <p className={styles.cardPrice}>{technique.priceRange}</p>
                      <Link href={`/tecnicas/${technique.id}`} className={styles.viewButton}>
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className={styles.actions}>
            <Link href="/listagem" className={styles.continueButton}>
              Continuar Explorando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}