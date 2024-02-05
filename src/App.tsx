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

        <h2>Plotter Party</h2>
        <h3>Robots that draw 🤖✒️</h3>

        {/* <div className="emoji">💻 🎨 💾 🖌 🎵</div> */}
        {/* <div className="emoji">🤖✒️ Robots that draw</div> */}

        <div className="info">
          Open house plotter art, tech & design show
          <br />
          <br />
          February 8, 2024, 5 pm - 9 pm <br />
          <a
            href="https://goo.gl/maps/aLsAJyQXMTzfcYze6"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <br />
            Passable <br />
            1005 E Union St, Seattle

          </a>
          <br />
        </div>

        {/* <div>
          <a
            href="https://bit.ly/scc-jan-24"
            target="_blank"
            className="rsvp-button copy"
            rel="noreferrer"
          >
            RSVP on EventBrite
          </a>
        </div> */}

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
        <h3>About/Directions</h3>
        <p>
          Organized by Passable and Seattle Creative Code,
          this event showcases the work of local plotter artists/enthusiasts, with live plotting.
          <br />
          <br />
          A plotter is a drawing machine that produces vector graphics drawings or paintings. Think of a robot that draws – combining the power of technology with the tactile expressivity of the pen or brush.
          <br />
          <br />
          Learn more about  <a href="http://totallylegitllc.com/passable/">Passable</a>.
        </p>

        <div className="map-container">
          <IFrame
            title="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.683115219363!2d-122.3216959236067!3d47.61285107119048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b53128e0543%3A0xc491674b05d0d222!2sPassable!5e0!3m2!1sen!2sus!4v1707091115782!5m2!1sen!2sus"
            width="100%"
            height="auto"
          />
          {/* <IFrame
            title="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0046390790008!2d-122.339435023607!3d47.60659947118977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b355e695455%3A0xd309dae7912449f1!2sThe%20Studio%20at%202%2BU!5e0!3m2!1sen!2sus!4v1703834340104!5m2!1sen!2sus"
            width="100%"
            height="auto"
          /> */}
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
