"use client";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>
          Welcome to <span style={{ color: "#16ad20ff" }}>Auth.Pro</span>
        </h1>
        <p style={styles.subtitle}>
          The most secure and reliable authentication solution for your
          business.
        </p>
        <Link href="/screens/category" style={styles.ctaButton}>
          Explore Our Solutions
        </Link>
      </div>
      <div style={styles.imageContainer}>
        <Image
          src="/globe.svg"
          alt="Welcome"
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
  ctaButton: {
    display: "inline-block",
    padding: "1rem 2rem",
    backgroundColor: "#16ad20ff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    fontWeight: "bold",
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

export default HomePage;