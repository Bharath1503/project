import { Grid, Link } from "@mui/material";

function Pagetwo() {
  return (
    <Grid container >
      <Grid style={{ width: "98vw", backgroundColor: "#c5d0d3" }}>
        <Grid>
          <img
            style={{
              width: "98vw",
              backgroundColor: "#c5d0d3",
              height: "65vh",
            }}
            src="https://blog.architizer.com/wp-content/uploads/Heydar-ALiyev-Center-in-Baku_cropped-1.jpg"
          />
        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid>
            <p>Hello,</p>
          </Grid>
          <Grid style={{ width: "80%" }}>
            <p style={{ fontSize: "px" }}>
              We’re an architectural design and construction management company
              with a love of creative inspiration. We help turn dreams and
              visions into reality for people who aspire to live in exceptional
              contemporary spaces. Big ideas are our thing. Along with expertly
              costed build packages. Then there’s our end-to-end project
              management service, perfect for people who want to leave nothing
              to chance.
              <br />
              <br />
              <button
                style={{
                  position: "absolute",
                  right: "52vw",
                  bottom: "-111vh",
                  backgroundColor: "#c5d0d3",
                }}
              >
                <Link to={"./Ourservices"}>Our Service </Link>
              </button>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Pagetwo;
