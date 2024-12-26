import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import { motion } from "framer-motion"


function Card({data,reference}) {
  return (

        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative h-72 w-56 rounded-[30px] bg-zinc-600 overflow-hidden text-white p-5'>
            < FaRegFileAlt/>
            <p className='text-sm mt-5 font-bold leading-4'>{data.desc}</p>
            <div className='footer absolute bottom-0  left-0  w-full '>
                <div className='flex mb-2 justify-between text-center p-2'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 rounded-full bg-zinc-400 flex items-center justify-center'>
                        
                    {
                        data.close ? <IoIosClose />:<IoMdDownload size='.8em'/>
                    }
                    </span>  

                </div>
               {
                data.tag.isOpen &&(
                    <div className={`tag w-full py-4 ${data.tag.tagcolor==='blue'? 'bg-blue-600':'bg-green-600'} flex items-center justify-center`}>
                {data.tag.tagTitle}

                </div>
                )

               }

               
            </div>

        </motion.div>
    
  )
}

export default Card