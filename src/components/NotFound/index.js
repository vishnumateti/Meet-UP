import {NotFoundContainer, NotFoundImage, Page, Para} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Page>Page Not Found</Page>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </NotFoundContainer>
)

export default NotFound
