import React, { Component } from "react";
import { getBlock } from "./Api";
import { Router, Link } from "@reach/router";
import BlockComponent from "./BlockComponent";
export default class Block extends Component {

  render() {
    return (
      <div>
        <h1>Blocks</h1>

        {/* <Link />Core<Link /> */}

        <Link to="core">Core</Link>
        <br></br>
        <Link to="back-end-1">Back End 1</Link>
        <br></br>
        <Link to="back-end-2">Back End 2</Link>
        <br></br>
        <Link to="front-end-1">Front End 1</Link>
        <br></br>
        <Link to="front-end-2">Front End 2</Link>
        <br></br>
        <Link to="project-phase">Project Phase</Link>
        <br></br>
        <Link to="graduated">Graduated</Link>
        <br></br>

        <Router>
          <BlockComponent path="/:blockslug" />

        </Router>




        {/* <ul> */}
        {/* <li value="back-end-1">back-end-1</li>
          <li value="back-end-2">back-end-2</li>
          <li value="front-end-1">front-end-1</li>
          <li value="front-end-2">front-end-2</li>
          <li value="project-phase">project-phase</li>
          <li value="graduated">graduated</li>
        </ul> */}
      </div>
    )
  }




}
