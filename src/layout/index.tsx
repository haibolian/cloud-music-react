import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Main from './components/main';
import { Section } from './css'

export default () => {
  return (
    <div className="music-layout">
      <Header />
      <Section>
        <Nav></Nav>
        <Main></Main>
      </Section>
      <Footer />
    </div>
  )
}