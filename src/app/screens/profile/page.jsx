"use client";
import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        const { user } = session;
        console.log("User sess]ion:", user);
        setUser(user);
      } else {
        router.push("/screens/login");
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/screens/login");
  };

  const formatSignInTime = (time) => {
    if (!time) return "N/A";
    const date = new Date(time);
    console.log("dateeeee",date);
    return date.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        {user ? (
          <>
            <div style={styles.profileHeader}>
              <div style={styles.avatar}>
                {user.email.charAt(0).toUpperCase()}
              </div>
              <div style={styles.userInfo}>
                <h1 style={styles.userName}>{user.email.split("@")[0]}</h1>
                <p style={styles.userEmail}>{user.email}</p>
              </div>
            </div>
            <div style={styles.userDetails}>
              <div style={styles.detailItem}>
                <strong>Last Sign In:</strong>{" "}
                {formatSignInTime(user.last_sign_in_at)}
              </div>
              <div style={styles.detailItem}>
                <strong>Phone:</strong> {user.phone || "N/A"}
              </div>
              <div style={styles.detailItem}>
                <strong>Role:</strong> {user.role}
              </div>
            </div>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  profileContainer: {
    backgroundColor: "var(--background)",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "600px",
    border: "1px solid var(--foreground)",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "48px",
    marginRight: "30px",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0 0 10px",
  },
  userEmail: {
    fontSize: "1rem",
    color: "#666",
    margin: 0,
  },
  userDetails: {
    marginBottom: "30px",
  },
  detailItem: {
    marginBottom: "15px",
    fontSize: "1rem",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default ProfilePage;
