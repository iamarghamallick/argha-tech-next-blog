'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoonStars } from 'react-icons/bs';

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    if(!mounted) {
        return null;
    }
    
    return (
        <button className='mx-3' onClick={() => { setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') }}>{resolvedTheme == 'dark' ? (<BsSun size={30} />) : (<BsMoonStars size={30} color='black' />)}</button>
    )
}

export default ThemeButton