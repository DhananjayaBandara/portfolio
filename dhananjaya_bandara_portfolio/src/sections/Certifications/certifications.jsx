import styles from './CertificationsStyles.module.css';

const certificates = [
  {
    title: 'Data Analysis using Python',
    file: '/assets/data analysis.PNG',
  },
  {
    title: 'Python 101 for Data Science',
    file: '/assets/python 101.PNG',
  },
  {
    title: 'Introduction to AI for Youth',
    file: '/assets/ai for youth intel.PNG',
  },
  {
    title: 'Python for Beginners',
    file: 'assets/uom.PNG',
  },
];

function Certifications() {
  return (
    <section id="certifications" className={styles.container}>
      <h1 className="sectionTitle">Certifications</h1>
      <div className={styles.certificatesContainer}>
        {certificates.map((cert, idx) => (
          <div className={styles.certCard} key={idx}>
            <img
              src={cert.file}
              alt={cert.title}
              className={styles.certImage}
            />
            <span className={styles.certTitle}>{cert.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;