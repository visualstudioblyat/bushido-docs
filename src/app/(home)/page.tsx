import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Bushido Docs</h1>
      <p style={{ opacity: 0.7 }}>Documentation for Bushido Browser</p>
      <Link
        href="/docs"
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          background: "#6366f1",
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Read the Docs
      </Link>
    </main>
  );
}
