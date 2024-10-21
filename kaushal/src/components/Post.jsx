import React from 'react'

const Post = ({ thumbnail, authorID, title }) => {
    return (

        <div className='h-[350px] w-[350px] relative rounded-2xl' >
            <img src={thumbnail} alt="" className='h-full w-full object-cover' />
            <div className='absolute bottom-0 ' >
                <div className='w-[350px]'>
                    <h1 className='whitespace-nowrap overflow-hidden text-ellipsis w-full  block' >{title}</h1>
                </div>
                <br />
                <h1 className='whitespace-nowrap overflow-hidden text-ellipsis w-full  block'>author:{authorID}</h1>
            </div>
        </div>


    )
}

export default Post