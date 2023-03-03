import { Grid } from "@mui/material";
import { useEffect } from "react";

function Histroric() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  var historical = [
    {
      url: "https://cdn.pixabay.com/photo/2018/02/25/21/34/temple-3181803__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2013/08/13/17/15/pattadakal-monuments-172207__340.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1616849813057-0bdee631e230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlzdG9yaWNhbCUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1563589425593-c17204c56f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlzdG9yaWNhbCUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
        Histroric Monuments
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
        ”What you leave behind is not what is engraved in stone monuments, but
        what is woven into the lives of others.”-<span>pericles</span>
      </h5>

      <Grid></Grid>
      <Grid container>
        {historical.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Histroric;
