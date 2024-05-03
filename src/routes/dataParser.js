// dataParser.js

// Funktion til at analysere data og returnere labels og datasets til grafen
export function parseDataForGraph(data) {
    const labels = [];
    const values = [];
  
    // Gennemgå hver datapunkt i data
    data.forEach(point => {
      // Konverter tidsformatet til noget mere læsbart, hvis det er nødvendigt
      const formattedTime = new Date(point.time).toLocaleString();
  
      // Tilføj tidspunktet til labels-arrayet
      labels.push(formattedTime);
  
      // Tilføj værdien til values-arrayet
      values.push(point.value);
    });
  
    // Returnér et objekt med labels og datasets
    return {
      labels: labels,
      datasets: [
        {
          name: 'Blodsukker niveau',
          values: values
        }
      ]
    };
  }
  