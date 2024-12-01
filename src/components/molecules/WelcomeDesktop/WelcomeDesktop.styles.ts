import w from 'windstitch'

export const Container = w.div(`
  flex
  items-center
  flex-1
  flex-col
  mr-[10%]
  gap-[40px]
`)

export const LogoImage = w.img(`
  w-[160px]
  mb-10
`)

export const Title = w.h1(`
  text-4xl
  font-bold
  text-white
  text-center
`)

export const Description = w.p(`
  text-2xl
  text-white
  text-center
  max-w-[90%]
`)
