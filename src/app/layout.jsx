import Header from "@/components/Header";
import React from "react";
import "./global.css";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "Movie App",
};

const layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;
