import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App flex items-center justify-center flex-col text-center pt-12">
      <Profile/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default App;
