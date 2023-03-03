import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App flex items-center justify-center flex-col text-center pt-12">
      <div className="max-w-xl">
        <Profile/>
        <AboutMe/>
        <Projects/>
      </div>
    </div>
  )
}

export default App;
