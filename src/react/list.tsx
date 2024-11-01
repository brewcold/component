import { forwardRef, memo, type ComponentPropsWithRef, type ElementType, type Ref } from "react"

type ListProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>

function Component<T extends ElementType>({ as, ...props }: ListProps<T>, ref: Ref<Element>) {
  const Comp = as || "li"

  return (
    <Comp ref={ref} {...props}>
      {props.children}
    </Comp>
  )
}

export const List = memo(forwardRef(Component))
