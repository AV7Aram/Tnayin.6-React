import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { socialIcons, classIcons, infoIcons, footerInfo , footerIcons, footerSpan, footerA} from './db/db.js'
import { products } from './fake/fake.js';

createRoot(document.getElementById('root')).render(
    <App socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons} products={products} footerInfo={footerInfo} footerIcons={footerIcons} footerSpan={footerSpan} footerA={footerA}/>
)
