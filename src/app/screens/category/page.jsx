import Image from "next/image";

const CategoryPage = () => {
  const categories = [
    {
      name: "Single Sign-On",
      description: "Allow users to log in with a single ID and password to any of several related, yet independent, software systems.",
      image: "/profile.svg",
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
    <div style={styles.container}>
      <h1 style={styles.title}>Categories</h1>
      <p style={styles.subtitle}>
        Explore our authentication solutions.
      </p>
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} style={styles.categoryCard}>
            <Image
              src={category.image}
              alt={category.name}
              width={100}
              height={100}
              style={styles.categoryImage}
            />
            <h2 style={styles.categoryName}>{category.name}</h2>
            <p style={styles.categoryDescription}>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 100px)",
    padding: "2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    textAlign: "center",
    maxWidth: "80%",
    margin: "0 auto",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "3rem",
  },
  categoriesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  categoryCard: {
    backgroundColor: "var(--background)",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid var(--foreground)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  categoryImage: {
    marginBottom: "1.5rem",
  },
  categoryName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  categoryDescription: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};

export default CategoryPage;