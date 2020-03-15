import React from 'react';
import Navbar from './components/navbar';
import PageContent from './components/PageContent';
import Card from './components/Card'
import Col from './components/Col';
import Row from './components/Row';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';
import ProjectTitle from './components/ProjectTitle';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      < Navbar />
      <PageContent>
        <ProjectSection>
          <ProjectTitle />
          <Row>
            <Col>
              <Card
                name="Global Eats"
                firstHref="https://github.com/IssaIssa-Issa"
                secondHref="https://kaykuhl.github.io/project-1/html"
                imgSrc="https://issaissa-issa.github.io/Portfolio/assets/images/global1.PNG"
              />
              <Card
                name="Pikachoose Pokedex"
                firstHref="https://github.com/ZanderMate/teamikea"
                secondHref="https://protected-spire-30180.herokuapp.com/"
                imgSrc="https://issaissa-issa.github.io/Portfolio/assets/images/pikachoose.PNG"
              />
              <Card
                name="Quiz Game"
                firstHref="https://github.com/IssaIssa-Issa/IssaIssa-Issa.github.io/tree/master/homework4"
                secondHref="https://issaissa-issa.github.io/homework4/index.html"
                imgSrc="https://issaissa-issa.github.io/Portfolio/assets/images/quiz.gif"
              />
            </Col>
            </Row>
            <Row>
            <Col>
              <Card
                name="Weather App"
                firstHref="https://github.com/IssaIssa-Issa/IssaIssa-Issa.github.io/tree/master/homework6"
                secondHref="https://issaissa-issa.github.io/homework6/index.html"
                imgSrc="https://issaissa-issa.github.io/Portfolio/assets/images/weather.PNG"
              />
            </Col>
            <Col>
              <Card
                name="Nuggets"
                firstHref="https://github.com/IssaIssa-Issa/project3"
                secondHref="https://nuggets-2020.herokuapp.com/"
                imgSrc="https://issaissa-issa.github.io/Portfolio/assets/images/nuggets.png"
              />
            </Col>
          </Row>
        </ProjectSection>
        <AboutSection />
        <ContactSection />
        <Footer />
      </PageContent>
    </div >
  );
}

export default App;