import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <React.Fragment>
      <Link style={{textDecoration:'none',color:'#000000'}} to={"/Design"}><div>Design</div></Link>
      <Link style={{textDecoration:'none',color:'#000000'}} to={'/Build'}><div>Build</div></Link>
      <Link style={{textDecoration:'none',color:'#000000'}} to={'/Project'}><div>Project</div></Link>
      <Link style={{textDecoration:'none',color:'#000000'}} to={'/Review'}><div>Review</div></Link>
      <Link style={{textDecoration:'none',color:'#000000'}} to={'/About'}> <div>About</div></Link>
      <Link style={{textDecoration:'none',color:'#000000'}} to={'/Contact'}><div>Contact</div></Link>
     
    </React.Fragment>
  );
}
export default Navigation;
