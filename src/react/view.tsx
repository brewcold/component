import { forwardRef, type ComponentPropsWithRef, type ElementType, type Ref } from "react"

type ViewProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>

function Component<T extends ElementType>({ as, ...props }: ViewProps<T>, ref: Ref<Element>) {
  const Comp = (as || "div") as ElementType

  return (
    <Comp ref={ref} {...props}>
      {props.children}
    </Comp>
  )
}

export const View = forwardRef(Component)
