import { forwardRef, type ComponentPropsWithRef, type Ref } from "react"

export interface LabelProps extends ComponentPropsWithRef<"label"> {}

function Component({ ...props }: LabelProps, ref: Ref<HTMLLabelElement>) {
  return (
    <label ref={ref} {...props}>
      {props.children}
    </label>
  )
}

export const Label = forwardRef(Component)
