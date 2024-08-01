import React from 'react';
import { motion, useInView } from 'framer-motion';

function SectionTech() {
   

    return (
        <div className='md:p-10 md:mt-40 '>
            <section className="m-4 md:m-8  text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl text-violet-950 font-bold">Experience with Technologies</h2>
                    <p className="text-gray-400"></p>
                </div>
                <div className="container mx-auto grid justify-center p-5 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Tech.map((element, index) => (
                        <InViewComponent key={index} index={index} element={element} />
                    ))}
                </div>
            </section>
        </div>
    )
}

const InViewComponent = ({ element, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center p-5 bg-white hover:bg-slate-100 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg text-zinc-800"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <img className='h-20 w-15' src={element.link} alt="Error in loading" />
            <h3 className="my-3 text-3xl font-semibold">{element.name}</h3>
            <div className="space-y-1 leading-tight">
                <p>{element.content}</p>
            </div>
        </motion.div>
    );
}
const Tech = [
    {
        name: "Express.js",
        link: "https://th.bing.com/th?id=OIP.igsTOJNvPT5roAeEEwUn7QAAAA&w=169&h=169&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        content: "Fast, unopinionated, minimalist web framework for Node.js"
    },
    {
        name: "Node.js",
        link: "https://res.cloudinary.com/dllgqcla4/image/upload/v1722496231/nodejs-removebg-preview_ervbjk.png",
        content: "JavaScript runtime built on Chrome's V8 JavaScript engine"
    },
    {
        name: "Vite-React",
        link: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
        content: "Worked with React in all my projects using Vite"
    },
    {
        name: "Tailwind CSS",
        link: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png",
        content: "Utility-first CSS framework for rapid UI development"
    },
    {
        name: "MongoDB",
        link: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png",
        content: "NoSQL database for modern applications"
    },
    {
        name: "JavaScript",
        link: "https://cdn-icons-png.flaticon.com/128/919/919828.png",
        content: "Programming language of the Web"
    },
    {
        name:"Java",
        link:"https://cdn-icons-png.flaticon.com/128/226/226777.png",
        content:"Working on DSA using Java"
    },
    {
        name: "SocketIo",
        link: "https://th.bing.com/th?id=OIP.KIyvidnjJHQFXMc3_ob3YwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        content: "Full-duplex communication channels over a single TCP connection"
    },
    {
        name: "Redux Toolkit",
        link: "https://res.cloudinary.com/dllgqcla4/image/upload/v1722496231/redux-removebg-preview_oxiicy.png",
        content: "Official, recommended way to write Redux logic"
    },
    {
        name: "Ably",
        link: "https://th.bing.com/th/id/OIP.e_0-GNZxvuzmixYSJtJ9BAAAAA?w=139&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        content: "Platform for real-time data delivery"
    },
    {
        name: "Cloudinary",
        link: "https://th.bing.com/th?id=OIP.82kz9qEta_iEtdQsp6UuZAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        content: "Cloud-based image and video management solution"
    },
    {
        name:"NextJS",
        link:"https://th.bing.com/th/id/OIP.l7Sf8CQ7XDFbiN0JRc7vOAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        content:"Currently Working on Next JS learn modrn routing and rendering"

    }
];

export default SectionTech;
