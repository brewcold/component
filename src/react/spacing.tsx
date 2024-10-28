import { css } from "@emotion/react"
import { memo } from "react"

export interface SpacingProps {
  size: string
  dir?: "v" | "h"
}

export const Spacing = memo(({ size, dir = "v" }: SpacingProps) => {
  if (dir === "v")
    return (
      <div
        css={css`
          height: ${size};
        `}
      />
    )
  return (
    <span
      css={css`
        margin-left: ${size};
      `}
    />
  )
})
