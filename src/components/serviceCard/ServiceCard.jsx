import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
  return (
    <div className={styles.serviceCard}>
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
        <button className={styles.serviceButton}>
          {service.buttonText}
        </button>
      </div>
    </div>
  );
}