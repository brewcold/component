import { css } from "@emotion/react"
import { forwardRef } from "react"

function Component() {
  return (
    <span
      css={css`
        color: "red";
        font-family: "monospace";
      `}
    >
      hi
    </span>
  )
}

export const Example = forwardRef(Component)
