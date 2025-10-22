"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext"; 

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div style={styles.container(theme)}>
      <div style={styles.textContainer}>
        <h1 style={styles.title(theme)}>About Auth.Pro</h1>
        <p style={styles.subtitle(theme)}>
          Your trusted partner in authentication solutions.
        </p>
        <p style={styles.description(theme)}>
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
  description: (theme) => ({
    fontSize: "1rem",
    lineHeight: "1.5",
    color: theme === "dark" ? "#fff" : "#000",
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
    color: theme === "dark" ? "#00ff00" : "#00cc00", 
  }),
};

export default AboutPage;