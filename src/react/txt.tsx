import { forwardRef, type ComponentPropsWithRef, type ElementType, type Ref } from "react"

type TextProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>

function Component<T extends ElementType>({ as, ...props }: TextProps<T>, ref: Ref<Element>) {
  const Comp = (as || "span") as ElementType

  return (
    <Comp ref={ref} {...props}>
      {props.children}
    </Comp>
  )
}

export const Txt = forwardRef(Component)
