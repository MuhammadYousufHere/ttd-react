import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(props => {
  const env = loadEnv(props.mode, process.cwd(), 'VITE_APP')
  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`
  }
  return {
    plugins: [react()],
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        pages: path.resolve(__dirname, './src/pages/'),
        components: path.resolve(__dirname, './src/components/'),
        assets: path.resolve(__dirname, './src/assets/'),
        '@types': path.resolve(__dirname, './src/@types/')
      }
    },
    server: { port: 3000 },
    build: {
      outDir: 'build',
      minify: false,
      sourcemap: false
    }
  }
})
