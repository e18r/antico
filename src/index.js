import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import * as topojson from "topojson";
import co from "./co.json";
import "./style.css";

const width = 960,
						height = 500;

let canvas = d3.select("body").append("svg")
				.attr("width", width)
				.attr("height", height);
let path = d3Geo.geoPath();
let geojson = topojson.feature(co, co.objects.co);
canvas.selectAll("path")
		.data(geojson.features)
		.enter().append("path")
		.attr("d", path)
