import './App.scss'
import { ReactComponent as Logo } from './logo.svg'
// import CountdownTimer from './components/CountdownTimer'
import { IFrame } from './components/IFrame'

function App() {
  return (
    <div className="app">
      <header className="app-header centered">
        <div className="app-title-image">
          <Logo />
        </div>

        <div>
          <strong>Seattle Creative Code</strong> is a community of artists and
          technologists who hang out, collaborate, and share ideas.
        </div>
        <div className="links">
          <a
            href="https://discord.gg/2QXXH9MdV5"
            target="_blank"
            rel="noreferrer"
          >
            Join us on Discord
          </a>
        </div>
        <div className="links">
          <a
            href="https://www.instagram.com/seattlecreativecode/"
            target="_blank"
            rel="noreferrer"
          >
            Follow us on Instagram
          </a>
        </div>
      </header>

      <section className="meetup centered">
        {/* <h2>
          Projection
          <br />
          Party!
        </h2> */}

        <h2>Projection Party!!</h2>

        <div className="emoji">💻 🎨 💾 🖌 🎵</div>

        <div className="info">
          Meetup/hack session about projection mapping.
          <br />
          <br />
          January 27, 2024 6 pm - 10 pm <br />
          <a
            href="https://goo.gl/maps/aLsAJyQXMTzfcYze6"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <br />
            The Studio at 2+U <br />
            1203 2nd Ave, Seattle
          </a>
          <br />
        </div>

        <div>
          <a
            href="https://bit.ly/scc-jan-24"
            target="_blank"
            className="rsvp-button copy"
            rel="noreferrer"
          >
            RSVP on EventBrite
          </a>
        </div>

        {/* <div>
          <a
            href="https://bit.ly/scc-may-27-call"
            target="_blank"
            rel="noreferrer"
          >
            Use this form
          </a>{' '}
          if you'd like to bring something to the meetup.
        </div> */}

        {/* <CountdownTimer eventDate={new Date('2023-04-22T19:00:00-08:00')} /> */}
      </section>

      <section className="directions centered copy">
        <h3>About the Meetup/Directions</h3>
        <p>
          This meetup is about projection mapping.
          We'll be bringing laptops/projectors, and trying out different techniques/ideas live.
          Interested to participate in a future meetup? Join our discord and let us know!
          <br />
          <br />
          The venue is in downtown Seattle, one block away from the University Street Lightrail Station.
        </p>

        <div className="map-container">
          <IFrame
            title="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0046390790008!2d-122.339435023607!3d47.60659947118977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b355e695455%3A0xd309dae7912449f1!2sThe%20Studio%20at%202%2BU!5e0!3m2!1sen!2sus!4v1703834340104!5m2!1sen!2sus"
            width="100%"
            height="auto"
          />
        </div>
      </section>

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
