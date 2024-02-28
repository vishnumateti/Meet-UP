import {Link} from 'react-router-dom'
import RegisterContext from '../Context/RegisterContext'

import {
  HomeContainer,
  Logo,
  Welcome,
  Caption,
  Button,
  Meetup,
} from './styledComponents'

const HomeRoute = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <div>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
            {isRegistered === true ? (
              <HomeContainer>
                <Welcome>Welcome {name}</Welcome>
                <Caption>Welcome to {topic}</Caption>
                <Link to="/register">
                  <Button type="button" onClick={onRegister}>
                    Register
                  </Button>
                </Link>
                <Meetup
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Welcome>Welcome to Meetup</Welcome>
                <Caption>Please register for the topic</Caption>
                <Link to="/register">
                  <Button type="button">Register</Button>
                </Link>
                <Meetup
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default HomeRoute
