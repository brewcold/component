import { type ComponentPropsWithRef, forwardRef, memo } from "react"

interface FormProps extends ComponentPropsWithRef<"form"> {}

function Component({ ...props }: FormProps) {
  return <form {...props}>{props.children}</form>
}

export const Form = memo(forwardRef(Component))
