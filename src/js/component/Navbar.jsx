import React from "react"


export function Navbar(){
return (
<div>
 
 
  <h5>Start Bootstrap</h5> <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Service</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Contact</a>
  </li>
</ul>
</div>
)
}
