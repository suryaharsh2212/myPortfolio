import { useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

function Project() {
  const images = [
    "https://img.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576739.jpg?ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722517457/giggle_zncxgf.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722405850/Screenshot_2024-07-31_113340_hogmvz.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722406081/Screenshot_2024-07-31_113729_itqbvi.png",
  ];
  
  const spicemaven = [
    "https://img.freepik.com/free-vector/flat-design-food-lounge-facebook-cover_23-2149188386.jpg?ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
     "https://res.cloudinary.com/dllgqcla4/image/upload/v1724660884/1_rlpm5q.png",
     "https://res.cloudinary.com/dllgqcla4/image/upload/v1724660946/2_giyafq.png",
     "https://res.cloudinary.com/dllgqcla4/image/upload/v1724660977/restromain_sgxa8j.png"
  ];
  
  const recepie = [
    "https://img.freepik.com/free-photo/italian-meatball-soup-stelline-gluten-free-pasta-bowl-black-table_2829-18282.jpg?size=626&ext=jpg&ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722421882/recepie-1_wgd6kb.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722421883/Screenshot_2024-07-31_160036_yuzazr.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722408924/medium-shot-cartoonish-boy-with-burger_23-2151033916_nifeic.avif",
  ];
  
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="project" className="md:p-5 mt-40" >
      <h1 className="text-center text-5xl mt-10 mb-10 text-indigo-800">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:p-5 md:ml-20">
        {[
           {
            images: spicemaven,
            title: "Spice Maven",
            description: "Its a food ordering application with Ola maps integration.",
            link: "https://spicemaven-online-food-ordering.vercel.app/",
          },
          {
            images: images,
            title: "Giggle chat",
            description: "It's a realtime chat application made using MERN Stack.",
            link: "https://real-time-chat-application-uyhn.vercel.app/",
          },
         
          {
            images: recepie,
            title: "Recipe Finder",
            description: "It's a simple recipe finder made using plain HTML, CSS, and JavaScript with an API.",
            link: "https://recipie-finderr.netlify.app/",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="card card-compact bg-base-100 w-96 shadow-xl p-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <figure className="relative w-full h-56 overflow-hidden">
              <AnimatePresence>
                <motion.img
                  key={time}
                  src={project.images[time]}
                  alt="Project"
                  className="absolute w-full h-full object-cover rounded-lg"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 2.5 }}
                />
              </AnimatePresence>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-start">
                <button className="rounded px-5 py-2 text-white bg-blue-600">
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>Visit</a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
