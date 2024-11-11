import { motion } from "framer-motion";

const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};
const variants_second = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

function Hero() {
    return (
        <div className="-mt-5">
            <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center bg-white">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full lg:w-1/2 bg-white  rounded-lg flex flex-col justify-center items-center p-6"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl md:ml-20 font-bold">
                        <span className="text-blue-500">Hello! I’m Surya,</span> a Passionate Web Developer
                    </h1>
                    <p className="text-gray-700 mt-4 md:ml-20">
                        Welcome  to my corner of the digital world. I’m passionate about crafting innovative and engaging web experiences, and I’m excited to share my journey and projects with you. Dive in and explore what drives me to create!
                    </p>
                    <div className="flex w-full ">
                        <a className=" rounded-md  bg-sky-600 text-white px-5 h-10 md:ml-20 mt-5 flex justify-center items-center"  href="/SuryaPrakashResumeNew__.docx" target="_blank" rel="noopener noreferrer" >Resume </a>

                        <h1 className="mt-5 ml-5 flex font-light hover:underline">   <span className="ml-1 mb-5"><a target="_blank" href="https://www.linkedin.com/in/surya-prakash-89a660248/"><img className="h-10 w-10 rounded" src="https://cdn-icons-png.flaticon.com/128/1384/1384171.png" alt="" /></a></span></h1>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants_second}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full mt-10 md:w-96 h-96 lg:w-1/2  border-white  rounded-lg flex flex-col justify-center items-start p-6 rounded-tl-full rounded-bl-full shadow overflow-hidden"
                    style={{ backgroundImage: "linear-gradient(#DA22FF,#9733EE)" }}
                >



                    <div className="avatar flex justify-center flex-row items-center h-full">
                        <motion.div
                            className="relative h-full w-full flex justify-start items-center"
                        >
                            <img

                                 src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?ga=GA1.1.1500486508.1710956728&semt=sph"
                                className="h-full w-full rounded-full cursor-zoom-out"
                                alt="Coming soon"
                            />
                            Coming soon image

                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-transparent ring-inset ring-1  ring-offset-2"
                                style={{ borderTopColor: 'white' }}
                                animate={{ rotate: 360 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, repeat: 3, ease: 'linear', }}
                            >
                            </motion.div>


                        </motion.div>
                        <div className="absolute  left-96 w-5  h-screen bg-white text-white  p-7 rounded -rotate-45 ml-10" style={{ border: "1px solid white" }}></div>
                        <div className="absolute  left-96 w-5  h-screen bg-white text-white  p-7 rounded -rotate-45 ml-40" style={{ border: "1px solid white" }}></div>
                        <div className="absolute  left-96 w-5  h-screen bg-white text-white  p-7 rounded -rotate-45 ml-72" style={{ border: "1px solid white" }}></div>

                    </div>


                </motion.div>

            </div>
        </div>
    )
}

export default Hero
