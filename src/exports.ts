import { BindedForm, BindedFormContext } from "./react/binded-form/binded-form"
import { Btn } from "./react/button"
import { Flex } from "./react/flex"
import { Form } from "./react/form"
import { Input } from "./react/input"
import { Label } from "./react/label"
import { List } from "./react/list"
import { Spacing } from "./react/spacing"
import { TextArea } from "./react/textarea"
import { Txt } from "./react/txt"
import { View } from "./react/view"

export const Bc = {
  BindedForm,
  BindedFormContext,
  Btn,
  Flex,
  Form,
  Input,
  Label,
  List,
  Spacing,
  TextArea,
  Txt,
  View,
}
export interface BcTypes {
  BindedForm: typeof BindedForm
  BindedFormContext: typeof BindedFormContext
  Btn: typeof Btn
  Flex: typeof Flex
  Form: typeof Form
  Input: typeof Input
  Label: typeof Label
  List: typeof List
  Spacing: typeof Spacing
  TextArea: typeof TextArea
  Txt: typeof Txt
  View: typeof View
}
