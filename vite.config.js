import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '89315c74edmshbcd31d3bb024b86p1c4267jsn7eefa028e9a0',
//     'X-RapidAPI-Hos': 'shazam-core.p.rapidapi.com'
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));