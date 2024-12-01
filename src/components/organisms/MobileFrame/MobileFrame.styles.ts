import w from 'windstitch'

export const Container = w.div(`
    bg-white
    max-w-[375px]
    h-[calc(100vh-120px)]
    max-h-[750px]
    rounded-[40px]
    flex
    justify-center
    flex-1
    relative
    overflow-hidden
    pt-[100px]
    border-[10px]
    border-[#212121]	
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
`)
