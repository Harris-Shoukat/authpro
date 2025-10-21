"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext"; // Import the theme hook

const CategoryPage = () => {
  const { theme } = useTheme(); // Use theme context

  const categories = [
    {
      name: "Single Sign-On",
      description: "Allow users to log in with a single ID and password to any of several related, yet independent, software systems.",
      image: "/newuser.svg",
    },
    {
      name: "Multi-Factor Authentication",
      description: "Add an extra layer of security to your applications. Require users to provide two or more verification factors to gain access.",
      image: "/file.svg",
    },
    {
      name: "Passwordless Authentication",
      description: "Eliminate passwords from your authentication flow. Use magic links, social logins, or biometric authentication instead.",
      image: "/globe.svg",
    },
  ];

  return (
    <div style={styles.container(theme)}>
      <h1 style={styles.title(theme)}>Categories</h1>
      <p style={styles.subtitle(theme)}>
        Explore our authentication solutions.
      </p>
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} style={styles.categoryCard(theme)}>
            <Image
              src={category.image}
              alt={category.name}
              width={100}
              height={100}
              style={styles.categoryImage(theme)}
            />
            <h2 style={styles.categoryName(theme)}>{category.name}</h2>
            <p style={styles.categoryDescription(theme)}>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 100px)",
    padding: "2rem",
    backgroundColor: theme === "dark" ? "#181818" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#000",
    textAlign: "center",
    maxWidth: "80%",
    margin: "0 auto",
  }),
  title: (theme) => ({
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  subtitle: (theme) => ({
    fontSize: "1.5rem",
    marginBottom: "3rem",
    color: theme === "dark" ? "#aaa" : "#666",
  }),
  categoriesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  categoryCard: (theme) => ({
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  categoryImage: (theme) => ({
    marginBottom: "1.5rem",
    color: theme === "dark" ? "#00ff00" : "#00cc00", // Matches --coregreen
  }),
  categoryName: (theme) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  categoryDescription: (theme) => ({
    fontSize: "1rem",
    lineHeight: "1.5",
    color: theme === "dark" ? "#fff" : "#000",
  }),
};

export default CategoryPage;