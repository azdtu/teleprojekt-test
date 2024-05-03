import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		// Konfigurer din adapter efter behov
		adapter: adapter(),

		// Tilføj en konfiguration for dine routefiler
		files: {
			// Definer en mappe med dine Svelte-routes
			routes: 'src/routes',

			// Tilsidesæt standardindstillinger for pages
			// Hvis du vil have en specifik side med en anden indgang
			// page: 'src/app.html',

			// Tilsidesæt standardindstillinger for layouts
			// layouts: 'src/layouts',

			// Tilsidesæt standardindstillinger for app
			// app: 'src/app.html',
		},

		// Tilføj preprocess for at håndtere SCSS eller andre præprocessorer
	}
};

export default config;
