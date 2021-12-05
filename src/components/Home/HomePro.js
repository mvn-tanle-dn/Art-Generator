import React from "react";

// import { createTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "../AppBar/AppBar";
import StyleTranferApp from "../StyleTransferApp";
import Footer from "../Footer/Footer";

// const theme = createTheme({
//   palette: {
//     type: "dark",
//     primary: {
//       main: "#5768c9",
//     },
//     secondary: {
//       main: "#0091ea",
//     },
//   },
// });

export default (props) => {
  return (
    // <ThemeProvider theme={theme}>
    <>
      {/* <CssBaseline /> */}
      <AppBar />
      <div className="content-area">
        <StyleTranferApp
          styleNetPath="./models/pro/style/model.json"
          transferNetPath="./models/lite/transformer/model.json"
        />
        {/* <Footer /> */}
      </div>
    </>
    // </ThemeProvider>
  );
};
