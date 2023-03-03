import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const services = [
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/educational-min-1.png",
    name: "Educational Institute",
    page: "/Educational",
  },
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/commercial-min.png",
    name: "Commercial Building",
    page: "/Commercial",
  },
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/historical-places-min.png",
    name: "Histroric Monuments",
    page: "/Histroric",
  },
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/hotel-min.png",
    name: "Hotels and Resorts",
    page: "/Hotel",
  },
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/residential-min.png",
    name: "Residential Building",
    page: "/Residential",
  },
  {
    url: "https://www.tejjy.com/wp-content/uploads/2022/10/station-and-airplane-min.png",
    name: "Train station and Airport",
    page: "/Airporttrain",
  },
];

function Ourservices() {
  return (
    <Grid style={{ backgroundColor: "rgb(232,234,237)", width: "100%" }}>
      <p>
        <span
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            top: "10px",
            paddingBottom: "-13px",
            paddingTop: "49px",
            fontFamily: "math",
          }}
        >
          OUR SERVICES
        </span>
      </p>
      <Grid container>
        {services.map((val) => (
          <Grid
            item
            style={{
              backgroundColor: "#fff",
              width: "25%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "210px",
              borderRadius: "16px",
              marginLeft: "70px",
              marginBottom: "70px",
            }}
          >
            <Grid
              container
              style={{
                backgroundImage:
                  "linear-gradient( to right,#04ae68 123%,#0092BE 84%)",
                width: "145px",
                height: "105px",
                borderRadius: "17%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <img style={{ width: "50%" }} src={val.url} />
            </Grid>

            <Link style={{ textDecoration: "none" }} to={val.page}>
              <h3 style={{ color: "#2a2f35" }}>{val.name}</h3>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid style={{ display: "flex", width: "80%", paddingLeft: "19vw" }}>
        <p>
          “We chose architects Happy Building to design a rear extension, loft
          conversion, and manage the planning. Abbas and the team came up with
          amazing designs. Then they took care of the planning application to
          make the entire admin process stress-free.”
          <span style={{ fontWeight: "bold" }}>
            - Jenny,Kingston upon Thames, Surrey
          </span>
        </p>
      </Grid>
    </Grid>
  );
}

export default Ourservices;
