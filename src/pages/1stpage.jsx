import { width } from "@mui/system";
import React from "react";

function Pageone() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#c5d0d3",
          display: "flex",
          height: "490px",
          width: "100%",
        }}
      >
        <div style={{ width: "80%" }}>
          <img
            style={{ height: "490px", width: "108%" }}
            src="https://architizer-prod.imgix.net/media/1454449423749PORTADA_The_Interlace_by_OMA_Ole_Scheeren_photo_--%C2%BC_Iwan_Baan_01.jpg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip"
          />
        </div>
        <div style={{ width: "44%" }}>
          <h2
            style={{
              display: "flex",
              paddingLeft: "98px",
              color: "#fff",
              marginTop: "50px",
              fontFamily: "Roboto",
              fontSize: "48px",
            }}
          >
            <b>
              Bring Your
              <br /> dreams
              <br />
              to life with
              <br />
              <span style={{ fontStyle: "italic", color: "currentcolor" }}>
                Happy Home
              </span>
            </b>
          </h2>
          <p
            style={{
              marginLeft: "-20px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
              fontSize: "19px",
            }}
          >
            architecture,planning,construction
          </p>
          <button
            style={{
              marginLeft: "86px",
              backgroundColor: "#c5d0d3",
            }}
          >
            
            
            Read More
          </button>
        </div>
        <picture>
          <img
            style={{
              position: "absolute",
              width: "90px",
              right: "15vw",
              bottom: "5vh",
            }}
            src="https://static.wixstatic.com/media/7ea636_8d8fd505f0644caf9f1d2d7108d98af9~mv2.png/v1/fill/w_158,h_117,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/TT_icon.png"
          ></img>

          <img
            style={{
              position: "absolute",
              width: "73px",
              right: "9vw",
              bottom: "5vh",
            }}
            src="https://static.wixstatic.com/media/7ea636_e4a33a34ebef43989d6bc8c7ac368334~mv2.png/v1/fill/w_118,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fmb-nomination-logo.png"
          ></img>
          <img
            style={{
              position: "absolute",
              width: "100px",
              right: "1vw",
              bottom: "4vh",
            }}
            src="https://static.wixstatic.com/media/7ea636_94be3d5c7a964a00a0f900ed981de800~mv2.png/v1/crop/x_0,y_25,w_824,h_708/fill/w_68,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/houzz_stack%20logo.png"
          ></img>
        </picture>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <p style={{ fontSize: "8", width: "57%" }}>
          “We enjoyed a ‘happy’ experience from start to finish. Happy Building
          in Cheam,&nbsp;definitely takes their name literally. We looked at
          five architects and construction companies, but Happy Home gave us the
          most confidence in the project — and great value for money!”-
          <span
            style={{
              fontWeight: "bold",
              fontSize: "15PX",
              fontFamily: "revert",
            }}
          >
            Bharath G
          </span>
        </p>
      </div>
    </React.Fragment>
  );
}
export default Pageone;
