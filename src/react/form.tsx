import { type ComponentPropsWithRef, forwardRef, memo, type Ref } from "react"

interface FormProps extends ComponentPropsWithRef<"form"> {}

function Component({ ...props }: FormProps, ref: Ref<HTMLFormElement>) {
  return (
    <form {...props} ref={ref}>
      {props.children}
    </form>
  )
}

export const Form = memo(forwardRef(Component))
