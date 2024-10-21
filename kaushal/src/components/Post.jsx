import React from 'react';
import '../app/global.css';
import Link from 'next/link';

const Post = ({ thumbnail, authorID, title, id }) => {
    return (
        <div className="relative rounded-2xl border-gray-200 border-2 overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl w-[350px] lg:w-[370px]">

            <div className="relative h-[250px] w-full">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" style={{ top: '50%' }} ></div>
            </div>


            <div className="p-4 bg-white rounded-b-2xl">

                <div className='w-'>
                    <h1 className="text-xl font-bold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                        {title}
                    </h1>
                </div>


                <span className="text-sm text-gray-600 block mb-2">
                    By: {authorID}
                </span>


                <Link href={`/Blogs/${id}`}>
                    <div className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors inline-block">
                        Learn More
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Post;
