import Header from '../Components/Header/Header.js';
import Main from '../Components/Main/Main.js';
import Section from '../Components/Section/Section.js';
import Footer from '../Components/Footer/Footer.js';
import Comic from '../Components/Comic/Comic.js';
import PopUp from '../Components/Popup/Popup.js';
import Quiz from '../Components/Quiz/Quiz.js';

function HomePage() {
  return (
    <>
      <PopUp />
      <Header />
      <Main />
      <Comic />
      <Section />
      <Quiz />
      <Comic />
      <Footer />
    </>
  );
}

export default HomePage;