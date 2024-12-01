import w from 'windstitch'

export const Container = w.div(
  `
  flex-1
  relative
`,
  {}
)

export const ScrollArea = w.div(
  `
  flex-1
  max-h-full
  overflow-y-scroll
  no-scrollbar
  pb-[100px]
  pt-[32px]
  px-[16px]

  mobile:pt-[100px]
`,
  {}
)

export const TypingIndicator = w.div(
  `
  absolute
  bottom-[90px]
  left-[16px]
  z-10
  flex
`,
  {}
)

export const AvatarWrapper = w.div(
  `
  border
  border-black
  flex
  items-center
  justify-center
  min-w-[30px]
  h-[30px]
  rounded-full
  bg-green-light
`,
  {}
)

export const Avatar = w.img(
  `
  w-[20px]
`,
  {}
)

export const TypingIndicatorDotsWrapper = w.div(
  `
  ml-[8px]
  bg-green-primary
  w-[40px]
  flex
  items-center
  justify-between
  px-[12px]
  rounded
`,
  {}
)

export const Dots = w.div(
  `
  w-[4px]
  h-[4px]
  bg-black
  rounded-full
`,
  {
    variants: {
      index: (index: number) => `animate-bounce${index}`,
    },
    defaultVariants: {
      index: 1,
    },
  }
)
