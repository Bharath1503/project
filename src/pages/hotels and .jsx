import { Grid } from "@mui/material";
import { useEffect } from "react";

function Hotel() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  var hotel = [
    {
      url: "https://images.adsttc.com/media/images/62e8/7562/95a5/5101/66f1/7475/newsletter/a-green-undulating-roof-covers-sou-fujimotos-resort-project-on-ishigaki-island-japan_1.jpg?1659401623",
    },
    {
      url: "https://images.adsttc.com/media/images/622c/e8cf/b9fa/780e/7d2e/f21c/newsletter/sanya-horizons-by-ole-scheeren-c-buro-os-12-green-horizons.jpg?1647110405",
    },
    {
      url: "https://images.adsttc.com/media/images/61ca/d11d/3e4b/313c/3200/001b/newsletter/OA_Desert_Rock_Hanging_Valley_image_credit_Luxigon.jpg?1640681735",
    },
    {
      url: "https://images.adsttc.com/media/images/6065/890c/f91c/8162/e000/0e71/newsletter/Fachada_Norte_de_baixo_L_119.jpg?1617266934",
    },
    {
      url: "https://images.adsttc.com/media/images/603c/cc33/f91c/8186/2500/0051/newsletter/ummahatalshaykh12_1.jpg?1614597163",
    },
    {
      url: "https://images.adsttc.com/media/images/5f0e/d08f/b357/651c/9e00/001d/newsletter/Render_2.jpg?1594806406",
    },
  ];
  return (
    <Grid
      container
      style={{ backgroundColor: "rgb(195,206,214)", width: "100%" }}
    >
      <h3
        style={{
          paddingLeft: "90vh",
          fontSize: "30px",
          backgroundColor: "rgb(255, 255, 255)",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        Hotel and Resorts
      </h3>
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "-75px",
          fontSize: "15px",
        }}
      >
        Chilling out on the bed in your hotel room watching television, while
        wearing your own pajamas, is sometimes the best part of a vacation.-
        Laura Marano
      </h5>

      <Grid></Grid>
      <Grid container>
        {hotel.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Hotel;
