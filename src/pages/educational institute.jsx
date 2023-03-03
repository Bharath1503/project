import { Grid } from "@mui/material";
import { useEffect } from "react";

function Educational() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  var education = [
    {
      url: "https://www.architecturalrecord.com/ext/resources/Issues/2019/11-November/CEU/1911-COLLEGES-UNIVERSITIES-CEUMore-than-academic-03.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtVJ3PvjAauFkr0bwES25ILvzTkYS8mgd8ZTHQIErgS83PvgI6D_J7r-Dle7xbIai5XY&usqp=CAU",
    },
    {
      url: "https://thumb.cadbull.com/img/product_img/original/education_institute_building_architecture_layout_plan_and_landscaping_structure_details_dwg_file_29012019044350.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_HW1XyueVumXguN08710YD-yX3eo8LqAHQ&usqp=CAU",
    },
    {
      url: "https://images.adsttc.com/media/images/52f9/fea8/e8e4/4ec9/bf00/0080/large_jpg/library.jpg?1392115364",
    },
    {
      url: "https://images.adsttc.com/media/images/6109/3aa5/f91c/8139/ea00/009f/large_jpg/Aerial_1.jpg?1627994759",
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
        Educatinal Institute
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
        ”“Education is the most powerful weapon which you can use to change the
        world.”
        <span>-Nelson Mandela</span>
      </h5>

      <Grid></Grid>
      <Grid container>
        {education.map((val) => (
          <img
            style={{ width: "40%", paddingTop: "30vh", paddingLeft: "6vw" }}
            src={val.url}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Educational;
