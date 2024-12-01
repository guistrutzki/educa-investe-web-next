import w from 'windstitch'
import type { User } from './ChatMessage'

export const Container = w.div(
  `
  flex
  mt-[8px]
  flex-row
`,
  {
    variants: {
      user: (user: User) => (user === 'user' ? 'flex-row-reverse' : ''),
    },
    defaultVariants: {
      user: 'user',
    },
  }
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
`,
  {
    variants: {
      user: (user: User) =>
        user === 'user' ? 'bg-green-dark' : 'bg-green-light',
    },
    defaultVariants: {
      user: 'user',
    },
  }
)

export const Avatar = w.img(`
  w-[20px]
`)

export const ContentWrapper = w.div(
  `
  flex-col
  rounded
  max-w-[80%]
  p-[8px]
`,
  {
    variants: {
      user: (user: User) =>
        user === 'user'
          ? 'bg-green-dark rounded-tr-none mr-[8px]'
          : 'bg-green-light rounded-tl-none ml-[8px]',
    },
    defaultVariants: {
      user: 'user',
    },
  }
)

export const Message = w.p(
  `
  text-sm
`,
  {
    variants: {
      istitle: (istitle: boolean) => (istitle ? 'font-bold' : ''),
      user: (user: User) =>
        user === 'user'
          ? 'rounded-tr-none text-white'
          : 'rounded-tl-none text-black',
    },
    defaultVariants: {
      user: 'user',
      istitle: false,
    },
  }
)

export const Description = w.p(`
  text-xs
  text-black
  mt-[8px]
`)
