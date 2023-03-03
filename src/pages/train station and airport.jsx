import { Grid } from "@mui/material";
import { useEffect } from "react";

function Airporttrain() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  var train = [
    {
      url: "https://images.adsttc.com/media/images/62da/5233/faad/c361/d8dd/87f7/newsletter/grimshaw-reveals-the-design-of-washington-union-station-expansion-project_2.jpg?1658475083",
    },
    {
      url: "https://images.adsttc.com/media/images/6079/3ef0/f91c/8102/b800/00a1/newsletter/Shenzhen_transportation_Hub_Grimshaw_V01.jpg?1618558643",
    },
    {
      url: "https://images.adsttc.com/media/images/5d16/1cb5/284d/d140/0200/00c9/newsletter/Nigel_Young_.jpg?1561730220",
    },
    {
      url: "https://images.adsttc.com/media/images/5997/2f2d/b22e/38ce/d300/02d4/newsletter/MoynihanTrainHallRenderings_Page_08.jpg?1503080231",
    },
    {
      url: "https://images.adsttc.com/media/images/58db/d769/e58e/ceef/0900/00c2/original/Moscow_Subway.gif?1490802534",
    },
    {
      url: "https://images.adsttc.com/media/images/6373/6ab2/bd52/ae4a/e484/5525/large_jpg/foster-plus-partners-woven-design-wins-the-competition-for-the-cpk-airport-in-poland_6.jpg?1668508388",
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
        Train station and Airport
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
        “Don’t tell me how educated you are, tell me how much you have
        travelled.” – Mohammed
      </h5>

      <Grid></Grid>
      <Grid container>
        {train.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}
export default Airporttrain;
