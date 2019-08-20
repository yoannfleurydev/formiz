import { MyField } from './MyField';

export const MyForm = `
// 2. Create a form with multi steps & fields
const MyForm = () => {
  const myForm = useForm()
  const [isLoading, setIsLoading] = React.useState(false)
  const submitForm = (values) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      alert(JSON.stringify(values))
      myForm.invalidateFields({
        email: 'Error from API',
      })
    }, 1000)
  }
  return (
    <Formiz onValidSubmit={submitForm} connect={myForm}>
      <form
        noValidate
        onSubmit={myForm.submit}
        className="demo-form"
        style={{ minHeight: '16rem' }}
      >
        <div className="demo-form__content">
          <MyField
            name="firstName"
            label="First Name"
            // isRequired="First Name is required"
          />
          <MyField
            name="lastName"
            label="Last Name"
            // isRequired="Last Name is required"
          />
          <MyField
            name="email"
            label="Email"
            type="email"
          />
          <MyField
            name="password"
            label="Password"
            type="password"
          />
        </div>

        <div className="demo-form__footer">
          <div
            className="ml-auto"
            style={{ minWidth: '6rem' }}
          >
            <button
              className="demo-button is-primary"
              type="submit"
              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </Formiz>
  )
}
`;

export const Render = `
${MyField}
${MyForm}
render(
  <MyForm />
)
`;