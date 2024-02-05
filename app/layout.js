import "@styles/globals.css";
import Nav from "@componets/Nav";
import Provider from "@componets/Provider";

export const metadata = {
  title: "PetPrompt",
  description: "Share AI promps",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
