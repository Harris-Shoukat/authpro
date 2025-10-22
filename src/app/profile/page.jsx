"use client";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { Ellipsis } from "react-css-spinners";
import { useTheme } from "../context/ThemeContext";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        const { user } = session;
        console.log("User session:", user);
        setUser(user);
        setPhone(user.phone || "");
      } else {
        router.push("/");
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/");
    setLoading(false);
  };

  const handleUpdatePhone = async () => {
    const { data, error } = await supabase.auth.updateUser({
      phone: phone,
    });
    if (error) {
      console.error("Error updating phone number:", error);
    } else {
      setUser(data.user);
      setIsEditing(false);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const formatSignInTime = (time) => {
    if (!time) return "N/A";
    const date = new Date(time);
    console.log("dateeeee", date);
    return date.toLocaleString();
  };

  return (
    <div style={styles.container(theme)}>
      <div style={styles.profileContainer(theme)}>
        {user ? (
          <>
            <div style={styles.profileHeader}>
              <div style={styles.avatar(theme)}>
                {user.email.charAt(0).toUpperCase()}
              </div>
              <div style={styles.userInfo}>
                <h1 style={styles.userName(theme)}>{user.email.split("@")[0]}</h1>
                <p style={styles.userEmail(theme)}>{user.email}</p>
              </div>
            </div>
            <div style={styles.userDetails}>
              <div style={styles.detailItem(theme)}>
                <strong>Last Sign In:</strong>{" "}
                {formatSignInTime(user.last_sign_in_at)}
              </div>
              <div
                style={{
                  ...styles.detailItem(theme),
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong>Phone:</strong>
                <div style={{ marginLeft: "10px", width: "100%" }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      style={styles.input(theme)}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <span>{phone || "N/A"}</span>
                      <Pencil
                        onClick={toggleEdit}
                        size={20}
                        style={{ cursor: "pointer", marginLeft: "10px", color: theme === "dark" ? "#fff" : "#000" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div style={styles.buttonContainer}>
                {isEditing && (
                  <>
                    <button
                      onClick={handleUpdatePhone}
                      style={styles.saveButton(theme)}
                    >
                      Save
                    </button>
                    <button onClick={toggleEdit} style={styles.cancelButton(theme)}>
                      Cancel
                    </button>
                  </>
                )}
              </div>
              <div style={styles.detailItem(theme)}>
                <strong>Role:</strong> {user.role}
              </div>
            </div>
            {loading ? (
              <div style={styles.logoutButton(theme)}>
                <Ellipsis color={theme === "dark" ? "#00ff00" : "#00cc00"} size={40} />
              </div>
            ) : (
              <button onClick={handleLogout} style={styles.logoutButton(theme)}>
                Logout
              </button>
            )}
            {/* Theme toggle button */}
            <button onClick={toggleTheme} style={styles.toggleButton(theme)}>
              Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
          </>
        ) : (
          <p style={{ color: theme === "dark" ? "#fff" : "#000" }}>Loading...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)",
    backgroundColor: theme === "dark" ? "#181818" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  profileContainer: (theme) => ({
    backgroundColor: theme === "dark" ? "#181818" : "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "600px",
    border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
  }),
  profileHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  avatar: (theme) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: theme === "dark" ? "#007bff" : "#007bff", 
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "48px",
    marginRight: "30px",
  }),
  userInfo: {
    flex: 1,
  },
  userName: (theme) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0 0 10px",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  userEmail: (theme) => ({
    fontSize: "1rem",
    color: theme === "dark" ? "#aaa" : "#666",
    margin: 0,
  }),
  userDetails: {
    marginBottom: "30px",
  },
  detailItem: (theme) => ({
    marginBottom: "15px",
    fontSize: "1rem",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  logoutButton: (theme) => ({
    backgroundColor: theme === "dark" ? "#dc3545" : "#c82333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  input: (theme) => ({
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  saveButton: (theme) => ({
    backgroundColor: theme === "dark" ? "#28a745" : "#218838",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  }),
  cancelButton: (theme) => ({
    backgroundColor: theme === "dark" ? "#dc3545" : "#c82333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  toggleButton: (theme) => ({
    padding: "10px",
    marginTop: "20px",
    backgroundColor: theme === "dark" ? "#444" : "#ddd",
    color: theme === "dark" ? "#fff" : "#000",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    width: "100%",
  }),
};

export default ProfilePage;