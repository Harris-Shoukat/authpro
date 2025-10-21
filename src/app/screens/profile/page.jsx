
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "var(--background)",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--background)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "400px",
          border: "1px solid var(--foreground)",
        }}
      >
        {user ? (
          <>
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "#222",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "48px",
                margin: "0 auto 20px",
              }}
            >
              {user.email.charAt(0).toUpperCase()}
            </div>
            <h1 style={{ margin: "0 0 10px", color: "var(--foreground)" }}>
              {user.email.split("@")[0]}
            </h1>
            <p style={{ color: "#666", margin: "0 0 20px" }}>{user.email}</p>
            <button
              onClick={handleLogout}
              className="auth-button"
            >
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

export default ProfilePage;
