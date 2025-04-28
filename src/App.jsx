import './App.css'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { Footer } from './components/Footer/Footer'

function App({socialIcons, classIcons, infoIcons, products, footerInfo, footerIcons, footerSpan, footerA}) {

  return (
    <>
      <Header socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons}/>      
      <Products products={products}/>
      <Footer footerInfo={footerInfo} footerIcons={footerIcons} footerSpan={footerSpan} footerA={footerA}/>
    </>
  )
}

export default App
