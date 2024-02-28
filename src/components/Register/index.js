import RegisterContext from '../Context/RegisterContext'
import {
  HomeContainer,
  Logo,
  RegisterContainer,
  RegisterImage,
  FormContainer,
  Heading,
  Label,
  Input,
  RegisterNow,
  Select,
  Option,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')

          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <HomeContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={submitRegistration}>
              <Heading>Let us join</Heading>
              <Label htmlFor="Name">NAME</Label>
              <Input
                value={name}
                id="Name"
                type="text"
                placeholder="Your name"
                onChange={onChangeName}
              />
              <Label htmlFor="Topic">TOPICS</Label>
              <Select id="Topic" value={topic} onChange={onChangeTopic}>
                {topicsList.map(each => (
                  <Option key={each.id} value={each.id}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
              <RegisterNow type="submit">Register Now</RegisterNow>
              {showError === true ? (
                <ErrorMsg>Please enter your name</ErrorMsg>
              ) : (
                ''
              )}
            </FormContainer>
          </RegisterContainer>
        </HomeContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
