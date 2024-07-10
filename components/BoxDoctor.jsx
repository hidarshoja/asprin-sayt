"use client";

import React, { useState } from 'react';

export default function BoxDoctor({ id, title, src  , src2}) {

  const [currentSrc, setCurrentSrc] = useState(src);

  return (
     <div
      className='w-[108px] h-[108px] rounded-2xl bg-white shadow-lg gap-4 flex flex-col items-center justify-center  cursor-pointer'
      onMouseEnter={() => setCurrentSrc(src2)}
      onMouseLeave={() => setCurrentSrc(src)}
    >
      <img src={currentSrc} className='w-[60px] h-14' alt={title} />
      <p className='text-colorText text-[10px] font-bold'>{title}</p>
    </div>
  )
}
