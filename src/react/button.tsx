import { forwardRef, type ComponentPropsWithRef, type ElementType, type Ref } from "react"

export type BtnProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>

function Component<T extends ElementType>({ as, ...props }: BtnProps<T>, ref: Ref<Element>) {
  const Comp = as || "button"

  return (
    <Comp ref={ref} {...props}>
      {props.children}
    </Comp>
  )
}

export const Btn = forwardRef(Component)
