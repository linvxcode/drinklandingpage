'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TlxProps {
    children: ReactNode;
}

const TranslateX = ({children}: TlxProps) => {
  return (
    <motion.div
    initial={{opacity: 0, translateY: -10}}
    animate={{opacity: 1, translateY: 0, transition: {type:'spring',duration: 2}}}
    >
      {children}
    </motion.div>
  )
}

export default TranslateX
