import React from 'react'

const Colors = () => {
  return (
    <div>
      <h1>COLORS</h1>
      <h6 className='text-green-600'>Green</h6>
      <h6 className='text-yellow-800'>Yellow</h6>
      <h6 className='bg-red-600 text-neutral-900'>Background Red</h6>
      <h6 className='border border-pink-200 text-neutral-900'>Border Pink</h6>
      <h6 className='text-aman'>Custom Aman Text</h6>
      <h6></h6>
    </div>
  )
}

export default Colors

/*  COLORS 

1. Let say we want to use green color text on h1 element so tailwind class is "text-green-600", It means on tailwind variable "text" we are applying color "green" with "600" as shade or lightness of that color ( from 50, 100, 200 to .... 900 ). 

2. Here if we inspect the element on which utility class is applied and go to the css file where that utility classes are defined we will notice that it is a tailwind css which at the end of file mentioned the rule set of "text-green-600" and apart from it no other rule set related to text color. It means tailwind will add only that classes in final bundled CSS file which we are using in project. 

3. Now similar to text we can apply background color as well using utility "bg-color-shade" , EX "bg-red-600", This will apply background color of red with shade of 600. 

4. Now similarly we can apply border color as well using utility "border-color-shade", EX "border-pink-200", This will apply border of color pink with shade of 200. But before using it have to apply border using "border" utility.

5. If you’d like to completely replace the default color palette with your own custom colors, add your colors directly under the theme.colors section of your tailwind configuration file. EX ::

theme: {
    colors: {
      aman: "#28544d",
    },
  },

  Here now i have only "aman" color available to me and all other color has been overriden. But if i want to add new custom color apart from default tailwind one then we will use "extend" object. EX ::

  theme: {
    extend: {
      colors: {
        aman: "#28544d"  
      },
    },
  },

  Here now new custom color "aman" is available to me

6. 

@@@@ NOTE::Must use tailwind css intellisense as it will help a lot with tailwind utility classes autocomplete. @@@@

TO LEARN MORE GO TO "https://tailwindcss.com/docs/customizing-colors"

*/