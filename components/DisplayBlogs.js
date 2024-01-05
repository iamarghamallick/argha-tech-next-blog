import React from 'react'
import Link from "next/link"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const DisplayBlogs = ({ allPostsData }) => {
    return (
        <ul className="container">
            {allPostsData.map(({ id, date, title, description, tags }) => (
                <li
                    key={id}
                    className="bg-gray-50 dark:bg-gray-800 m-3 rounded-lg p-6 flex flex-col"
                >
                    <Link href={'/blogposts/' + id} className="text-2xl font-semibold text-purple-900 dark:text-purple-400">
                        {title}
                    </Link>
                    <span className="text-sm my-2">
                        <ul className='flex'>
                            <li className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm p-1 m-1'>{tags[0]}</li>
                            <li className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm p-1 m-1'>{tags[1]}</li>
                            <li className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm p-1 m-1'>{tags[2]}</li>
                        </ul>
                    </span>
                    <span className="text-sm my-2">{description}</span>
                    <p className="flex justify-between">
                        <Link
                            className="text-purple-500 hover:text-purple-400 flex justify-center items-center"
                            href={'/blogposts/' + id}
                        >
                            Read More &nbsp; <BsFillArrowRightCircleFill />
                        </Link>
                        <span className="text-purple-500">Posted on {date}</span>
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default DisplayBlogs