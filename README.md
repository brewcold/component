# @syyu/components

## Basic React Component System

[https://www.npmjs.com/package/@syyu/component](https://www.npmjs.com/package/@syyu/component)

- Boilerplate Components exclude Styling
- [About(KOR)](https://www.brewcoldblue.com/engineering/boilerplate-react-component-system)

## API_Components

- Button (`<button>`)
- Flex
- Form (`<form>`) / Binded Form (form, input, label, button)
- Input (`<input>`) / TextArea ('`<textarea>`')
- Label (`<label>`)
- List (`<ul>`, `<ol>`, `<li>`, ...)
- Spacing (`<div>`, ...)
- Txt (`<hn>`, `<span>`, `<p>`, ...)
- View (`<div>`, ...)

### BindedForm - Example

```
const handleSubmit = ({id, password}) => {
  //fetch
}

<BindedForm initialValues={{ id: '', password: '' }} onFormSubmit={handleSubmit}>
  <BindedForm.Input name='id' />
  <BindedForm.Input name='password' />
  <BindedForm.Button>SUBMIT</BindedForm.Button>
<BindedForm>
```

## Tech Stack

- Core - React, TypeScript
- Styling - Emotion
- Testing - Jest
- Bundling - Rollup
