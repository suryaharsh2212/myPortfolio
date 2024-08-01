import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '7488491434'; 
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };
  return (
    <div className="mt-40 md:mt-10">
     <section className=" md:p-20 text-white" >
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 "  style={{ backgroundImage: "linear-gradient(#DA22FF,#9733EE)" }}>
			{/* <span className="block mb-2 text-violet-400">Sent me a note</span>  */}
			<h1 className="text-5xl font-extrabold text-gray-50">Connect with me by sending a Text</h1>
			<p className="my-8">
				<span className="font-medium text-gray-50">Directly DM me</span> 
			</p>
			<form onSubmit={handleSubmit} className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded-md focus:ring focus:ring-violet-400 border-gray-700 text-black" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full p-3 rounded-md focus:ring focus:ring-violet-400 border-gray-700 text-black" />
				</div>
        <div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<textarea id="lastname" value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Your Message" className="w-full p-5 rounded-md focus:ring focus:ring-violet-400 border-gray-700 text-black" />
				</div>
				<button type="submit" className="w-full py-2 font-semibold rounded bg-violet-300 text-gray-900">Send</button>
			</form>
		</div>
		<img src="https://res.cloudinary.com/dllgqcla4/image/upload/v1722500159/undraw_Join_re_w1lh_j3kpwd.png" alt="" className="object-cover h-full w-full rounded-md xl:col-span-3 bg-slate-100" />
	</div>
</section>
    </div>
  )
}

export default Contact
