import React from 'react'

const Typeography = () => {
  return (
    <div>

      <h1 className='text-3xl'>TYPOGRAPHY</h1>
      <h1 className='text-2xl'>Title 1</h1>
      <h2 className='text-xl'>Title 2</h2>
      <h3 className='text-lg'>Title 3</h3>
      <p className='text-base'>A regular paragraph</p>
      <p className='text-sm'>A description paragraph</p>
      <p className='note text-xs'>A little note</p>

      {/* Custom font-size */}
      <span className='text-amu'>Custom font-size</span>
      
      {/* Arbitary font-size */}
      <span className='text-[5px]'>Arbitary font-size</span>

      {/* Custom font-family */}
      <h1 className='font-display text-3xl'>Font display</h1>
      
      {/* Text styling */}
      <p className='text-right underline decoration-red-500 decoration-wavy'>Text styling</p>
      
      <p className='uppercase w-[200px] truncate'>This is a text which is supposed to be truncated</p>


    </div>
  )
}

export default Typeography

/*  TYPOGRAPHY 

1. The 1st thing to notice by-default tailwind remove the default css of h1, h2, h3, p tag etc which is font-size, boldness, margin etc. So we have to apply it using utility classes of tailwind

2. For font-size we can use utility classes like "text-xs", "text-sm", "text-base" etc.

3. We can customize the font-size and add our new font-size using the customiztion obj in tailwind.config.js 

4. We can also use some arbitary font-size value which tailwind does not provide using square bracket syntax "text-[font-size]" 

5. Tailwind provide us with 3 default font-family which is "font-sans", "font-serif" and "font-mono"

6. We can also do styling on text like "align", "decoration", "color" "line height", "text transform" etc.

TO LEARN MORE GO TO "https://tailwindcss.com/docs/font-family"

*/