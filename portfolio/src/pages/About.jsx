import React from 'react'
import seperator from './seperator.png'
import design from './Design.png'
import development from './development.png'
import main from './mainReal.png'
import boot from './bootstrap.png'
import c from './C.png'
import cP from './C++.png'
import html from './html.png'
import js from './Group.png'
import git from './got.png'
import mongo from './mongo.png'
import node from './node js.png'
import react from './react.png'
import ts from './ts.png'
import sql from './sql.png'
import css from './css.png'
import sass from './saas.png'
import gb from './GB.png'
import sp from './spain.png'
const About = () => {
  return (
    <div  className="text-center items-center flex flex-col gap-8  "style={{
      background: "radial-gradient(circle, #1A151500 14%, #01010129 100%)"
    }} >

      
        {/* Top  */}
        {/* Section Header 1  */}
        <h2 className="text-4x1 border-4 border-black px-[30px] py-[6px] tracking-widest  bg-transparent font-bold mt-24">ABOUT ME</h2>
        <p className="text-center max-w-2xl text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque nemo eius assumenda, reiciendis eveniet quos recusandae </p>
        <button className="tracking-widest text-sm font-medium px-14 py-4 border-l border-r border-black hover:bg-black hover:text-white transition-colors">EXPLORE</button>


          {/* Middle */}
        {/* hr deisgn  */}
        <img src={seperator} className=" mt-8 w-40 h-auto mx-auto"></img>
          

          {/* Bottom  */}
        {/* Design | Development | Maintenence  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto my-16 px-4">
            <div className="flex flex-col items-center text-center">
                <img src={design}  className="w-16 h-16 mb-4 opacity-20"></img>
                <h3 className="text-xl font-bold tracking-wider uppercase mb-4">DESIGN</h3>
                <p className="text-gray-700 leading-relaxed">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div className="flex flex-col items-center text-center">
            <img src={development}  className="w-16 h-16 mb-4 opacity-20"></img>
            <h3 className="text-xl font-bold tracking-wider uppercase mb-4">DEVELOPMENT</h3>
            <p className="text-gray-700 leading-relaxed">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={main}  className="w-16 h-16 mb-4 opacity-20"></img>
              <h3 className="text-xl font-bold tracking-wider uppercase mb-4">MAINTENANCE</h3>
             <p className="text-gray-700 leading-relaxed">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
        </div>
        <img src={seperator}  className="w-40 h-auto mx-auto mb-8"></img>

        {/* Section Header 2 */}
        {/* Top  */}

        <div className="flex flex-col items-center gap-12 max-w-6xl w-full px-4">
        <h1 className="text-4x1 border-4 border-black px-[60px] py-[20px] tracking-widest  bg-transparent font-bold  mb-10">SKILLS</h1>

   {/* Using Now  secktion*/}
   <div className="w-full">
   

       <h2 className="text-2xl font-bold tracking-wider uppercase mb-8 text-left">USING NOW:</h2>
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10" >
    {[
        { img: html, name: "HTML5" },
        { img: css, name: "CSS3" },
        { img: sass, name: "SASS" },
        { img: js, name: "JAVASCRIPT" },
        { img: react, name: "REACT" },
        { img: boot, name: "BOOTSTRAP" },
        { img: git, name: "GIT" },
        { img: html, name: "HTML" },
    ].map((skill) => (
        <div key={skill.name} className="flex flex-col items-center gap-1">
            <img src={skill.img} alt={skill.name} className="w-19 h-16" />
            <small className="font-medium">{skill.name}</small>
        </div>
    ))}
</div>
   </div>

   {/* Learning */}
   <div className="w-full ">
       <h2 className="text-2xl font-bold tracking-wider uppercase mb-8">LEARNING:</h2>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
           {[
               { img: node, name: "NODEJS" },
               { img: sql, name: "MySQL" },
               { img: mongo, name: "MONGODB" },
               { img: ts, name: "TYPESCRIPT" }
           ].map((skill) => (
               <div key={skill.name} className="flex flex-col items-center gap-2">
                   <img src={skill.img} alt={skill.name} className="w-16 h-16" />
                   <small className="font-normal text-[black] ">{skill.name}</small>
               </div>
           ))}
       </div>
   </div>

   {/* Other Skills */}
   <div className="w-full">
       <h2 className="text-2xl font-bold tracking-wider uppercase mb-8">OTHER SKILLS:</h2>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
           {[
               { img: gb, name: "ANGIELSKI C1/C2" },
               { img: sp, name: "HISZPAŃSKI B1/B2" },
               { img: c, name: "C" },
               { img: cP, name: "C++" }
           ].map((skill) => (
               <div key={skill.name} className="flex flex-col items-center gap-2  mb-24">
                   <img src={skill.img} alt={skill.name} className="w-16 h-16" />
                   <small className="font-medium whitespace-pre-line">{skill.name}</small>
               </div>
           ))}
       </div>
   </div>
</div>
        
        
        
    </div>
  )
}

export default About
