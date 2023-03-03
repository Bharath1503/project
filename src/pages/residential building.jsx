import { Grid } from "@mui/material";
import { useEffect } from "react";

function Residential() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  var residential = [
    {
      url: "https://plus.unsplash.com/premium_photo-1661876085781-31da66d0eb63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzaWRlbnRpYWwlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaWRlbnRpYWwlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc2lkZW50aWFsJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc2lkZW50aWFsJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://media.istockphoto.com/id/1255381969/photo/aerial-view-of-housing-estate-and-plant-in-garden.jpg?b=1&s=170667a&w=0&k=20&c=-qmcHjoD4VXfmSI_h2Jl4tEYHqYJHwLXY00cu9Lquww=",
    },
    {
      url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?b=1&s=170667a&w=0&k=20&c=tj7_rTMwrsBVmZno-bAfs_x5mWExklMewUOHqTrpH4Q=",
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
        Residential Building
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
        “You can dream, create, design, and build the most wonderful place in
        the world. But it requires people to make the dream a reality.”– Walt
        Disney
      </h5>

      <Grid></Grid>
      <Grid container>
        {residential.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Residential;
