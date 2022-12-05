import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section'

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