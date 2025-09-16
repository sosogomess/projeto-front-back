'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ColorCard from '../../components/colorCard/ColorCard';
import styles from './page.module.css';

export default function ListagemPage() {
  const [colors, setColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'todas', label: 'Todas as Cores' },
    { value: 'loiros', label: 'Loiros' },
    { value: 'castanhos', label: 'Castanhos' },
    { value: 'ruivos', label: 'Ruivos' },
    { value: 'pretos', label: 'Pretos' },
    { value: 'fantasia', label: 'Cores Fantasia' }
  ];

  useEffect(() => {
    const mockColors = [
      {
        id: 1,
        name: "Loiro Platinado",
        image: "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
        category: "loiros",
        favorites: false,
        description: "Tom loiro platinado ultra claro, perfeito para quem busca um visual marcante."
      },
      {
        id: 2,
        name: "Castanho Chocolate",
        image: "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
        category: "castanhos",
        favorites: true,
        description: "Castanho chocolate rico e profundo, ideal para um look natural e elegante.",
      },
      {
        id: 3,
        name: "Ruivo Intenso",
        image: "/image/cabeloruivo.jpeg",
        category: "ruivos",
        favorites: false,
        description: "Ruivo vibrante e intenso que chama atenção e expressa personalidade.",
      },
      {
        id: 4,
        name: "Preto Azulado",
        image: "https://areademulher.r7.com/wp-content/uploads/2020/01/cabelo-preto-azulado-descubra-como-ter-o-cabelo-dos-seus-sonhos-14.jpg",
        category: "pretos",
        favorites: false,
        description: "Preto profundo com reflexos azulados para um visual sofisticado.",
      },
      {
        id: 5,
        name: "Loiro Mel",
        image: "https://i0.wp.com/alineandrade.com.br/wp-content/uploads/2023/04/loiro-mel-2.jpeg?resize=819%2C1024&ssl=1",
        category: "loiros",
        favorites: true,
        description: "Loiro mel dourado, perfeito para um visual natural e luminoso.",
      },
      {
        id: 6,
        name: "Castanho Claro",
        image: "https://dicasdecabelo.com.br/wp-content/uploads/2025/05/cabelo-castanho-claro-78.jpg",
        category: "castanhos",
        favorites: false,
        description: "Castanho avelã com nuances quentes, ideal para todos os tons de pele.",
      },
      {
        id: 7,
        name: "Ruivo Natural",
        image: "https://i.pinimg.com/originals/39/4d/1e/394d1e77cb7b6a0bc8c7772b7b362a9b.jpg",
        category: "ruivos",
        favorites: false,
        description: "Ruivo natural e vibrante, perfeito para quem busca um visual marcante.",
      },

       {
        id: 8,
        name: "Preto natural",
        image: "https://blog.vizcaya.com.br/wp-content/uploads/2018/07/cabelos-pretos-com-mechas-cinza.png",
        category: "pretos",
        favorites: false,
        description: "Preto natural e profundo, perfeito para quem busca um visual elegante.",
      },
    
    ];

    setTimeout(() => {
      setColors(mockColors);
      setFilteredColors(mockColors);
      setLoading(false);
    }, 1000);
  }, []);


  useEffect(() => {
    let filtered = colors;

    if (selectedCategory !== 'todas') {
      filtered = filtered.filter(color => color.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(color =>
        color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        color.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredColors(filtered);
  }, [colors, selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todas');
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <h1 className={styles.pageTitle}>Catálogo de Cores</h1>
          <p className={styles.pageSubtitle}>
            Explore nossa coleção completa de tonalidades para cabelo. 
            Use os filtros para encontrar a cor perfeita para você.
          </p>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar cores por nome ou descrição..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={styles.clearSearch}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className={styles.categoriesContainer}>
            <span className={styles.filterLabel}>Filtrar por:</span>
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`${styles.categoryButton} ${selectedCategory === category.value ? styles.active : ''}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            {(searchTerm || selectedCategory !== 'todas') && (
              <button onClick={clearFilters} className={styles.clearFilters}>
                Limpar Filtros
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>
              {loading ? 'Carregando...' : `${filteredColors.length} ${filteredColors.length === 1 ? 'cor encontrada' : 'cores encontradas'}`}
            </span>
            {(searchTerm || selectedCategory !== 'todas') && (
              <span className={styles.activeFilters}>
                {searchTerm && `Busca: "${searchTerm}"`}
                {searchTerm && selectedCategory !== 'todas' && ' • '}
                {selectedCategory !== 'todas' && `Categoria: ${categories.find(cat => cat.value === selectedCategory)?.label}`}
              </span>
            )}
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingGrid}>
                {[...Array(8)].map((_, index) => (
                  <div key={index} className={styles.loadingSkeleton}></div>
                ))}
              </div>
            </div>
          ) : filteredColors.length > 0 ? (
            <div className={styles.colorsGrid}>
              {filteredColors.map((color) => (
                <ColorCard key={color.id} color={color} showPrice={true} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.09M6.343 6.343A8 8 0 1017.657 17.657 8 8 0 006.343 6.343z" />
                </svg>
              </div>
              <h3 className={styles.emptyTitle}>Nenhuma cor encontrada</h3>
              <p className={styles.emptyMessage}>
                Tente ajustar os filtros ou buscar por outros termos.
              </p>
              <button onClick={clearFilters} className={styles.resetButton}>
                Ver Todas as Cores
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}