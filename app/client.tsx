/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()

const App = () => <StartClient router={router} />

const root = document.getElementById('root')
if (root) {
  hydrateRoot(root, <App />)
}

export default App
