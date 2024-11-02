import { css } from "@emotion/react"
import { forwardRef, type ComponentPropsWithRef, type Ref } from "react"

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

function Component({ ...props }: TextAreaProps, ref: Ref<HTMLTextAreaElement>) {
  return (
    <textarea
      ref={ref}
      {...props}
      css={css`
        resize: "none";
      `}
    >
      {props.children}
    </textarea>
  )
}

export const TextArea = forwardRef(Component)
