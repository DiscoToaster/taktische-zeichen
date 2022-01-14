import { Element, SVGElementFactory } from "./svg";
import { type Point } from "./types";

export type SymbolId =
  | "drehleiter"
  | "hebegeraet"
  | "bagger"
  | "raeumgeraet"
  | "bruecke"
  | "sprengmittel"
  | "beleuchtung"
  | "bett"
  | "verpflegung"
  | "verbrauchsgueter"
  | "trinkwasser"
  | "brauchwasser"
  | "elektrizitaet"
  | "geraete"
  | "sprengung"
  | "transport"
  | "fahrzeug"
  | "fahrrad"
  | "kraftrad"
  | "flugzeug"
  | "hubschrauber";

export type SymbolRenderProps = {
  fill?: string;
};

export type Symbol = {
  id: SymbolId;
  label: string;
  size: Point;
  render(factory: SVGElementFactory, props?: SymbolRenderProps): Element;
};

export type SymbolSpec = Pick<Symbol, "size" | "render">;

function applyProps(element: Element, props?: SymbolRenderProps) {
  return element.attr("fill", props?.fill);
}

export const drehleiter: SymbolSpec = {
  size: [35, 35],
  render: (factory) => factory.path("M1,34 L24,11 H34 V1 H24 V11"),
};

export const hebegeraet: SymbolSpec = {
  size: [20, 30],
  render: (factory) => factory.path("M1,30 v-29 h8 a5 5 0 0 0 10 0"),
};

export const bagger: SymbolSpec = {
  size: [20, 30],
  render: (factory) =>
    hebegeraet
      .render(factory)
      .attr("transform", "rotate(45)")
      .attr("transform-origin", "10 15"),
};

export const bruecke: SymbolSpec = {
  size: [41, 16],
  render: (factory) =>
    factory.path("M.5,1 l10,5 h20 l10,-5 M.5,15 l10,-5 h20 l10,5"),
};

export const raeumgeraet: SymbolSpec = {
  size: [30, 19],
  render: (factory) => factory.path("M0,9 h21 m0,-9 v14 l8,4"),
};

export const sprengmittel: SymbolSpec = {
  size: [16, 17],
  render: (factory) =>
    factory
      .g()
      .push(factory.circle([8, 9], 1).attr("fill", "black"))
      .push(factory.circle([8, 9], 7))
      .push(factory.path("M4,2.5 l-1,-2 M11.5,2.5 l1,-2")),
};

export const beleuchtung: SymbolSpec = {
  size: [15, 20],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M1,20 v-14 a5 5 0 0 1 10 0"))
      .push(factory.circle([11, 9], 3)),
};

export const bett: SymbolSpec = {
  size: [30, 18],
  render: (factory) =>
    factory.path("M1,0 v18 m0,-5 h28 m0,5 v-18 m0,15 c0,-8 -28,-8 -28,0"),
};

export const verpflegung: SymbolSpec = {
  size: [17.8, 20],
  render: (factory) => factory.path("M10,10 l6.36,-6.36 a9 9 0 1 0 0 12.72 z"),
};

export const verbrauchsgueter: SymbolSpec = {
  size: [18, 24],
  render: (factory) => factory.path("M7,24 v-14 l-7,-10 h18 l-7,10 v14"),
};

export const trinkwasser: SymbolSpec = {
  size: [28, 14],
  render: (factory) =>
    factory.path("M1,14 v-3 a7 7 0 0 1 7 -7 h20 m-15,-3 v7 m-4,-7 h8"),
};

export const brauchwasser: SymbolSpec = {
  size: [50, 17],
  render: (factory) =>
    factory.path("M1,9 c0,-10 16,-10 16,-1 0,10 16,10 16,1 0,-10 16,-10 16,0"),
};

export const elektrizitaet: SymbolSpec = {
  size: [17, 24],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M14.5,1 l-10,10 h10 l-10,10"))
      .push(factory.path("M4.5,21 l5,2 l-8,0 l2,-7 Z").attr("fill", "black")),
};

export const geraete: SymbolSpec = {
  size: [37, 14],
  render: (factory) =>
    factory.path("M6,7 l25,0 m6,-6 a6 6 0 0 0 0 12 M0,1 a6 6 0 0 1 0 12"),
};

export const sprengung: SymbolSpec = {
  size: [10, 17],
  render: (factory) =>
    factory.path("M1,1 c0,5 3,15 4,15 1,0 4,-10 4,-15 Z").attr("fill", "black"),
};

export const transport: SymbolSpec = {
  size: [30, 30],
  render: (factory) =>
    factory
      .g()
      .push(factory.circle([15, 15], 14))
      .push(factory.path("M1,15 h28 M15,1 v28 M5,5 l20,20  M5,25 l20,-20")),
};

export const fahrzeug: SymbolSpec = {
  size: [75, 45],
  render: (factory, props) =>
    applyProps(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"), props),
};

export const fahrrad: SymbolSpec = {
  size: [42, 45],
  render: (factory) => factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45"),
};

export const kraftrad: SymbolSpec = {
  size: [42, 45],
  render: (factory) =>
    factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45 m-10,-20 h20"),
};

export const flugzeug: SymbolSpec = {
  size: [38, 15],
  render: (factory, props) =>
    factory
      .g()
      .push(factory.path("M19,0 v15"))
      .push(
        applyProps(
          factory.path("M5,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      )
      .push(
        applyProps(
          factory.path("M23,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      ),
};

export const hubschrauber: SymbolSpec = {
  size: [38, 23],
  render: (factory, props) =>
    factory
      .g()
      .push(factory.path("M19,2 v20 m-10,0 h20"))
      .push(
        applyProps(
          factory.path("M5,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      )
      .push(
        applyProps(
          factory.path("M23,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      ),
};

export const symbole: Array<Symbol> = [
  { ...drehleiter, id: "drehleiter", label: "Drehleiter" },
  { ...hebegeraet, id: "hebegeraet", label: "Hebegerät" },
  { ...bagger, id: "bagger", label: "Bagger" },
  { ...raeumgeraet, id: "raeumgeraet", label: "Räumgerät" },
  { ...bruecke, id: "bruecke", label: "Brücke" },
  { ...sprengmittel, id: "sprengmittel", label: "Sprengmittel" },
  { ...beleuchtung, id: "beleuchtung", label: "Beleuchtung" },
  { ...bett, id: "bett", label: "Bett" },
  { ...verpflegung, id: "verpflegung", label: "Verpflegung" },
  { ...verbrauchsgueter, id: "verbrauchsgueter", label: "Verbrauchsgüter" },
  { ...trinkwasser, id: "trinkwasser", label: "Trinkwasser" },
  { ...brauchwasser, id: "brauchwasser", label: "Brauchwasser" },
  { ...elektrizitaet, id: "elektrizitaet", label: "Elektrizität" },
  { ...geraete, id: "geraete", label: "Geräte" },
  { ...sprengung, id: "sprengung", label: "Sprengung" },
  { ...transport, id: "transport", label: "Transport" },
  { ...fahrzeug, id: "fahrzeug", label: "Fahrzeug" },
  { ...fahrrad, id: "fahrrad", label: "Fahrrad" },
  { ...kraftrad, id: "kraftrad", label: "Kraftrad" },
  { ...flugzeug, id: "flugzeug", label: "Flugzeug" },
  { ...hubschrauber, id: "hubschrauber", label: "Hubschrauber" },
];
