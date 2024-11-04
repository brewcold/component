import "@testing-library/jest-dom"
import { render, fireEvent, waitFor, type Matcher, type MatcherOptions } from "@testing-library/react"
import { BindedForm } from "./binded-form"
import nock from "nock"
import axios from "axios"

const initialValues = {
  title: 1,
  content: "the binded form",
}

const onSubmit = (data: typeof initialValues) => axios.post("http://bindedformtest.com/post", data)
const onSubmitMock = jest.fn(onSubmit)

let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement

beforeEach(() => {
  const result = render(
    <BindedForm data-testid="form" initialValues={initialValues} onFormSubmit={onSubmitMock}>
      <BindedForm.Label data-testid="label-title">title</BindedForm.Label>
      <BindedForm.Input data-testid="title" name="title" id="title" />
      <BindedForm.Label data-testid="label-content">content</BindedForm.Label>
      <BindedForm.TextArea data-testid="content" name="content" id="content" />
      <BindedForm.Button data-testid="SUBMIT">SUBMIT</BindedForm.Button>
    </BindedForm>
  )
  getByTestId = result.getByTestId
})

describe("Binded Form", () => {
  test("Render and Bind Initial Data", () => {
    expect(getByTestId("form")).toBeDefined()

    expect(getByTestId("label-title")).toHaveTextContent("title")
    expect(getByTestId("title")).toHaveValue("1")

    expect(getByTestId("label-content")).toHaveTextContent("content")
    expect(getByTestId("content")).toHaveValue("the binded form")

    expect(getByTestId("SUBMIT")).toHaveTextContent("SUBMIT")
  })

  test("Control Data", () => {
    fireEvent.change(getByTestId("title"), {
      target: {
        value: "hello",
      },
    })
    waitFor(() => {
      expect(getByTestId("title")).toHaveValue("hello")
    })

    fireEvent.change(getByTestId("content"), {
      target: {
        value: "hello world",
      },
    })
    waitFor(() => {
      expect(getByTestId("content")).toHaveValue("hello world")
    })
  })

  test("Form Submission", () => {
    nock("http://bindedformtest.com")
      .post("/post", { title: "1", content: "the binded form" })
      .reply(200, { message: "success" })

    waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })

    fireEvent.submit(getByTestId("form"))

    waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })

    nock.cleanAll()
  })
})
