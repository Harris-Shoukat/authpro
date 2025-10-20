"use client";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import useScreenWidth from "../utils/useScreenWidth";

const Navbar = () => {
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
          Auth.<span style={{ color: "#16ad20ff" }}>Pro</span>
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
          <Link href="/profile" style={styles.navLink}>
            <User />
          </Link>
        ) : (
          <Menu onClick={toggleMenu} />
        )}
      </div>
      {/* Mobile Menu */}
      {screenWidth <= 428 && isMenuOpen && (
        <div style={styles.mobileMenuFull}>
          <Link
            href="/about"
            style={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/category"
            style={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            Category
          </Link>
          <Link
            href="/career"
            style={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            Career
          </Link>
          <div style={{ marginTop: 12 }} onClick={toggleMenu}>
            <User />
          </div>
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
  },
  mobileMenu: {
    position: "absolute",
    top: "70px",
    left: "10%",
    right: "10%",
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  mobileMenuFull: {
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "#222",
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
    padding: "0.5rem 0",
    width: "100%",
    textAlign: "center",
  },
};

export default Navbar;
