import React from "react";



const PortfolioCards=(props)=>{

    return(
        <>
        
        
        <div
  className="h-[250px] w-[300px] object-cover font-montserrat rounded-sm text-white"
  style={{ backgroundImage: `url(${props.src})` }}
>
                  
                  <div className="items-center  pt-20 " >
                          <ul className="text-white    justify-items-center ">
                            <li className="text-xs">{props.p1}</li>
                            <li className="text-2xl font-bold">{props.h1}</li>
                            <li className=" text-xs">{props.p2}</li>
                          </ul>
                          
                          <div className="mt-5 tracking-normal mx-14">
                  <button className="tracking-widest text-sm font-medium  px-3 py-1 border-l-2  border-r-2 mr-3  mb-10">DEMO</button>
                  <button className="tracking-widest text-sm font-medium px-3  py-1 border-l-2 border-r-2   mb-10">SUBMIT</button>
                  </div>
                  </div>
                  


              </div>
        
        
        </>
    );
}

export default PortfolioCards;