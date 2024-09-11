import{CONTACT} from "../constants" 
import {motion} from "framer-motion"



const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration:0.5}}
        
        className="my-10 text-center text-4xl">Entre em Contato</motion.h2>
        <div className="text-center tracking-tighter">
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration:1}}
          className="my-4">{CONTACT.address}</motion.p>
          <motion.p 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y: -100}}
          transition={{duration:0.5}}
          className="my-4">{CONTACT.phoneNo}</motion.p>
          <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-700 bg-clip-text  racking-tight text-transparent">
           Marcos Diego | Todos direitos reservados  </div>
          
          </div>
        </div>
  );
};

export default Contact;