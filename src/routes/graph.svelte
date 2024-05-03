<!-- src/routes/Graph.svelte -->
<script>
  // Importér fetchDataForGraph-funktionen fra dataHandler.js
  import { fetchDataForGraph } from './dataHandler.js'; // Tilpas stien til din dataHandler-fil

  import { onMount } from 'svelte';
  import { Line } from 'svelte-frappe-charts';

  // Deklarér en variabel til at gemme dataene
  let graphData = [];

  // Deklarér chartData uden for onMount-funktionen
  let chartData = {
    labels: [],
    datasets: []
  };

  // På monteringstidspunktet skal du kalde fetchDataForGraph-funktionen for at hente og formatere dataene
  onMount(async () => {
    graphData = await fetchDataForGraph();

    // Konverter data til formatet for svelte-frappe-charts
    chartData = {
      labels: graphData.map(point => point.time), // Antages at din data har et tidspunkt
      datasets: [{
        name: 'Blodsukker niveau',
        values: graphData.map(point => point.value) // Antages at din data har en værdi
      }]
    };
  });
</script>

<style>
  /* Tilpas eventuelt stilarter for grafen eller dens container her */
</style>

<div>
  <!-- Vis grafen, når chartData er blevet initialiseret -->
  {#if chartData.labels.length > 0}
    <Line {data: chartData} />
  {/if}
</div>
