import React from 'react'

const Padding = () => {
  return (
    <div>
     <h1>Padding</h1>
     
     <div className='bg-red-300 p-2'>Padding All</div>
     <div className='bg-blue-300 pl-4'>Padding Left</div>
     <div className='bg-green-300 px-5'>Padding Horizontal</div>
     <div className='bg-yellow-300 py-3'>Padding Vertical</div>

     <h1>Margin</h1>
     
     <div className='bg-red-300 m-2'>Margin All</div>
     <div className='bg-blue-300 ml-4'>Margin Left</div>
     <div className='bg-green-300 mx-5'>Margin Horizontal</div>
     <div className='bg-yellow-300 my-3'>Margin Vertical</div>
     <div className='bg-slate-500 -mt-5'>-Ve Margin Top</div>
     
     <h1>Width</h1>
     
     <div className='bg-red-300 w-23 m-2'>Width</div>
     <div className='bg-blue-300 w-full m-2'>Full Width</div>
     <div className='flex m-2'>
      <div className='bg-green-400 w-2/5'>Left</div>
      <div className='bg-yellow-400 w-2/5'>Right</div>
     </div>

    </div>
  )
}

export default Padding

/* SPACE AND SIZES

1. For padding using tailwind we have utility classes like "p-1" (apply padding on all direction with default space 1), "px-1" (apply padding in left and right directio with default space 1), "py-1" (apply padding in up and down direction with default space 1) and for individual direction we have "pt-1" (padding top), "pb-1" (padding bottom), "pl-1" (padding left) and "pr-1" (padding right)

2. For margin same as padding just use "m" instead of "p" in utility classes so it will be "mt-1" (margin top), "mb-1" (margin bottom), "ml-1" (margin left) and "mr-1" (margin right)

3. Here margin can be negative as well so in this case to apply negative margin just add "-" symbol before utility classes, EX "-mt-2" (It will add -ve margin of size 2 on top)

4. For width also same concept "w-px". For Ex "w-23". But we can give in percent as well using fraction utility like, "w-1/2" (will take half of parent width by dividing whole parent into 2 half), "w-3/5" (will take one by 3rd of parent width by dividing whole parent into 5 part).

*/