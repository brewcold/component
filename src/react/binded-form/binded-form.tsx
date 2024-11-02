import { createUseFormContext, useForm, UseFormArgs } from "@syyu/util/react"
import { Form } from "../form"
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, forwardRef, Ref, useContext } from "react"
import { Input } from "../input"
import { Btn, BtnProps } from "../button"
import { Label } from "../label"

export const BindedFormContext = createUseFormContext<Record<string, any>>()

type BindedFormProps<T extends Record<string, any>> = ComponentPropsWithoutRef<"form"> & {
  initialValues: T
  onSubmit: (data: T) => void
  validator?: (data: T) => boolean
}

export function BindedForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validator,
  ...props
}: BindedFormProps<T>) {
  const useFormConfig: UseFormArgs<T> = { initialValues, onSubmit, validator }

  const { values, submit, handleChange, refs } = useForm<T>(useFormConfig)

  return (
    <BindedFormContext.Provider value={{ values, submit, handleChange, refs }}>
      <Form
        onSubmit={e => {
          e.preventDefault()
          submit()
        }}
      >
        {props.children}
      </Form>
    </BindedFormContext.Provider>
  )
}

BindedForm.Input = forwardRef(
  ({ name, ...props }: { name: string } & ComponentPropsWithRef<"input">, ref: Ref<HTMLInputElement>) => {
    const CTX = useContext(BindedFormContext)

    const value = CTX?.values?.[name] || ""
    return <Input value={value} onChange={CTX?.handleChange || (() => {})} ref={ref} {...props} />
  }
)

BindedForm.Button = forwardRef(<T extends ElementType>({ ...props }: BtnProps<T>, ref: Ref<Element>) => {
  return (
    <Btn ref={ref} {...props}>
      {props.children}
    </Btn>
  )
})

BindedForm.Label = forwardRef(({ ...props }: ComponentPropsWithRef<"label">, ref: Ref<HTMLLabelElement>) => {
  return (
    <Label ref={ref} {...props}>
      {props.children}
    </Label>
  )
})
