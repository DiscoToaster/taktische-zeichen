import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useTaktischesZeichen } from "./tz";

export default function Beispiele() {
  const { beispiele } = useStaticQuery(graphql`
    query {
      beispiele: allBeispieleJson {
        nodes {
          id
          label
          tz {
            grundzeichen
            organisation
            funktion
            verwaltungsstufe
            text
            symbol
            fachaufgabe
            einheit
            name
            farbe
          }
        }
      }
    }
  `);

  const { setTaktischesZeichen } = useTaktischesZeichen();

  return (
    <p>
      Beispiele:
      <button className="btn btn-link" onClick={() => setTaktischesZeichen({})}>
        zurücksetzen
      </button>
      {beispiele.nodes.map((beispiel) => (
        <button
          key={beispiel.id}
          className="btn btn-link"
          onClick={() => setTaktischesZeichen(beispiel.tz)}
        >
          {beispiel.label}
        </button>
      ))}
    </p>
  );
}
