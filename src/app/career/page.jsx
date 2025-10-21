
import Image from "next/image";

const CareerPage = () => {
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
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Career Opportunities</h1>
        <p style={styles.subtitle}>
          Join our team and help us build the future of authentication.
        </p>
        <div style={styles.positionsContainer}>
          {openPositions.map((position, index) => (
            <div key={index} style={styles.positionCard}>
              <h2 style={styles.positionTitle}>{position.title}</h2>
              <p style={styles.positionLocation}>{position.location}</p>
              <p style={styles.positionDescription}>{position.description}</p>
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
    minHeight: "calc(100vh - 100px)",
    padding: "0 2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    maxWidth: "80%",
    margin: "0 auto",
  },
  textContainer: {
    flex: 1,
    maxWidth: "800px",
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
  positionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
  },
  positionCard: {
    backgroundColor: "var(--background)",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid var(--foreground)",
  },
  positionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  positionLocation: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1rem",
  },
  positionDescription: {
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

export default CareerPage;
