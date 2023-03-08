function Profile() {
  return (
    <div className="border border-slate-900 rounded overflow-hidden shadow-xl">
      <img className="w-full" src="/pfp.jpg" alt="Profile picture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Jacob Pitkin</div>
        <p className="text-gray-700 text-base">
          Software Engineer & Web Developer
        </p>
        <div className="flex flex-row items-center justify-end -mt-12">
          <div>
            <a href="https://www.linkedin.com/in/jacob-pitkin-96b82794/" target="_blank" rel="noreferrer">
              <img className="w-12" src="/LI-In-Bug.png" alt="LinkedIn logo" />
            </a>
          </div>
          <div>
            <a href="https://github.com/JacobPitkin" target="_blank" rel="noreferrer">
              <img className="w-12" src="/github-mark.png" alt="GitHub logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
