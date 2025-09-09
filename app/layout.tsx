import "../styles/globals.css";
import { Provider } from "./context";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TRX Headphones</title>
        <meta name="description" content="The Best Headphone" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
