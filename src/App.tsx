import './App.scss'
import { ReactComponent as Logo } from './logo.svg'
import CountdownTimer from './components/CountdownTimer'
import { IFrame } from './components/IFrame'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title-image">
          <Logo />
        </div>
        <p>
          Join us for our next meetup <br />
          and pop-up art show
        </p>
        <p>
          <strong>Feb 25, 2023</strong> <strong>6 pm - 10 pm</strong>
        </p>
        <p>
          <strong>2 + U, Downtown Seattle</strong>
        </p>
        <a href="https://bit.ly/art-code-seattle" className="rsvp-button">
          <div>RSVP on EventBrite</div>
        </a>
        <CountdownTimer eventDate={new Date('2023-02-25T18:00:00-08:00')} />
      </header>

      <p>
        <strong>Seattle Creative Coders</strong> is a community of artists and
        technologists who hang out, collaborate, and share ideas.
      </p>

      <h3>Getting to the meetup</h3>
      <p>
        The venue is in downtown Seattle, and there are many bus lines that drop
        off nearby. It's also one block away from the{' '}
        <a href="https://goo.gl/maps/vC7RuFMRsF4X5d7c6">
          University Street Lightrail Station
        </a>
        .
      </p>

      <div className="map-Container">
        <IFrame
          title="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.003290181105!2d-122.33673119999999!3d47.606625699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab183ce5671%3A0x7103eb0386ec1705!2zMitV!5e0!3m2!1sen!2sus!4v1674813641384!5m2!1sen!2sus"
          width="600"
          height="450"
        />
      </div>

      <p>
        There’s a parking garage located on Seneca St, between 1st and 2nd Ave.
        But it's much cheaper to find parking on the street. Please note, the
        garage is closed on weekends. Unfortunately, street parking has a
        two-hour limit.
      </p>

      {/* 
      <!-- Maybe use the footer for links to instagram etc
      <div className="app-footer">
        Good stuff at {' '}
        <a href=""></a>.
      </div> */}
    </div>
  )
}

export default App
