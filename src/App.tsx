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
          Meetup and pop-up
          <br />
          art show!
        </h2> */}

        <h2>Casual July Meetup</h2>

        <div className="emoji">💻 🎨 💾 🖌 🎵</div>

        <div className="info">
          July 17, 2023 7 pm - 9 pm <br />
          <a
            href="https://goo.gl/maps/aLsAJyQXMTzfcYze6"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <br />
            Optimism Brewing Company <br />
            1158 Broadway, Seattle, WA 98122
          </a>
          <br />
        </div>

        <div>
          <a
            href="https://bit.ly/scc-july-23"
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
        <h3>Getting to the meetup</h3>
        <p>
          Optimism Brewery is a spacious venue, and we will find a communal table to sit down and chat.
          To find us, look for a sign (an ipad) with "Seattle Creative Code" on it.
          <br />
          <br />
          Feel free to bring your laptops, trinkets, magical artifacts, 3D prints etc to share!
        </p>

        <div className="map-container">
          <IFrame
            title="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.685743044264!2d-122.32272138436922!3d47.61279997918502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906acc07f09b89%3A0xaec46580d07fc936!2sOptimism%20Brewing%20Company!5e0!3m2!1sen!2sus!4v1689320285695!5m2!1sen!2sus"
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
