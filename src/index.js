import { createRoot } from 'react-dom/client'
import ReactApp from './react/app'
import { f1 } from './util'
console.log(f1)

/**
 * react
 */
const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<ReactApp name="bob" />)
