import w from 'windstitch'

export const Container = w.header(`
  w-full
  bg-white
  absolute
  top-0
  left-0
  flex
  items-center
  justify-center
  shadow-md

  mobile:pt-0
  mobile:h-[80px]

  laptop:pt-[30px]
  mobile:h-[100px]
  z-10
`)

export const LogoImage = w.img(`
  w-[90px]
`)
