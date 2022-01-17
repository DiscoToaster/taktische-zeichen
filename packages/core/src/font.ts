import { letterSpacing, styles, widths } from "./font-widths";
import { Element, SVGElementFactory } from "./svg";

export function createFontStyle(factory: SVGElementFactory) {
  return factory
    .textNode(
      "style",
      `<![CDATA[
@font-face {
  font-family: "Roboto Slab";
  font-weight: bold;
  font-style: normal;
  src: url("data:application/font-woff;charset=utf-8;base64,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") format("woff");
}
]]>`
    )
    .attr("type", "text/css");
}

export function applyFontStyles(element: Element): Element {
  return element.attr(
    "style",
    Object.entries(styles)
      .map(([key, value]) => `${key}:${value}`)
      .join(";")
  );
}

export function calculateTextWidth(text: string): number {
  const width = text
    .split("")
    .map((char) => {
      if (!(char in widths)) {
        throw new Error(
          `Ungültiges Zeichen im Text: ${char}, erlaubte Zeichen sind: ${Object.keys(
            widths
          )
            .sort()
            .join("")}`
        );
      }
      return widths[char];
    })
    .reduce((a, b) => a + b, 0);

  return width + text.length - 1 * letterSpacing;
}

export const supportedTextCharacters = Object.keys(widths);
