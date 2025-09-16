import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
  return (
    <Link href={`/tecnicas/${service.id}`} className={styles.serviceCard}>
      <div className={styles.serviceImageContainer}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.serviceImage}
          onError={(e) => {
            e.target.src = '/placeholders/default-service.jpg';
          }}
        />
      </div>
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>
          {service.description}
        </p>
        <div className={styles.serviceButton}>
          {service.buttonText}
          <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}