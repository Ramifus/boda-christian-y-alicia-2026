// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  /*
     La dirección del sitio publicado. Sin esto, las etiquetas og: del
     layout quedan con rutas relativas y WhatsApp no encuentra la imagen:
     la vista previa sale sin miniatura.
  */
  // CONFIRMAR: la dirección real donde se publique esta invitación.
  site: 'https://boda-christian-y-alicia-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});