"use client";
import Link from "next/link";
import { Menu, User, Home, Info, LayoutGrid, Briefcase,  X, User2, CircleUser } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useScreenWidth from "../utils/useScreenWidth";
import  supabase  from "../lib/supabaseClient";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

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
  const screenWidth = useScreenWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        ...styles.navbar,
        maxWidth: screenWidth <= 428 ? "100%" : styles.navbar.maxWidth,
        borderRadius: screenWidth <= 428 ? "0" : styles.navbar.borderRadius,
        marginTop: screenWidth <= 428 ? "0" : styles.navbar.marginTop,
      }}
    >
      <div style={styles.navbarLeft}>
        <Link href="/" style={styles.logo}>
          Auth.<span style={{ color: "var(--coregreen)" }}>Pro</span>
        </Link>
      </div>
      <div style={styles.navbarCenter}>
        {screenWidth > 428 ? (
          <>
            <Link href="/" style={styles.navLink}>
              Home
            </Link>
            <Link href="/about" style={styles.navLink}>
              About
            </Link>
            <Link href="/category" style={styles.navLink}>
              Category
            </Link>
            <Link href="/career" style={styles.navLink}>
              Career
            </Link>
          </>
        ) : null}
      </div>
      <div style={styles.navbarRight}>
        {screenWidth > 428 ? (
          user ? (
            <Link href="/profile" style={styles.navLink}>
              <CircleUser size={28}/>
            </Link>
            // <button onClick={handleProfileClick} style={styles.navLink}>
            //   <img
            //     src="/profile.svg"
            //     alt="Profile"
            //     style={{ height: "24px", width: "24px", borderRadius: "50%" }}
            //   />
            // </button>
          ) : (
            <div style={styles.loginSignupContainer}>
              <Link href="/login" style={styles.loginSignupLink}>
                Login
              </Link>
              <span style={{ color: "white" }}> / </span>
              <Link href="/signup" style={styles.loginSignupLink}>
                Sign Up
              </Link>
            </div>
          )
        ) : (
          <>
            {isMenuOpen ? (
              <X onClick={toggleMenu} />
            ) : (
              <Menu onClick={toggleMenu} />
            )}
          </>
        )}
      </div>
      {/* Mobile Menu */}
      {screenWidth <= 428 && isMenuOpen && (
        <div style={styles.mobileMenuFull}>
          <Link href="/" style={styles.mobileNavLink} onClick={toggleMenu}>
            <Home /> <span style={styles.mobileNavLinkText}>Home</span>
          </Link>
          <Link href="/about" style={styles.mobileNavLink} onClick={toggleMenu}>
            <Info /> <span style={styles.mobileNavLinkText}>About</span>
          </Link>
          <Link
            href="/category"
            style={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            <LayoutGrid />{" "}
            <span style={styles.mobileNavLinkText}>Category</span>
          </Link>
          <Link
            href="/career"
            style={styles.mobileNavLink}
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
              style={styles.mobileNavLink}
            >
              <img
                src="/profile.svg"
                alt="Profile"
                style={{ height: "24px", width: "24px", borderRadius: "50%" }}
              />{" "}
              <span style={styles.mobileNavLinkText}>Profile</span>
            </button>
          ) : (
            <div style={styles.mobileLoginSignupContainer}>
              <Link
                href="/login"
                style={styles.mobileLoginSignupLink}
                onClick={toggleMenu}
              >
                Login
              </Link>
              <span style={{ color: "white" }}> / </span>
              <Link
                href="/signup"
                style={styles.mobileLoginSignupLink}
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#222",
    color: "white",
    maxWidth: "80%",
    margin: "0 auto",
    borderRadius: "40px",
    marginTop: "10px",
  },
  navbarLeft: {
    flex: 1,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  },
  navbarCenter: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  navLink: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "white",
  },
  navbarRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
  },
  loginSignupContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  loginSignupLink: {
    color: "var(--coregreen)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  mobileLoginSignupContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0",
    width: "100%",
  },
  mobileLoginSignupLink: {
    color: "var(--coregreen)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0 5px",
  },
  mobileMenuFull: {
    position: "absolute",
    top: "60px",
    right: 0,
    backgroundColor: "#097611ff",
    minWidth: "50%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "0 0 10px 10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 40,
  },
  mobileNavLink: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "white",
    padding: "1rem 0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  mobileNavLinkText: {
    marginLeft: "0px",
    paddingLeft: "20px",
  },
};

export default Navbar;
