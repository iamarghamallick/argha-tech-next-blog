import React, { useState } from 'react'
import ThemeButton from './ThemeButton';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-300 dark:bg-gray-800 sticky top-0 left-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-gray-950 dark:text-gray-50 text-2xl"><Link href="/">ArghaTech</Link></div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium">Home</Link>
                                <Link href="/blog" className="text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium">Blog</Link>
                            </div>
                        </div>
                        <ThemeButton />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="bg-gray-400 dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-500 dark:hover:bg-gray-700"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>)
                                : (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                                ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>)}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link onClick={() => toggleNavbar()} href="/" className="text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Home </Link>
                        <Link onClick={() => toggleNavbar()} href="/blog" className="text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Blog </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar