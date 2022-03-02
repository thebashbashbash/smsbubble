import React from "react";
import { Helmet } from "react-helmet";
import Main from "./main";

const App = () => (
  <div>
    <Helmet>
      <title>Bashar Mengana</title>
      <meta
        name="description"
        content="Do you want to get to know me - Bashar Mengana - better? Check out this website!"
      />
      <meta name="theme-color" content="#008f68" />
      <meta property="og:image" content="basharmengana.com/preview.png" />
      <meta property="og:title" content="Bashar Mengana" />
      <meta
        property="og:description"
        content="Do you want to get to know me - Bashar Mengana - better? Check out this website!"
      />
    </Helmet>
    <Main />
  </div>
);

export default App;
