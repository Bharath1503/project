import Head from "./header.jsx";
import TemporaryDrawer from "./AppBar";
import { Grid } from "@mui/material";
import Navigation from "./navigation";
function CommonHome() {
  return (
    <Grid
      container
      style={{
        display: "flex",
        height: "135px",
      }}
    >
      <Grid item xs={4}>
        <Head />
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "20px",
          fontFamily: "ui-sans-serif",
          fontWeight: "800",
        }}
        item
        xs={7}
      >
        <Navigation />
      </Grid>

      <Grid item xs={1}>
        <TemporaryDrawer />
      </Grid>
    </Grid>
  );
}
export default CommonHome;
