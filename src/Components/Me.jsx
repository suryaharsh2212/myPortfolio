import React from 'react'

function Me() {
  return (
    <div>
    <div id="about-me" className="md:p-10 p-5 bg-gray-100 text-gray-800">
      <h1 className="text-center text-5xl mt-10 mb-10 text-indigo-800">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10">
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src="" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-lg mb-4">
            Hello! I'm Surya , a passionate and dedicated web developer with a knack for creating
            beautiful and functional websites. I have a background in Mern stack and have been
            working with web technologies such as  JavaScript,Tailwind ,for backend Node.js and goods hands on creating an API and various frameworks and libraries.
          </p>
         
          <p className="text-lg">
            Feel free to explore my portfolio to see some of the projects I've worked on. I'm always open to
            new opportunities and collaborations. Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Me
