function Profile() {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-xl">
      <img className="w-full" src="/profile_pic_2.jpg" alt="Profile picture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Jacob Pitkin</div>
        <p className="text-gray-700 text-base">
          Software Engineer & Web Developer
        </p>
      </div>
    </div>
  )
}

export default Profile;
