import Image from "next/image";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>About Auth.Pro</h1>
        <p style={styles.subtitle}>
          Your trusted partner in authentication solutions.
        </p>
        <p style={styles.description}>
          Auth.Pro is a leading provider of secure and scalable authentication
          solutions for businesses of all sizes. Our mission is to provide our
          customers with the most advanced and reliable authentication
          technology on the market. We are committed to providing our customers
          with the highest level of security and customer service.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <Image
          src="/file.svg"
          alt="About Us"
          width={500}
          height={500}
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "0 2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  textContainer: {
    flex: 1,
    maxWidth: "600px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default AboutPage;
