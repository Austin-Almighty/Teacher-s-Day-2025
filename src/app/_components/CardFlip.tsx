import React, { useState } from 'react'
import {motion} from "motion/react";

type CardFlipProps = {
    children: React.ReactNode;
}
const CardFlip = ({children}: CardFlipProps) => {
  const childArray = React.Children.toArray(children);
  const front = childArray[0] ?? null;
  const back = childArray[1] ?? null;

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
        }
    }   
  return (
    <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 min-h-[600px]'>
        <div className='flip-card relative rounded-md w-72 h-48 sm:w-96 sm:h-64' onClick={handleFlip}>
            <motion.div className='flip-card-inner relative' initial={false} animate={{rotateY: isFlipped ? 180 : 0}} transition={{duration: 0.6}} onAnimationComplete={() => setIsAnimating(false)}>
                <div className='flip-card-front absolute inset-0 bg-cover border-1 rounded-lg p-4 flex flex-col items-center justify-center w-fit h-fit'>
                    {front}
                </div>
                <div className='flip-card-back absolute inset-0 bg-cover border-1 rounded-lg p-4 flex flex-col items-center justify-center w-fit h-fit'>
                    {back}
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default CardFlip