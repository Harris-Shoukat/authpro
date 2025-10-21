"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase from "../lib/supabaseClient";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e, form) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: form.email.trim(),
      password: form.password,
    });

    if (error) {
      alert(error.message || "Error signing up");
      return;
    }

    alert("Signup successful! Check your email to confirm (if required).");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      {/* Left side image */}
      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Signup"
          style={styles.image}
        />
      </div>

      {/* Right side form */}
      <div style={styles.formContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={(e) => handleSignup(e, form)} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={styles.input}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              style={styles.input}
            />
            <div
              style={{ position: "absolute", right: 10, top: 18, cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: 10 }}>
          Already have an account? <Link href="/login">Login</Link>
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
  },
};