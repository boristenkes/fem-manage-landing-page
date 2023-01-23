import './scss/styles.scss';

import { Navbar, CTA } from './components';
import { Header, About, Testimonials, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
