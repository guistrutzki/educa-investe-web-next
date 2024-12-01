import w from "windstitch";

export const Container = w.div(`
  relative
  my-[16px]  
  flex-row
  border-[1px]
  border-black
  rounded-md
  mx-8
`);

export const Field = w.input(`
  h-8
  w-full
  py-[2px]
  px-2
  text-black
  text-sm
`);

export const Button = w.button(`
absolute
right-[2px]
bottom-[5px]
`);

export const SendIcon = w.img(`
  
`);
