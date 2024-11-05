# @syyu/component

## Basic React Component System

Boilerplate components exclude styling

`npm install @syyu/component`
`yarn add @syyu/component`

[https://www.npmjs.com/package/@syyu/component](https://www.npmjs.com/package/@syyu/component)

[About(KOR)](https://www.brewcoldblue.com/engineering/boilerplate-react-component-system)

## API

`*`: polymorphic - can be rendered as specific markup by "as" prop

- Bc.Button\* (`<button>`)
- Bc.Flex\*
- Bc.Form (`<form>`)
- Bc.BindedForm (form, input, label, button) + Bc.BindedFormContext
- Bc.Input (`<input>`) / Bc.TextArea ('`<textarea>`')
- Bc.Label (`<label>`)
- Bc.List\* (`<ul>`, `<ol>`, `<li>`, ...)
- Bc.Spacing (`<div>`, ...)
- Bc.Txt\* (`<hn>`, `<span>`, `<p>`, ...)
- Bc.View\* (`<div>`, ...)

### Example

```
<Bc.Txt as="p">...</Bc.Txt>
<Bc.Spacing dir="h" size="3rem" />
<Bc.Flex flexDirection="row" flexWrap=...>...</Bc.Flex>
```

### Example: BindedForm

`**` [useForm API](https://github.com/brewcold/util/blob/main/react/src/use-form/README.md)

```
...
const handleSubmit = ({id, password}) => {
  //do something with form data
}
const { values, setValues, ... } = useContext(Bc.BindedFormContext) //see useForm API** to control form data precisely

return (<Bc.BindedForm initialValues={{ id: '', password: '' }} onFormSubmit={handleSubmit}>
  <Bc.BindedForm.Input name='id' />
  <Bc.BindedForm.Input name='password' />
  <Bc.BindedForm.Button>SUBMIT</BindedForm.Button>
<Bc.BindedForm>)
...

```

## Tech Stack

- Core - React, TypeScript
- Styling - Emotion
- Testing - Jest
- Bundling - Rollup
