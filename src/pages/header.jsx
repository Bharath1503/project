import { Link } from "react-router-dom";

function Head() {
  return (
    <div>
      <Link to={"/Home"}>
        <img
          style={{ height: "100px", margin: "25px", paddingLeft: "22px" }}
          src={require("./1c54016887db4d3f8bc6fb0c999febf5.png")}
        />
      </Link>
    </div>
  );
}

export default Head;
