"use client";
import Link from "next/link";
import {
  Menu,
  User,
  Home,
  Info,
  LayoutGrid,
  Briefcase,
  X,
  CircleUser,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useScreenWidth from "../utils/useScreenWidth";
import supabase from "../lib/supabaseClient";
import { useTheme } from "../context/ThemeContext"; 

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const screenWidth = useScreenWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleProfileClick = () => {
    router.push("/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        ...styles.navbar(theme),
        maxWidth: screenWidth <= 428 ? "100%" : styles.navbar(theme).maxWidth,
        borderRadius:
          screenWidth <= 428 ? "0" : styles.navbar(theme).borderRadius,
        marginTop: screenWidth <= 428 ? "0" : styles.navbar(theme).marginTop,
      }}
    >
      <div style={styles.navbarLeft}>
        <Link href="/" style={styles.logo(theme)}>
          Auth.<span style={{ color: "var(--coregreen)" }}>Pro</span>
        </Link>
      </div>
      <div style={styles.navbarCenter}>
        {screenWidth > 428 ? (
          <>
            <Link href="/" style={styles.navLink(theme)}>
              Home
            </Link>
            <Link href="/about" style={styles.navLink(theme)}>
              About
            </Link>
            <Link href="/category" style={styles.navLink(theme)}>
              Category
            </Link>
            <Link href="/career" style={styles.navLink(theme)}>
              Career
            </Link>
          </>
        ) : null}
      </div>
      <div style={styles.navbarRight}>
        {screenWidth > 428 ? (
          <>
            {user ? (
              <Link href="/profile" style={styles.navLink(theme)}>
                <CircleUser size={28} />
              </Link>
            ) : (
              <div style={styles.loginSignupContainer(theme)}>
                <Link href="/login" style={styles.loginSignupLink(theme)}>
                  Login
                </Link>
                <span style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                  {" "}
                  /{" "}
                </span>
                <Link href="/signup" style={styles.loginSignupLink(theme)}>
                  Sign Up
                </Link>
              </div>
            )}
            {/* Theme toggle icon for desktop */}
            <button onClick={toggleTheme} style={styles.themeToggle}>
              {theme === "dark" ? (
                <Sun size={28} color="#fff" />
              ) : (
                <Moon size={28} color="#000" />
              )}
            </button>
          </>
        ) : (
          <>
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                style={{ color: theme === "dark" ? "#fff" : "#000" }}
              />
            ) : (
              <Menu
                onClick={toggleMenu}
                style={{ color: theme === "dark" ? "#fff" : "#000" }}
              />
            )}
          </>
        )}
      </div>
      {/* Mobile Menu */}
      {screenWidth <= 428 && isMenuOpen && (
        <div style={styles.mobileMenuFull(theme)}>
          <Link
            href="/"
            style={styles.mobileNavLink(theme)}
            onClick={toggleMenu}
          >
            <Home /> <span style={styles.mobileNavLinkText}>Home</span>
          </Link>
          <Link
            href="/about"
            style={styles.mobileNavLink(theme)}
            onClick={toggleMenu}
          >
            <Info /> <span style={styles.mobileNavLinkText}>About</span>
          </Link>
          <Link
            href="/category"
            style={styles.mobileNavLink(theme)}
            onClick={toggleMenu}
          >
            <LayoutGrid />{" "}
            <span style={styles.mobileNavLinkText}>Category</span>
          </Link>
          <Link
            href="/career"
            style={styles.mobileNavLink(theme)}
            onClick={toggleMenu}
          >
            <Briefcase /> <span style={styles.mobileNavLinkText}>Career</span>
          </Link>
          {user ? (
            <button
              onClick={() => {
                handleProfileClick();
                toggleMenu();
              }}
              style={styles.mobileNavLink(theme)}
            >
              <CircleUser />{" "}
              <span style={styles.mobileNavLinkText}>Profile</span>
            </button>
          ) : (
            <div style={styles.mobileLoginSignupContainer(theme)}>
              <Link
                href="/login"
                style={styles.mobileLoginSignupLink(theme)}
                onClick={toggleMenu}
              >
                Login
              </Link>
              <span style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                {" "}
                /{" "}
              </span>
              <Link
                href="/signup"
                style={styles.mobileLoginSignupLink(theme)}
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          )}
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            style={styles.mobileNavLink(theme)}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            <span style={styles.mobileNavLinkText}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: theme === "dark" ? "#222" : "#c0c0c0ff",
    color: theme === "dark" ? "#fff" : "#000",
    maxWidth: "80%",
    margin: "0 auto",
    borderRadius: "40px",
    marginTop: "10px",
    boxShadow:
      theme === "dark"
        ? "0 4px 8px rgba(0, 0, 0, 0.3)"
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
  }),
  navbarLeft: {
    flex: 1,
  },
  logo: (theme) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  navbarCenter: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  navLink: (theme) => ({
    fontSize: "1rem",
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  navbarRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
    alignItems: "center",
  },
  loginSignupContainer: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  loginSignupLink: (theme) => ({
    color: theme === "dark" ? "var(--coregreen)" : "#222", 
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  }),
  themeToggle: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  mobileMenuFull: (theme) => ({
    position: "absolute",
    top: "60px",
    right: 0,
    backgroundColor: theme === "dark" ? "#097611" : "#e0e0e0",
    minWidth: "50%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "0 0 10px 10px",
    boxShadow:
      theme === "dark"
        ? "0 4px 8px rgba(0, 0, 0, 0.3)"
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 40,
  }),
  mobileNavLink: (theme) => ({
    fontSize: "1rem",
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "1rem 0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  }),
  mobileNavLinkText: {
    marginLeft: "0px",
    paddingLeft: "20px",
  },
  mobileLoginSignupContainer: (theme) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0",
    width: "100%",
    color: theme === "dark" ? "#fff" : "#000",
  }),
  mobileLoginSignupLink: (theme) => ({
    color: "#00ff00", 
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0 5px",
  }),
};

export default Navbar;
