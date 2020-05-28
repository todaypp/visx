import React from 'react';
import Tilt from 'react-tilt';
import Link from 'next/link';
import { ParentSize } from '@vx/responsive';
import drawData from './util/drawData';
import Footer from './Footer';

import Area, { background as areaBackground } from '../sandboxes/vx-area/Example';
import Axis, {
  backgroundColor as axisBackgroundColor,
  labelColor as axisTextColor,
} from '../sandboxes/vx-axis/Example';
import BarGroup, {
  background as bargroupBackground,
  green as bargroupText,
} from '../sandboxes/vx-bargroup/Example';
import BarGroupHorizontal, {
  background as horizontalBargroupBackground,
  green as horizontalBargroupText,
} from '../sandboxes/vx-bargroup-horizontal/Example';
import BarStack, {
  background as barstackBackground,
  purple3 as barstackTextColor,
} from '../sandboxes/vx-barstack/Example';
import BarStackHorizontal, {
  background as horizontalBarstackBackground,
  purple3 as horiztonalBarstackTextColor,
} from '../sandboxes/vx-barstack-horizontal/Example';
import Bars from '../sandboxes/vx-bars/Example';
import Brush from '../sandboxes/vx-brush/Example';
import Chord from '../sandboxes/vx-chord/Example';
import Curves from '../sandboxes/vx-curve/Example';
import Dendrogram, {
  background as dendrogramBackground,
  green as dendrogramText,
} from '../sandboxes/vx-dendrogram/Example';
import Dots from '../sandboxes/vx-dots/Example';
import DragI from '../sandboxes/vx-drag-i/Example';
import DragII from '../sandboxes/vx-drag-ii/Example';
import GeoCustom from '../sandboxes/vx-geo-custom/Example';
import GeoMercator from '../sandboxes/vx-geo-mercator/Example';
import Glyphs, { primary as glyphTextColor } from '../sandboxes/vx-glyph/Example';
import Gradients from '../sandboxes/vx-gradient/Example';
import Heatmaps from '../sandboxes/vx-heatmap/Example';
import Legends from '../sandboxes/vx-legend/Example';
import LineRadial from '../sandboxes/vx-shape-line-radial/Example';
import LinkTypes from '../sandboxes/vx-linktypes/Example';
import Network, { backgroundColor as networkBackground } from '../sandboxes/vx-network/Example';
import Pies from '../sandboxes/vx-shape-pie/Example';
import StackedAreas, {
  background as stackedAreaBackground,
} from '../sandboxes/vx-stacked-areas/Example';
import StatsPlot from '../sandboxes/vx-stats/Example';
import Streamgraph, {
  BACKGROUND as streamgraphBackgroundColor,
} from '../sandboxes/vx-streamgraph/Example';
import Pack from '../sandboxes/vx-pack/Example';
import Patterns from '../sandboxes/vx-pattern/Example';
import Polygons, { backgroundColor as polygonBackground } from '../sandboxes/vx-polygons/Example';
import Radar, { bg as radarBackground, pumpkin as radarColor } from '../sandboxes/vx-radar/Example';
import Responsive from '../sandboxes/vx-responsive/Example';
import Threshold, { background as thresholdBackground } from '../sandboxes/vx-threshold/Example';
import Tree, { background as treeBackground } from '../sandboxes/vx-tree/Example';
import Treemap, {
  bg as treemapBackground,
  color1 as treemapTextColor,
} from '../sandboxes/vx-treemap/Example';
import Voronoi from '../sandboxes/vx-voronoi/Example';
import ZoomI from '../sandboxes/vx-zoom-i/Example';

const items = [
  '#242424',
  '#c3dae8',
  '#ef5843',
  '#f5f2e3',
  '#f6c431',
  '#32deaa',
  'rgba(243, 129, 129, 1.000)',
  '#00f2ff',
  '#f4419f',
  '#3130e3',
  '#12122e',
  '#ff657c',
];

const tiltOptions = { max: 8, scale: 1 };
const detailsHeight = 76;

