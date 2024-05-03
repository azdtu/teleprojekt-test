// dataHandler.js

// Importer funktionen parseDataForGraph fra din dataParser-fil
import { parseDataForGraph } from './dataParser.js'; // Tilpas stien til din dataParser-fil

// Funktion til at hente data fra API'en og parse det til grafen
export async function fetchDataForGraph() {
  try {
    // Hent rå data fra API'en
    const rawData = await fetch('/api/measurements');
    const jsonData = await rawData.json();

    // Parse og organisere data til grafen ved hjælp af parseDataForGraph-funktionen
    const formattedData = parseDataForGraph(jsonData);

    // Returner det organiserede data
    return formattedData;
  } catch (error) {
    console.error('Fejl ved hentning og parsing af data:', error);
    return null;
  }
}
