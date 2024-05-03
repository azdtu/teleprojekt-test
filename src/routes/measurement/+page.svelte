<!-- admin.kode: src/routes/admin/+page.svelte -->
<script>
  import { pushState } from '$app/navigation'; // Importer pushState fra $app/navigation

  let glucoseLevel = '';
  let data = [];

  const addMeasurement = async () => {
    const response = await fetch('api/measurements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        glucoseLevel: glucoseLevel
      })
    });
    
    if(response.ok) {
      console.log('Measurement added successfully');
      glucoseLevel = '';
    } else {
      console.error('Error adding measurement');
    }
  };

  const goToGraphPage = async () => {
    const res = await fetch("/api/measurements");
    data = await res.json();
    pushState('src/routes/graph.svelte'); // Opdateret med korrekt URL til graf-siden
  };
</script>

<style>
  /* Styles for input fields and buttons */
  input[type="number"],
  button {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="number"] {
    width: 100%;
  }

  button {
    background-color: #7b0000; /* Mørkerød farve */
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #5a0000; /* Mørkerød farve - mørkere nuance ved hover */
  }

  /* Styles for container */
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f2f2f2; /* Lysegrå farve */
  }

  /* Styles for header */
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333; /* Mørk tekstfarve for kontrast */
  }

  /* Style for labels */
  label {
    display: none; /* Skjuler label elementet */
  }
</style>

<div class="container">
  <h1>Indtast dine målinger</h1>

  <!-- Fjernet label og input element for userName -->

  <label for="glucoseLevel">Blodsukker niveau:</label>
  <input type="number" id="glucoseLevel" bind:value={glucoseLevel} placeholder="Indtast dit blodsukkerniveau" />

  <button on:click={addMeasurement}>Gem målinger</button>
  <button on:click={goToGraphPage}>Vis graf</button> <!-- Tilføjet knap til at vise graf -->
</div>

{#each data as point}
<div>{point.time} {point.value}</div>
{/each}
