# @syyu/components

## Basic React Component System 베이직 리액트 컴포넌트 시스템

- Boilerplate Components exclude Styling 스타일링을 제외한 기본 컴포넌트 보일러플레이트
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

<BindedForm initialValues={ id: '', password: '' } onSubmit={handleSubmit}>
  <BindedForm.Input name='id' />
  <BindedForm.Input name='password' />
  <BindedForm.Button type="submit">SUBMIT</BindedForm.Button>
<BindedForm>
```

## Tech Stack 기술 스택

- Core - React, TypeScript
- Styling - Emotion
- Testing - Jest
- Bundling - Rollup
