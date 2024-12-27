import React from "react";



const PortfolioCards=(props)=>{

    return(
        <>
        <div className="flex">
        
        <div
  className="h-[280px] w-[450px] object-cover font-montserrat rounded-sm text-white  relative"
  // style={{ backgroundImage: `url(${props.src})` }}
>
                  <img src={props.src} alt="" className="inset-0 h-full w-full object-cover absolute" />
                  <div className="items-center absolute  pt-20 " >
                          <ul className="text-white    justify-items-center mx-5 ">
                            <li className="text-xs  pt-5">{props.p1}</li>
                            <li className="text-2xl pt-2  font-bold  tracking-widest">{props.h1}</li>
                            <li className=" text-xs font-thin pt-2">{props.p2}</li>
                          </ul>
                          
                     
                          {/* <div className="mt-5 tracking-normal mx-14">
                  <button className="tracking-widest text-sm font-medium  px-3 py-1 border-l-2  border-r-2 mr-3  mb-10">DEMO</button>
                  <button className="tracking-widest text-sm font-medium px-3  py-1 border-l-2 border-r-2   mb-10">SUBMIT</button>
                  </div> */}
                  </div>

                  
                  


              </div>
        
              </div>
        </>
    );
}

export default PortfolioCards;