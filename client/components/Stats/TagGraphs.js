import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as d3 from 'd3'
import rd3 from 'react-d3-library'

// const Graph = props => {
//   return (
//     <div>
//       <h1>Welcome to graph city I am the mayor</h1>
//     </div>
//   )
// }

class Graph extends Component {
  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10]

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', 700)
      .attr('height', 300)

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', 0)
      .attr('width', 25)
      .attr('height', (d, i) => d)
      .attr('fill', 'green')
  }
  render() {
    return (
      <div>
        <div>
          <h1>This is where Graphs will go</h1>

          <p>Just trying to get something to show up</p>
        </div>
      </div>
    )
  }
}

export default Graph
