export const metadata = {
  title: "Raghwendra Mahato | Portfolio",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
          <strong>Raghwendra Mahato</strong>
        </header>

        {children}

        <footer style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
          © {new Date().getFullYear()} Raghwendra Mahato
        </footer>
      </body>
    </html>
  );
}
