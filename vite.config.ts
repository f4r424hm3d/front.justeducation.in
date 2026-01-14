import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		allowedHosts: [
			"buzzard-light-equally.ngrok-free.app", // Add your ngrok host here
		],
	},
	build: {
		// Production optimizations
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false, // Disable sourcemaps in production for smaller bundle
		rollupOptions: {
			output: {
				// Code splitting for better caching
				manualChunks: {
					vendor: ['react', 'react-dom', 'react-router-dom'],
					redux: ['@reduxjs/toolkit', 'react-redux'],
				},
			},
		},
		chunkSizeWarningLimit: 1000, // Warn if chunk exceeds 1MB
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux'],
	},
});