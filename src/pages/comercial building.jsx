import { Grid } from "@mui/material";
import { useEffect } from "react";

function Commercial() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  var Commercial = [
    {
      url: "https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/03/08/22/32/escalator-283448__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/05/00/02/buildings-2581875__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/02/21/09/51/architecture-2085253__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/12/05/09/12/business-2998905__340.png",
    },
    {
      url: "https://media.istockphoto.com/id/1048358188/photo/modern-building-in-paris.jpg?s=612x612&w=0&k=20&c=xQKe6UpXIZhIHQJ-pwrOMm1KIQd74Xc6haT-UcVYEMc=",
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
        Commercial Building
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
        “We shape our buildings; thereafter, they shape us.” – Winston Churchill
      </h5>

      <Grid></Grid>
      <Grid container>
        {Commercial.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}
export default Commercial;
