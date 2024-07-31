import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Project() {
  const images = [
    "https://img.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576739.jpg?ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722404993/Screenshot_2024-07-31_111813_m2slnz.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722405850/Screenshot_2024-07-31_113340_hogmvz.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722406081/Screenshot_2024-07-31_113729_itqbvi.png",
    
  ];
  const justeat=[
    "https://img.freepik.com/free-vector/flat-design-food-lounge-facebook-cover_23-2149188386.jpg?ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722409397/justeat1_nykzcs.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722409903/Screenshot_2024-07-31_124114_izhqzq.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722409990/Screenshot_2024-07-31_124235_so2mu5.png",
    
  ]
  const recepie=[
    "https://img.freepik.com/free-photo/italian-meatball-soup-stelline-gluten-free-pasta-bowl-black-table_2829-18282.jpg?size=626&ext=jpg&ga=GA1.1.1500486508.1710956728&semt=ais_hybrid",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722421882/recepie-1_wgd6kb.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722421883/Screenshot_2024-07-31_160036_yuzazr.png",
    "https://res.cloudinary.com/dllgqcla4/image/upload/v1722408924/medium-shot-cartoonish-boy-with-burger_23-2151033916_nifeic.avif",
    
  ]
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
    exit: { opacity: 0 }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:p-5 md:ml-20">
        <div className="card card-compact bg-base-100 w-96 shadow-xl  p-4 hover:border hover:scale-95">
          <figure className="relative w-full h-56 overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={time}
                src={images[time]}
                alt="Project"
                className="absolute w-full h-full object-cover rounded-lg"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Giggle chat</h2>
            <p>It's a realtime chat application made using MERN Stack.</p>
            <div className="card-actions justify-start">
              <button className="rounded px-5 py-2 text-white bg-blue-600 ">
                <a target="_blank" rel="noopener noreferrer" href="https://real-time-chat-application-uyhn.vercel.app/">Visit</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl p-4">
          <figure className="relative w-full h-56 overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={time}
                src={justeat[time]}
                alt="Project"
                className="absolute w-full h-full object-cover rounded-lg"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </figure>
          <div className="card-body">
            <h2 className="card-title">JustEat</h2>
            <p>Its a simple food ordering application with vairety of restuarant Collection.</p>
            <div className="card-actions justify-start">
              <button className="rounded px-5 py-2 text-white bg-blue-600 ">
                <a target="_blank" rel="noopener noreferrer" href="https://justeat12.netlify.app/">Visit</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card card-compact bg-base-100 w-96 shadow-xl p-4">
          <figure className="relative w-full h-56 overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={time}
                src={recepie[time]}
                alt="Project"
                className="absolute w-full h-full object-cover rounded-lg"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recepie Finder</h2>
            <p>It a simple recepie finder made using plain html ,css and javascript and using a api .Through this project,I learned handling Apis.</p>
            <div className="card-actions justify-start">
              <button className="rounded px-5 py-2 text-white bg-blue-600 ">
                <a target="_blank" rel="noopener noreferrer" href="https://recipie-finderr.netlify.app/">Visit</a>
              </button>
            </div>
          </div>
        </div>

        
       
      </div>
    </div>
  )
}

export default Project;
