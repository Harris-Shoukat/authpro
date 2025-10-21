"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase from "../lib/supabaseClient";
import { Eye, EyeOff } from "lucide-react";
import { Ellipsis } from "react-css-spinners";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message || "Invalid email or password");
      setLoading(false);
      return;
    }

    if (data?.user) {
      router.push("/");
    } else {
      alert("Login failed");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left side image */}
      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Login"
          style={styles.image}
        />
      </div>

      {/* Right side form */}
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form
          onSubmit={(e) => handleLogin(e, email, password)}
          style={styles.form}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <div
              style={{
                position: "absolute",
                right: 10,
                top: 18,
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          {loading ? (
            <div style={styles.button}>
              <Ellipsis color="var(--coregreen)" size={40} />
            </div>
          ) : (
            <button type="submit" style={styles.button} className="auth-button">
              Login
            </button>
          )}
        </form>
        <p style={{ marginTop: 10 }}>
          Don’t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#181818",
  },
  form: {
    width: "80%",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    padding: "10px",
    margin: "8px 0",
    fontSize: "16px",
    width: "100%",
  },
  button: {
    padding: "10px",
    marginTop: "10px",
    background: "#303030",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
