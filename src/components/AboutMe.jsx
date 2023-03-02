function AboutMe() {
  return (
    <div className="max-w-xl text-start pt-20">
      <p>
        Hi! My name is Jacob Pitkin, and I'm a Software Engineer.
      </p>
      <p className="pt-4">
        I've spent the past 9 years working for the Utah State Legislature as a Software Engineer primarly helping with a new XML based bill management system.
        The most notable project I've worked on while working there has been an XML based editor for recording the legislative journals during floor hearings.
        This project has been very helpful in speeding up the process of recording the journals by automating much of the language used when importing different reports, as well as reducing the potential for human error.
      </p>
      <p className="pt-4">
        Another notable project has been the closed captioning system for when we live-stream floor debates and some committee meetings that have video feeds.
        This was all built using Java and creating custom plugins for Wowza streaming servers, which is what our streams run on!
      </p>
      <p className="pt-4">
        Outisde of work you can find me competing in Autocross, playing video games, or finding a cool new food spot!
        I also love mentoring people and helping them learn new things, especially if it's something I'm passionate about.
      </p>
    </div>
  )
}

export default AboutMe;
