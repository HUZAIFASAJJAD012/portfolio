import seperator from './seperator.png'
import { useState } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
    const [name,Setname] = useState('')
    const [email,setEmail] = useState('')
    const [nb,setNb] = useState('')
    const [msg,setMsg] = useState('')


    const sendEmail = (e) =>{
        e.preventDefault();

        const srvcId = 'service_w8ylmbe'
        const tpltId = 'template_6eivc5e'
        const pblcKey = 'rF7SqZZXl82lyg1Qd'

        const TempelateParams = {
            from_Name : name,
            from_Email : email,
            Number : nb,
            Message :msg,
        };

        emailjs.send
        (
            srvcId,tpltId,
        // 'service_w8ylmbe',
        // 'template_iiegrkq',
         TempelateParams,pblcKey
        // 'public_rF7SqZZXl82lyg1Qd'

        )
        .then((res)=>{
          
            alert('Message sent!'+res)
        }).catch((error)=>{
            alert("sorry for this error"+error);
            Setname('')
            setEmail('')
            setNb('')
            setMsg('')
        })
    };


    return (
     <>
     <form onSubmit={sendEmail}>
     < div  className="w-full text-center items-center flex flex-col gap-8 max-w"style={{
            background: "radial-gradient(circle, #1A151500 14%, #01010129 100%)"
          }} >
            <h2 className="text-4x1 border-4 border-black px-[30px] py-[6px] tracking-widest  bg-transparent font-bold mt-24">CONTACT</h2>
            <p className="text-center max-w-2xl text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque nemo eius assumenda, reiciendis eveniet quos recusandae </p>
            <img src={seperator} className=" mt-8 w-40 h-auto mx-auto"></img>
            <input placeholder="ENTER YOUR NAME" type="text"   style={{ boxShadow: '-5px 5px 0px 0px' }} onChange={(e)=>Setname(e.target.value)} className="w-[90%] md:w-[48%] pt-2 pb-1 pl-8 focus:outline-none bg-transparent placeholder-gray-400 relative z-10" ></input>
            <input placeholder="ENTER YOUR EMAIL" type="email" onChange={(e)=>setEmail(e.target.value)}  style={{ boxShadow: '-5px 5px 0px 0px' }} className="w-[90%] md:w-[48%] pt-2 pb-1 pl-8 focus:outline-none bg-transparent placeholder-gray-400 relative z-10"></input>
            <input placeholder="ENTER YOUR TELEPHONE" type="tel" onChange={(e)=>setNb(e.target.value)}  style={{ boxShadow: '-5px 5px 0px 0px' }} className="w-[90%] md:w-[48%] pt-2 pb-1 pl-8 focus:outline-none bg-transparent placeholder-gray-400 relative z-10"></input>
            <textarea placeholder="YOUR MESSAGE" rows={8} onChange={(e)=>setMsg(e.target.value)}   style={{ boxShadow: '-5px 5px 0px 0px' }} className="w-[90%] md:w-[48%] pt-2 pb-1 pl-8 focus:outline-none bg-transparent placeholder-gray-400 relative z-10 mb-10 py-10" ></textarea>
            <button className="tracking-widest text-sm font-medium px-14 py-4 border-l border-r border-black hover:bg-black hover:text-white transition-colors mb-10" type='submit'>SUBMIT</button>

        </div>
     </form>
     </>
    );

} 
export default Contact;