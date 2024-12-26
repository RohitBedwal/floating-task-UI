import React from 'react'

function Background() {
    return (
        <> 
        <div className=' fixed x-[2] w-full h-screen'>
            <div className='absolute top-[5%] w-full text-xl flex justify-center py-10 text-zinc-400 '>Documents.</div>
            <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900 '>DOCS.</h1>
        </div>
        </>
    )
}

export default Background