export default function Gallery() {
  return (
    <div>
      <div className="gallery">
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/curves">
            <div className="gallery-item" style={{ border: '1px solid lightgray' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Curves width={width} height={height + detailsHeight} showControls={false} />
                  )}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#b2305b',
                }}
              >
                <div className="title">Curves</div>
                <div className="description">
                  <pre>{'<Curve.* /> <Shape.Line />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/bars">
            <div className="gallery-item" style={{ background: '#5290e7' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Bars width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div className="details color-blue">
                <div className="title">Bars</div>
                <div className="description">
                  <pre>{'<Shape.Bar />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/dots">
            <div className="gallery-item" style={{ background: '#fd6e7f' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Dots showControls={false} width={width} height={height} />
                  )}
                </ParentSize>
              </div>
              <div className="details color-yellow" style={{ zIndex: 1 }}>
                <div className="title">Dots</div>
                <div className="description">
                  <pre>{'<Shape.Circle />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/patterns">
            <div className="gallery-item" style={{ background: items[3] }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Patterns width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details color-gray">
                <div className="title">Patterns</div>
                <div className="description">
                  <pre>{'<Pattern />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/areas">
            <div className="gallery-item" style={{ background: areaBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Area width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ zIndex: 1 }}>
                <div className="title">AreaClosed</div>
                <div className="description">
                  <pre>{'<Shape.AreaClosed />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/stacked-areas">
            <div className="gallery-item" style={{ background: stackedAreaBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <StackedAreas width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: 'rgba(251, 224, 137, 1.000)' }}>
                <div className="title">Stacked Areas</div>
                <div className="description">
                  <pre>{'<Shape.AreaStack />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/gradients">
            <div
              className="gallery-item"
              style={{
                background: 'white',
                boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Gradients
                      width={width}
                      height={height + detailsHeight}
                      margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
                    />
                  )}
                </ParentSize>
              </div>
              <div className="details color-gray">
                <div className="title">Gradients</div>
                <div className="description">
                  <pre>{'<Gradient />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/glyphs">
            <div className="gallery-item" style={{ background: items[7] }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Glyphs
                      width={width}
                      height={height + detailsHeight}
                      margin={{
                        top: 5,
                        left: 5,
                        right: 5,
                        bottom: 80,
                      }}
                    />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: glyphTextColor }}>
                <div className="title">Glyphs</div>
                <div className="description">
                  <pre>{'<Glyph.GlyphDot />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/axis">
            <div className="gallery-item" style={{ background: axisBackgroundColor }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Axis width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: axisTextColor }}>
                <div className="title">Axis</div>
                <div className="description">
                  <pre>{'<Axis.AxisBottom />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/bargroup">
            <div className="gallery-item" style={{ background: bargroupBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <BarGroup width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: bargroupText }}>
                <div className="title">Bar Group</div>
                <div className="description">
                  <pre>{'<Shape.BarGroup />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/bargrouphorizontal">
            <div className="gallery-item" style={{ background: horizontalBargroupBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <BarGroupHorizontal
                      width={width}
                      height={height + detailsHeight}
                      margin={{ top: 20, bottom: detailsHeight, left: 50, right: 20 }}
                    />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: horizontalBargroupText }}>
                <div className="title">Bar Group Horizontal</div>
                <div className="description">
                  <pre>{'<Shape.BarGroupHorizontal />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/heatmaps">
            <div className="gallery-item" style={{ background: '#28272c' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Heatmaps width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: 'rgba(255,255,255,0.3)' }}>
                <div className="title">Heatmaps</div>
                <div className="description">
                  <pre>{'<HeatmapCircle /> + <HeatmapRect />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/barstack">
            <div className="gallery-item" style={{ background: barstackBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <BarStack width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: barstackTextColor, zIndex: 1 }}>
                <div className="title">Bar Stack</div>
                <div className="description">
                  <pre>{'<Shape.BarStack />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/barstackhorizontal">
            <div
              className="gallery-item"
              style={{
                background: horizontalBarstackBackground,
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <BarStackHorizontal width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: horiztonalBarstackTextColor, zIndex: 1 }}>
                <div className="title">Bar Stack Horizontal</div>
                <div className="description">
                  <pre>{'<Shape.BarStackHorizontal />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/lineradial">
            <div className="gallery-item" style={{ background: '#744cca' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <LineRadial animate={false} width={width} height={height} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#919fe5' }}>
                <div className="title">Radial Lines</div>
                <div className="description">
                  <pre>{'<Shape.LineRadial />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/trees">
            <div className="gallery-item" style={{ background: treeBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Tree
                      width={width}
                      height={height + detailsHeight}
                      margin={{ top: 10, left: 30, right: 40, bottom: detailsHeight }}
                    />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#269688' }}>
                <div className="title">Trees</div>
                <div className="description">
                  <pre>{'<Hierarchy.Tree /> + <Shape.LinkHorizontal />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/dendrograms">
            <div className="gallery-item" style={{ background: dendrogramBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Dendrogram width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: dendrogramText }}>
                <div className="title">Dendrograms</div>
                <div className="description">
                  <pre>{'<Hierarchy.Cluster /> + <Shape.LinkVertical />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/pies">
            <div className="gallery-item" style={{ background: '#7f82e3' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Pies animate={false} width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: 'white' }}>
                <div className="title">Pies</div>
                <div className="description">
                  <pre>{'<Shape.Pie />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/legends">
            <div className="gallery-item" style={{ backgroundColor: 'black' }}>
              <div className="image">
                <Legends />
              </div>
              <div className="details" style={{ color: '#494949' }}>
                <div className="title">Legends</div>
                <div className="description">
                  <pre>{'<Legend />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/voronoi">
            <div
              className="gallery-item"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px',
              }}
            >
              <div
                className="image"
                style={{
                  backgroundColor: '#eb6d88',
                  borderRadius: 14,
                }}
              >
                <ParentSize>
                  {({ width, height }) => <Voronoi width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#F54EA2' }}>
                <div className="title">Voronoi</div>
                <div className="description">
                  <pre>{'<Voronoi.VoronoiPolygon /> '}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>

        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/statsplot">
            <div className="gallery-item" style={{ background: '#8a88e3' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <StatsPlot width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#FFFFFF', zIndex: 1 }}>
                <div className="title">Stats Plots</div>
                <div className="description">
                  <pre>{'<BoxPlot /> + <ViolinPlot /> '}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>

        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/geo-mercator">
            <div className="gallery-item" style={{ background: '#f9f7e8' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <GeoMercator width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#f63a48' }}>
                <div className="title">Geo</div>
                <div className="description">
                  <pre>{'<Geo.Mercator />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>

        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/geo-custom">
            <div className="gallery-item" style={{ background: '#252b7e' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <GeoCustom width={width} height={height + detailsHeight} events={false} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#019ece' }}>
                <div className="title">Geo</div>
                <div className="description">
                  <pre>{'<Geo.CustomProjection />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>

        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/network">
            <div className="gallery-item" style={{ background: networkBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Network width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#ffffff',
                }}
              >
                <div className="title">Network</div>
                <div className="description">
                  <pre>{'<Network.Graph />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>

        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/streamgraph">
            <div className="gallery-item" style={{ background: streamgraphBackgroundColor }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Streamgraph width={width} height={height + detailsHeight} animate={false} />
                  )}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#036ecd',
                }}
              >
                <div className="title">Streamgraph</div>
                <div className="description">
                  <pre>{'<Shape.Stack />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/pack">
            <div
              className="gallery-item"
              style={{
                background: '#ffffff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px',
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Pack width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#fd6c6f',
                }}
              >
                <div className="title">Pack</div>
                <div className="description">
                  <pre>{'<Hierarchy.Pack />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/treemap">
            <div
              className="gallery-item"
              style={{
                background: treemapBackground,
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Treemap
                      width={width}
                      height={height + detailsHeight}
                      margin={{ top: 0, left: 10, right: 10, bottom: detailsHeight }}
                    />
                  )}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: treemapTextColor,
                }}
              >
                <div className="title">Treemap</div>
                <div className="description">
                  <pre>{'<Hierarchy.Treemap />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/radar">
            <div
              className="gallery-item"
              style={{
                background: radarBackground,
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Radar width={width} height={height + detailsHeight} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: radarColor,
                }}
              >
                <div className="title">Radar</div>
                <div className="description">
                  <pre>{'<Shape.Line /> + <Shape.LineRadial />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/responsive">
            <div
              className="gallery-item"
              style={{
                background: 'white',
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Responsive width={width} height={height} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#232323',
                  zIndex: 1,
                  border: '1px solid lightgray',
                  borderTop: 'none',
                  borderBottomLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <div className="title">Responsive</div>
                <div className="description">
                  <pre>{'<Responsive.ParentSize />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/text">
            <div
              className="gallery-item"
              style={{
                background: 'white',
                border: '1px solid lightgray',
                borderRadius: '14px',
              }}
            >
              <div className="image">
                <div className="text-demo">Flexible SVG Text</div>
              </div>
              <div
                className="details"
                style={{
                  color: '#232323',
                  zIndex: 1,
                }}
              >
                <div className="title">Text</div>
                <div className="description">
                  <pre>{'<Text.Text />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/drag-i">
            <div
              className="gallery-item"
              style={{
                background: '#c4c3cb',
                borderRadius: '14px',
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <DragI width={width} height={height} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#6437d6',
                  zIndex: 1,
                }}
              >
                <div className="title">Drag i</div>
                <div className="description">
                  <pre>{'<Drag.Drag />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/drag-ii">
            <div
              className="gallery-item"
              style={{
                background: '#04002b',
                borderRadius: '14px',
              }}
            >
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <DragII width={width} height={height} data={drawData} />}
                </ParentSize>
              </div>
              <div
                className="details"
                style={{
                  color: '#ff614e',
                  zIndex: 1,
                }}
              >
                <div className="title">Drag ii</div>
                <div className="description">
                  <pre>{'<Drag.Drag />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/linkTypes">
            <div className="gallery-item" style={{ background: '#272b4d' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <LinkTypes width={width} height={height + detailsHeight} />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#269688' }}>
                <div className="title">Link Types</div>
                <div className="description">
                  <pre>{'<Shape.Link* />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/threshold">
            <div className="gallery-item" style={{ background: thresholdBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => (
                    <Threshold
                      width={width}
                      height={height}
                      margin={{
                        top: 40,
                        left: 40,
                        right: 20,
                        bottom: 30,
                      }}
                    />
                  )}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#111' }}>
                <div className="title">Threshold</div>
                <div className="description">
                  <pre>{'<Threshold />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/chord">
            <div className="gallery-item" style={{ background: '#e4e3d8' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Chord width={width} height={height} centerSize={10} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#111' }}>
                <div className="title">Chords</div>
                <div className="description">
                  <pre>{'<Chord.Chord /> + <Chord.Ribbon />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/polygons">
            <div className="gallery-item" style={{ background: polygonBackground }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Polygons width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: 'white' }}>
                <div className="title">Polygons</div>
                <div className="description">
                  <pre>{'<Shape.Polygon />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/zoom-i">
            <div className="gallery-item" style={{ background: '#0a0a0a' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <ZoomI width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details" style={{ color: '#ccc' }}>
                <div className="title">Zoom I</div>
                <div className="description">
                  <pre>{'<Zoom />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <Tilt className="tilt" options={tiltOptions}>
          <Link href="/brush">
            <div className="gallery-item" style={{ background: '#7c1d6f' }}>
              <div className="image">
                <ParentSize>
                  {({ width, height }) => <Brush compact width={width} height={height} />}
                </ParentSize>
              </div>
              <div className="details">
                <div className="title">Brush</div>
                <div className="description">
                  <pre>{'<Brush />'}</pre>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
        <div className="gallery-item placeholder" />
        <div className="gallery-item placeholder" />
      </div>

      <div>
        <h1 style={{ textAlign: 'center', lineHeight: '.8em' }}>More on the way!</h1>
      </div>

      <Footer />

      <style jsx>
        {`
          h3 {
            margin-top: 0;
            margin-left: 40px;
            margin-bottom: 0;
          }
          .gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            overflow-x: hidden;
            padding-bottom: 20px;
          }
          .gallery-item {
            background-color: white;
            margin: 5px;
            display: flex;
            height: 390px;
            flex: 1;
            min-width: 25%;
            flex-direction: column;
            border-radius: 14px;
          }
          .gallery-item.placeholder {
            height: 1px;
          }
          .image {
            flex: 1;
            display: flex;
            overflow: hidden;
          }
          .details {
            text-align: center;
            padding: 15px 20px;
            color: #ffffff;
          }
          .title {
            font-weight: 900;
            line-height: 0.9rem;
          }
          .description {
            font-weight: 300;
            font-size: 14px;
          }
          pre {
            margin: 0;
          }
          .color-blue {
            color: rgba(25, 231, 217, 1);
          }
          .color-yellow {
            color: #f6c431;
          }
          .color-gray {
            color: #333;
          }
          .text-demo {
            font-size: 64px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            line-height: 1em;
            padding: 1rem;
          }
          @media (max-width: 960px) {
            .gallery-item {
              min-width: 45%;
            }
          }
          @media (max-width: 600px) {
            .gallery-item {
              min-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}