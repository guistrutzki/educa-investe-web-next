import w from 'windstitch'

export const Container = w.div(`
  flex
  flex-1
  items-center
  justify-between
  flex-col
  p-[40px]
  pt-[50%]
`)

export const ContentWrapper = w.div(`
  flex
  flex-col
  items-center
`)

export const LogoImg = w.img(`
  w-[100px]
  mb-[24px]
`)

export const Message = w.p(`
    text-center
    leading-8
    text-md
    text-black
`)

export const Button = w.button(`
    bg-green-light
    h-[40px]
    w-full
    rounded
    text-black
    border
    border-green-primary
`)
