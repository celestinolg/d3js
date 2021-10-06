

var dataArray = ["30", "15", "50"];
var width = 500;
var height = 500;
const canvas = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// const circle = canvas.selectAll("cirlce")
//                         .data(dataArray)
//                         .enter()
//                             .append("circle")
//                             .attr("cx", function (d,i){return d*5;})
//                             .attr("cy",50)
//                             .attr("r",30)
//                             .attr("fill","red");

const widthScale = canvas.scale.linear()
    .domain([0, 80])
    .range([0, width]);

const rect = canvas.selectAll("circle")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", function (d) { return widthScale(d) })
    .attr("height", 50)
    .attr("fill", function (d) { return (d >= 30) ? "blue" : "red" })
    .attr("y", function (d, i) { return i * 100 });

                        // console.log(rect);