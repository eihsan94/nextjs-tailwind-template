import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import { useState } from 'react'
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="h-screen bg:white dark:bg-gray-700 flex items-center">
      <div className="container mx-auto">
        <p className="font-bold text-5xl text-black dark:text-white mb-10">
          yokoso
        </p>

        <div onClick={() => setDarkMode(!darkMode)}>
          <Button label="Dark Mode" />
        </div>
      </div>
    </div>
    <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" >
          <div className="h-40 bg-gray-200 rounded shadow" >

          </div>
          <div className="h-40 bg-gray-200 rounded-full shadow" ></div>
          <div className="h-40 bg-gray-200 rounded-full shadow" ></div>
          <div className="h-40 bg-gray-200 rounded-full shadow" ></div>
          <div className="h-40 bg-gray-200 rounded-full shadow" ></div>
          <div className="h-40 bg-gray-200 rounded-full shadow" ></div>
        </div>    
      </div>
    </div>
  )
}
