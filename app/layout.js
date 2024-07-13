import "./globals.css";
import Nav from "./Nav";

export const metadata = {
  title: "Daylog Systems",
  description: "Automated system for user management",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout
