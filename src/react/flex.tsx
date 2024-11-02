import { css } from "@emotion/react"
import { type ComponentPropsWithRef, type ElementType, forwardRef, memo, Ref } from "react"

type FlexProps<T extends ElementType> = ComponentPropsWithRef<ElementType> & {
  as?: T
  display?: "flex" | "inline-flex"
  flexDirection?: "row" | "column"
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
  justifyContent?: "start" | "end" | "center" | "flex-start" | "flex-end" | "stretch"
  alignItems?:
    | "start"
    | "end"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
  flexFlow?: string
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string
  flex?: string
}

function Component<T extends ElementType>(
  {
    as,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    flexFlow,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    ...props
  }: FlexProps<T>,
  ref: Ref<HTMLDivElement>
) {
  const Comp = as || "div"
  return (
    <Comp
      css={css`
        display: ${display === "inline-flex" ? "inline-flex" : "flex"};
        flex: ${flex || 1};
        flex-basis: ${flexBasis || "auto"};
        flex-direction: ${flexDirection || "row"};
        flex-grow: ${flexGrow || 1};
        flex-shrink: ${flexShrink || 1};
        flex-wrap: ${flexWrap || "nowrap"};
        align-items: ${alignItems || "flex-start"};
        justify-content: ${justifyContent || "flex-start"};
        flex-flow: ${flexFlow};
      `}
      {...props}
      ref={ref}
    >
      {props.children}
    </Comp>
  )
}

export const Flex = memo(forwardRef(Component))
