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
          "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
          "https://belabelinda.com/cdn/shop/files/IMG_5661.jpg?v=1753215055",
        ],
      },
      {
        id: 2,
        name: "Castanho Chocolate",
        image: "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
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
          "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
          "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
          "https://www.abcmais.com/midias/2025/05/Cabelo-na-cor-chocolate-e-tendencia-ivanazav_hairstylist-abcmais.jpg",
        ],
      },
      {
        id: 3,
        name: "Ruivo Intenso",
        image: "/image/cabeloruivo.jpeg",
        category: "ruivos",
        favorites: false,
        description:
          "Ruivo vibrante e intenso que chama atenção e expressa personalidade.",
        detailedDescription:
          "O ruivo intenso é uma cor marcante que expressa personalidade forte e confiança. Este tom vibrante é perfeito para quem deseja um visual único e chamativo, destacando-se em qualquer ambiente.",
        careInstructions: [
          "Use shampoo específico para cabelos ruivos",
          "Aplique máscara hidratante semanalmente",
          "Evite exposição prolongada ao sol",
          "Use protetor solar capilar",
          "Retoque a raiz a cada 4-5 semanas",
        ],
        suitableFor: [
          "Peles claras com undertone quente",
          "Olhos verdes, azuis ou âmbar",
          "Cabelos com base clara a média",
        ],
        duration: "4-5 semanas",
        difficulty: "Média - Requer preparação da base",
        images: [
          "/image/cabeloruivo.jpeg",
          "/image/cabeloruivo.jpeg",
          "/image/cabeloruivo.jpeg",
        ],
      },
      {
        id: 4,
        name: "Preto Azulado",
        image: "https://areademulher.r7.com/wp-content/uploads/2020/01/cabelo-preto-azulado-descubra-como-ter-o-cabelo-dos-seus-sonhos-14.jpg",
        category: "pretos",
        favorites: false,
        description:
          "Preto profundo com reflexos azulados para um visual sofisticado.",
        detailedDescription:
          "O preto azulado é uma cor sofisticada que adiciona profundidade e brilho intenso ao cabelo. Os reflexos azulados proporcionam um visual moderno e elegante, perfeito para ocasiões especiais.",
        careInstructions: [
          "Use shampoo para cabelos escuros",
          "Aplique óleo nutritivo nas pontas",
          "Faça escovação com protetor térmico",
          "Use máscara reconstrutora quinzenalmente",
          "Evite produtos com sulfato",
        ],
        suitableFor: [
          "Todos os tipos de pele",
          "Olhos escuros ou claros",
          "Cabelos com qualquer base",
        ],
        duration: "8-10 semanas",
        difficulty: "Baixa - Cor de cobertura",
        images: [
          "https://areademulher.r7.com/wp-content/uploads/2020/01/cabelo-preto-azulado-descubra-como-ter-o-cabelo-dos-seus-sonhos-14.jpg",
          "https://areademulher.r7.com/wp-content/uploads/2020/01/cabelo-preto-azulado-descubra-como-ter-o-cabelo-dos-seus-sonhos-14.jpg",
          "https://areademulher.r7.com/wp-content/uploads/2020/01/cabelo-preto-azulado-descubra-como-ter-o-cabelo-dos-seus-sonhos-14.jpg",
        ],
      },
      {
        id: 5,
        name: "Loiro Mel",
        image: "https://i0.wp.com/alineandrade.com.br/wp-content/uploads/2023/04/loiro-mel-2.jpeg?resize=819%2C1024&ssl=1",
        category: "loiros",
        favorites: true,
        description:
          "Loiro mel dourado, perfeito para um visual natural e luminoso.",
        detailedDescription:
          "O loiro mel é uma tonalidade dourada e natural que confere luminosidade e calor ao visual. Esta cor versátil combina perfeitamente com diversos tons de pele, proporcionando um look solar e radiante.",
        careInstructions: [
          "Use shampoo matizador dourado semanalmente",
          "Aplique leave-in com proteção UV",
          "Hidrate profundamente a cada 10 dias",
          "Use água morna para lavagem",
          "Faça glossing para manter o brilho",
        ],
        suitableFor: [
          "Peles claras a médias com undertone quente",
          "Olhos mel, verdes ou castanhos",
          "Cabelos com base clara a média",
        ],
        duration: "5-7 semanas",
        difficulty: "Média - Requer descoloração suave",
        images: [
          "https://i0.wp.com/alineandrade.com.br/wp-content/uploads/2023/04/loiro-mel-2.jpeg?resize=819%2C1024&ssl=1",
          "https://i0.wp.com/alineandrade.com.br/wp-content/uploads/2023/04/loiro-mel-2.jpeg?resize=819%2C1024&ssl=1",
          "https://i0.wp.com/alineandrade.com.br/wp-content/uploads/2023/04/loiro-mel-2.jpeg?resize=819%2C1024&ssl=1",
        ],
      },
      {
        id: 6,
        name: "Castanho Claro",
        image: "https://dicasdecabelo.com.br/wp-content/uploads/2025/05/cabelo-castanho-claro-78.jpg",
        category: "castanhos",
        favorites: false,
        description:
          "Castanho avelã com nuances quentes, ideal para todos os tons de pele.",
        detailedDescription:
          "O castanho claro avelã é uma cor versátil e natural que se adapta a diversos estilos. Com nuances quentes e suaves, esta tonalidade proporciona um visual elegante e atemporal.",
        careInstructions: [
          "Use shampoo para cabelos coloridos",
          "Aplique condicionador nutritivo",
          "Faça cronograma capilar mensal",
          "Proteja do calor excessivo",
          "Use produtos sem sulfato",
        ],
        suitableFor: [
          "Todos os tipos de pele",
          "Olhos de qualquer cor",
          "Cabelos com base natural",
        ],
        duration: "6-8 semanas",
        difficulty: "Baixa - Cor natural",
        images: [
          "https://dicasdecabelo.com.br/wp-content/uploads/2025/05/cabelo-castanho-claro-78.jpg",
          "https://dicasdecabelo.com.br/wp-content/uploads/2025/05/cabelo-castanho-claro-78.jpg",
          "https://dicasdecabelo.com.br/wp-content/uploads/2025/05/cabelo-castanho-claro-78.jpg",
        ],
      },
      {
        id: 7,
        name: "Ruivo Natural",
        image: "https://i.pinimg.com/originals/39/4d/1e/394d1e77cb7b6a0bc8c7772b7b362a9b.jpg",
        category: "ruivos",
        favorites: false,
        description:
          "Ruivo natural e vibrante, perfeito para quem busca um visual marcante.",
        detailedDescription:
          "O ruivo natural é uma cor clássica e elegante que proporciona um visual sofisticado. Com tons mais suaves que o ruivo intenso, esta cor mantém a personalidade marcante dos ruivos com maior naturalidade.",
        careInstructions: [
          "Use shampoo específico para ruivos",
          "Aplique protetor solar capilar",
          "Hidrate semanalmente",
          "Evite água muito quente",
          "Retoque mensalmente",
        ],
        suitableFor: [
          "Peles claras a médias",
          "Olhos verdes, azuis ou castanhos",
          "Cabelos com base clara",
        ],
        duration: "5-6 semanas",
        difficulty: "Média - Requer cuidado especial",
        images: [
          "https://i.pinimg.com/originals/39/4d/1e/394d1e77cb7b6a0bc8c7772b7b362a9b.jpg",
          "https://i.pinimg.com/originals/39/4d/1e/394d1e77cb7b6a0bc8c7772b7b362a9b.jpg",
          "https://i.pinimg.com/originals/39/4d/1e/394d1e77cb7b6a0bc8c7772b7b362a9b.jpg",
        ],
      },
      {
        id: 8,
        name: "Preto Natural",
        image: "https://blog.vizcaya.com.br/wp-content/uploads/2018/07/cabelos-pretos-com-mechas-cinza.png",
        category: "pretos",
        favorites: false,
        description:
          "Preto natural e profundo, perfeito para quem busca um visual elegante.",
        detailedDescription:
          "O preto natural é a cor mais clássica e atemporal. Proporciona elegância e sofisticação em qualquer ocasião, sendo perfeito para quem deseja um visual discreto mas impactante.",
        careInstructions: [
          "Use shampoo para cabelos escuros",
          "Aplique máscara nutritiva semanalmente",
          "Proteja do sol para evitar desbotamento",
          "Use leave-in hidratante",
          "Faça escovação com proteção térmica",
        ],
        suitableFor: [
          "Todos os tipos de pele",
          "Qualquer cor de olhos",
          "Cabelos de qualquer base",
        ],
        duration: "8-12 semanas",
        difficulty: "Baixa - Cor de fácil manutenção",
        images: [
          "https://blog.vizcaya.com.br/wp-content/uploads/2018/07/cabelos-pretos-com-mechas-cinza.png",
          "https://blog.vizcaya.com.br/wp-content/uploads/2018/07/cabelos-pretos-com-mechas-cinza.png",
          "https://blog.vizcaya.com.br/wp-content/uploads/2018/07/cabelos-pretos-com-mechas-cinza.png",
        ],
      },
    ];

    const foundColor = mockColors.find((c) => c.id === parseInt(id));

    if (foundColor) {
      setColor(foundColor);

      const favorites = JSON.parse(
        localStorage.getItem("favoriteColors") || "[]"
      );
      setIsFavorite(favorites.some(fav => fav.id === foundColor.id));
    }

    setLoading(false);
  }, [id]);

  const toggleFavorite = () => {
    if (!color) return;

    console.log('Toggle favorito chamado para cor:', color.name);

    const favorites = JSON.parse(
      localStorage.getItem("favoriteColors") || "[]"
    );
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== color.id);
      console.log('Removendo dos favoritos');
    } else {
      const colorToSave = {
        id: color.id,
        nome: color.name,
        categoria: color.category,
        preco: color.price || "Consulte",
        imagem: color.image
      };
      newFavorites = [...favorites, colorToSave];
      console.log('Adicionando aos favoritos:', colorToSave);
    }

    localStorage.setItem("favoriteColors", JSON.stringify(newFavorites));
    console.log('Favoritos salvos:', newFavorites);
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
              <div className={styles.headerActions}>
                <span className={styles.categoryBadge}>{color.category}</span>
                <button
                  className={`${styles.favoriteButton} ${
                    isFavorite ? styles.favoriteActive : ""
                  }`}
                  onClick={toggleFavorite}
                  title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
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
