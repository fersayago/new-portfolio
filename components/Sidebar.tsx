import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.askmen.com%2F1080x540%2F2016%2F01%2F25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg" alt="user avatar" />
      <h3>
        <span>Fernando</span>
        Sayago
      </h3>
      <p>Web Developer</p>
      <p>Dowbload Resume</p>
      {/* social icon */}

      {/* addres */}
      <div>
        <div>
          <span>Buenos Aires, Argentina</span>
        </div>
        <p>sayago.fernando@gmail.com</p>
        <p>11-5383-1812</p>
      </div>
      {/* email button */}
      <button>Email me</button>
      <button>Light Theme</button>
    </div>
  )
}

export default Sidebar
