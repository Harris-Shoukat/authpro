"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div style={styles.container(theme)}>
      <div style={styles.textContainer}>
        <h1 style={styles.title(theme)}>
          Welcome to <span style={{ color: "var(--coregreen)" }}>Auth.Pro</span>
        </h1>
        <p style={styles.subtitle(theme)}>
          The most secure and reliable authentication solution for your
          business.
        </p>
        <Link href="/category" style={styles.ctaButton(theme)}>
          Explore Our Solutions
        </Link>
      </div>
      <div style={styles.imageContainer}>
        <Image
          src="/globe.svg"
          alt="Welcome"
          width={500}
          height={500}
          style={styles.image(theme)}
        />
      </div>
    </div>
  );
};

const styles = {
  container: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 100px)",
    padding: "0 2rem",
    backgroundColor: theme === "dark" ? "#181818" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#000",
    maxWidth: "80%",
    margin: "0 auto",
  }),
  textContainer: {
    flex: 1,
    maxWidth: "600px",
  },
  title: (theme) => ({
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  subtitle: (theme) => ({
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: theme === "dark" ? "#aaa" : "#666",
  }),
  ctaButton: (theme) => ({
    display: "inline-block",
    padding: "1rem 2rem",
    backgroundColor: theme === "dark" ? "#16ad20" : "#13881b",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  }),
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: (theme) => ({
    maxWidth: "100%",
    height: "auto",
    color: "#00ff00", // Matches --coregreen
  }),
};

export default HomePage;
