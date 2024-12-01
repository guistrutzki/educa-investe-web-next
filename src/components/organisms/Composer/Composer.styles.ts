import w from 'windstitch'

export const Container = w.div(`
  absolute
  bottom-0
  w-full
  bg-white
  left-0
  pt-[16px]
  pb-[16px]
  border-t
  border-[rgba(112,223,11,0.1)]
`)

export const InputWrapper = w.div(`
  relative
  flex-row
  flex
  min-h-[40px]
  rounded-md
  border-black
  border
  mx-8
  overflow-hidden
`)

export const Field = w.input(`
  h-8
  w-full
  h-[40px]
  px-2
  text-black
  text-sm
`)

export const Button = w.button(`
  absolute
  right-[10px]
  top-[calc(50%-10px)]
`)

export const SendIcon = w.img(`
  
`)
