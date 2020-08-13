import React  from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as d3 from 'd3';

class D3 extends React.Component {
  constructor(props) {
    super(props);

      let points = [
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
          this.addRandomDataPoint(),
      ];
      console.log("points");
      console.log(points);
      const simulation = d3.forceSimulation(points)
        .force("charge", d3.forceManyBody())
        .force("link", d3.forceLink([]))
        .force("center", d3.forceCenter());
      // console.log(simulation.nodes());
      // simulation.tick();
      // console.log(simulation.nodes());
      
    this.state = {
        simulation: simulation,
      points: 5
    };

    // this.addPoint = this.addPoint.bind(this);
    // this.removePoint = this.removePoint.bind(this);
  }

  render() {
    return (
        <><svg />
        < / >
    );
  }

    // <
    // button onClick = {
    //     this.addPoint
    // } > Add Point < /button> <
    //   button onClick = {
    //     this.removePoint
    //   } > Remove Point < /button>
  // addPoint() {
  //   this.setState({
  //       points: this.state.points + 1,
  //       simulation: this.state.simulation.tick(),
  //       data: this.state.simulation.nodes()
  //   });
  //   this.tick();
  // }

  // removePoint() {
  //     let points = this.state.points;
  //     points = points > 1? points - 1 : 0;
  //   this.setState({
  //     points: points
  //   });
  //   this.tick();
  // }

  addRandomDataPoint() {
    return ({
      // x: Math.abs(Math.random() * 100),
      //   y: Math.abs(Math.random() * 100),
      x: 50,
        y: 75,
        vx: Math.random(),
        vy: Math.random(),

    });
  }
    
  tick() {
      // this.state.simulation.tick();
      const simulation = this.state.simulation;
      let points = simulation.nodes();
      console.log(points);
      for (let i = 0; i < points.length; i++) {
          let point = points[i];
          console.log(point);
          point.x += point.vx;
          points[i] = point;
      }
    // for (let i = 0; i < this.state.points; i++) {
    //   // for (let i = 0; i < 5; i++) {
    //   points.push(this.addRandomDataPoint());
    // }
    this.setState({
        simulation: simulation.tick()
    });

    d3.select('svg')
      .selectAll('circle')
      .data(points)
      .join('circle')
      .attr('r', 2)
      .transition()
          .duration(1000)
          .attr('fill', (d, i) => d3.rgb(255*d.x, (255 * Math.random()), 255*(i / points.length)))
      .attr('cx', (d, i) => d.x)
      .attr('cy', (d, i) => d.y);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default D3;
