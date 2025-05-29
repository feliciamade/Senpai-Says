
import Nav from './Header/Header.js'
import Main from './Main/Main.js'
import Section from './Section/Section.js'
import Footer from './Footer/Footer.js'
import SearchAnime from './SearchAnime'

import HomePage from './Layouts/HomePage.js'
import Discover from './Layouts/Discover.js'
import Login from './Layouts/Login.js'



function App() {
  return (

<div> 

  <Nav/>
  <SearchAnime />
  <Main/>
  <Section/>
  <Footer/>

<HomePage/>
</div>

)};

export default App;