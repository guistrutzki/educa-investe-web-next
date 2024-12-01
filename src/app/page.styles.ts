import w from 'windstitch'

export const Container = w.main(`
  flex
  bg-gradient-to-l from-green-dark from-20% via-black via-90%
  min-h-screen
  items-center

  mobile:justify-center
  mobile:px-0

  laptop:justify-start
  laptop:px-[10%]
`)
