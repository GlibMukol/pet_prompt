import "@/styles/globals.css";

export const metadata = {
  title: "PetPrompt",
  description: "Share AI promps",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
