"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";

type Pt = {
  id: string;
  name: string;
  coords: [number, number];
  hq?: boolean;
};

const pts: Pt[] = [
  { id: "br", name: "Bio Plugs", coords: [-47.0, -22.9], hq: true },
  { id: "de", name: "Selecta one", coords: [10.0, 51.2] },
  { id: "il", name: "Danziger", coords: [34.8, 31.8] },
  { id: "jp", name: "Sakata", coords: [135.5, 34.5] },
];

export function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const proj = d3.geoNaturalEarth1().scale(155).translate([450, 230]);
    const gpath = d3.geoPath().projection(proj);
    const svg = d3.select(svgEl).attr("viewBox", "0 0 900 460");
    svg.selectAll("*").remove();

    svg
      .append("path")
      .datum({ type: "Sphere" } as d3.GeoSphere)
      .attr("class", "v10-map-sphere")
      .attr("d", gpath as never);

    svg
      .append("path")
      .datum(d3.geoGraticule()())
      .attr("class", "v10-map-graticule")
      .attr("d", gpath as never);

    let cancelled = false;

    d3.json<Topology>(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((world) => {
      if (cancelled || !world) return;
      const features = (
        feature(world, world.objects.countries as never) as unknown as FeatureCollection<Geometry>
      ).features;

      svg
        .append("g")
        .selectAll("path")
        .data(features)
        .join("path")
        .attr("class", "v10-map-country")
        .attr("d", gpath as never);

      const px: Record<string, [number, number]> = {};
      pts.forEach((b) => {
        px[b.id] = proj(b.coords) as [number, number];
      });

      pts
        .filter((b) => !b.hq)
        .forEach((b, i) => {
          // Direção: breeder → Brasil (genética chega ao Brasil)
          const start = px[b.id];
          const end = px["br"];
          const midX = (start[0] + end[0]) / 2;
          const midY = (start[1] + end[1]) / 2 - 80;
          const pathD = `M${start[0]},${start[1]} Q${midX},${midY} ${end[0]},${end[1]}`;
          const arc = svg
            .append("path")
            .attr("class", "v10-map-arc")
            .attr("d", pathD);
          const node = arc.node();
          if (!node) return;
          const len = node.getTotalLength();
          arc
            .attr("stroke-dasharray", String(len))
            .attr("stroke-dashoffset", String(len))
            .transition()
            .delay(800 + i * 350)
            .duration(1800)
            .ease(d3.easeCubicInOut)
            .attr("stroke-dashoffset", 0)
            .on("end", function () {
              d3.select(this).classed("flowing", true);
            });

          // Travel particle
          const particle = svg
            .append("circle")
            .attr("class", "v10-map-particle")
            .attr("r", 4)
            .attr("opacity", 0);
          const travel = () => {
            particle
              .attr("opacity", 1)
              .transition()
              .duration(0)
              .attrTween("transform", () => (t: number) => {
                const p = node.getPointAtLength(t * len);
                return `translate(${p.x},${p.y})`;
              })
              .transition()
              .delay(2400 + i * 350)
              .duration(2800)
              .ease(d3.easeQuadInOut)
              .attrTween("transform", () => (t: number) => {
                const p = node.getPointAtLength(t * len);
                return `translate(${p.x},${p.y})`;
              })
              .transition()
              .duration(200)
              .attr("opacity", 0)
              .on("end", () => setTimeout(travel, 600 + i * 200));
          };
          setTimeout(travel, 2200 + i * 400);
        });

      pts.forEach((b) => {
        const [x, y] = px[b.id];
        if (b.hq) {
          svg
            .append("circle")
            .attr("class", "v10-map-pulse")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 4);
          svg
            .append("circle")
            .attr("class", "v10-map-dot v10-map-hq")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 7);
        } else {
          svg
            .append("circle")
            .attr("class", "v10-map-dot")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 5);
        }
        svg
          .append("text")
          .attr("class", b.hq ? "v10-map-label-hq" : "v10-map-label")
          .attr("x", x)
          .attr("y", y - 14)
          .attr("text-anchor", "middle")
          .text(b.name);
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <svg ref={svgRef} style={{ width: "100%", display: "block" }} />;
}
