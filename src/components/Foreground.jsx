import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
  const ref =useRef(null);

  const data=[
   { desc :'Tomorrow is my Birthday ' ,
    filesize:'.5mb',
    close: true,
    tag:{isOpen: true ,tagcolor:'blue',tagTitle:'Download Now'}

    },
    { desc :'Tomorrow is my Birthday ' ,
      filesize:'.5mb',
      close: false,
      tag:{isOpen: true ,tagcolor:"green",tagTitle:'Download Now'}
  
      }
      ,
      { desc :'Tomorrow is my Birthday ' ,
        filesize:'.5mb',
        close: true,
        tag:{isOpen: true ,tagcolor:"blue",tagTitle:'Download Now'}
    
        },
      { desc :'Tomorrow is my Birthday ' ,
        filesize:'.5mb',
        close: true,
        tag:{isOpen: false ,tagcolor:"green",tagTitle:'Download Now'}
    
        }
  ]
  return (
    <div ref={ref} className='fixed w-full flex-shrink-0 h-full z-[3] flex gap-x-5  top-0 left-0 flex-wrap p-5' 
      
    >
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>

      ))}


    </div>

    

  )
}

export default Foreground