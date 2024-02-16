import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoreGenderProvider } from './context/StoreContext.tsx'
import { StoreMerProvider } from './context/MerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreMerProvider>
    <StoreGenderProvider>
        <App />
    </StoreGenderProvider>
    </StoreMerProvider> 
        
)
