import w from 'windstitch'

export const Container = w.div(`
    bg-white
    flex
    justify-center
    flex-1
    relative
    overflow-hidden
    border-[#212121]	

    mobile:max-w-full
    mobile:min-h-full
    mobile:max-h-full
    mobile:border-0
    mobile:h-[100dvh]
    mobile:rounded-none

    laptop:border-[10px]
    laptop:max-w-[375px]
    laptop:max-h-[750px]
    laptop:rounded-[40px]
`)

export const FrameHeader = w.div(`
  bg-black
  w-[50%]
  w-[220px]
  margin-[0 auto]
  h-[30px]
  rounded-bl-[30px]
  rounded-br-[30px]
  z-10
  absolute
  top-0

  mobile:hidden
  laptop:block
`)
