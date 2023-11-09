'use client'
import React,{ReactNode} from 'react'
import { motion } from 'framer-motion'

interface LayoutsProps {
    children: ReactNode;
}

const Layouts = ({children}: LayoutsProps) => {
  return (
    <motion.div 
    initial={{opacity: 0, translateY: -100, rotate: 10}}
    animate={{opacity: 1, translateY: 0,rotate: 0, transition: {type: 'spring', duration:2}}}
    >
     {children} 
    </motion.div>
  )
}

export default Layouts
