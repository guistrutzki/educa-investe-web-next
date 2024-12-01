import w from 'windstitch'

export const Container = w.div(`
  flex-1
  relative
`)

export const ScrollArea = w.div(`
  flex-1
  max-h-full
  overflow-y-scroll
  no-scrollbar
  pb-[100px]
  pt-[32px]
  px-[16px]
`)
