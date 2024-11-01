import { forwardRef, type ComponentPropsWithRef, type Ref } from "react"

interface InputProps extends ComponentPropsWithRef<"input"> {}

function Component({ ...props }: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <input ref={ref} {...props}>
      {props.children}
    </input>
  )
}

export const Input = forwardRef(Component)
