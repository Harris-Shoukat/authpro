"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext"; 

const CareerPage = () => {
  const { theme } = useTheme();

  const openPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "We are looking for a skilled Frontend Developer to join our team. The ideal candidate will have experience with React, Next.js, and modern CSS frameworks.",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      description:
        "We are seeking a Backend Developer with expertise in Node.js, Express, and database management. Experience with Supabase is a plus.",
    },
    {
      title: "UI/UX Designer",
      location: "New York, NY",
      description:
        "We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate will have a strong portfolio of design projects.",
    },
  ];

  return (
    <div style={styles.container(theme)}>
      <div style={styles.textContainer}>
        <h1 style={styles.title(theme)}>Career Opportunities</h1>
        <p style={styles.subtitle(theme)}>
          Join our team and help us build the future of authentication.
        </p>
        <div style={styles.positionsContainer}>
          {openPositions.map((position, index) => (
            <div key={index} style={styles.positionCard(theme)}>
              <h2 style={styles.positionTitle(theme)}>{position.title}</h2>
              <p style={styles.positionLocation(theme)}>{position.location}</p>
              <p style={styles.positionDescription(theme)}>{position.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.imageContainer}>
        <Image
          src="/window.svg"
          alt="Career Opportunities"
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
    maxWidth: "800px",
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
  positionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
  },
  positionCard: (theme) => ({
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
  }),
  positionTitle: (theme) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  positionLocation: (theme) => ({
    fontSize: "1rem",
    color: theme === "dark" ? "#aaa" : "#666",
    marginBottom: "1rem",
  }),
  positionDescription: (theme) => ({
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
    color: theme === "dark" ? "#00ff00" : "#00cc00", // Matches --coregreen
  }),
};

export default CareerPage;