import { css } from "@emotion/react"
import { type ComponentPropsWithRef, forwardRef, memo, Ref } from "react"

interface FlexProps extends ComponentPropsWithRef<"div"> {
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

function Component(
  {
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
  }: FlexProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
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
    />
  )
}

export const Flex = memo(forwardRef(Component))
