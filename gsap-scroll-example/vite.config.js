import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/gsap-scroll-example/',
    plugins: [react()],
})
