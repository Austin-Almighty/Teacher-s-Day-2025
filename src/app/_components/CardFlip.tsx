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
    <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 min-h-[500px] min-w-[285px] px-8 py-2'>
        <div className='flip-card relative rounded-md w-full h-full' onClick={handleFlip}>
            <motion.div className='flip-card-inner relative' initial={false} animate={{rotateY: isFlipped ? 180 : 0}} transition={{duration: 0.6}} onAnimationComplete={() => setIsAnimating(false)}>
                <div className='flip-card-front absolute bg-cover border border-white rounded-lg p-2 flex flex-col items-center justify-center w-full h-full'>
                    {front}
                </div>
                <div className='flip-card-back absolute bg-cover border border-white rounded-lg p-2 flex flex-col items-center justify-center w-full h-full rotateY-180'>
                    {back}
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default CardFlip