import './CountdownTimer.scss'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import * as Utils from '../utils/DateUtils'

function timerRenderer(props: CountdownRenderProps) {
  if (props.completed) {
    // Render a completed state
    return <div>The challenge is now active!</div>
  } else {
    // Render a countdown
    return (
      <span>
        <strong>{props.days}</strong> d,
        <strong>{props.hours}</strong> h,
        <strong>{props.minutes}</strong> m,
        <strong>{props.seconds}</strong> s left.
      </span>
    )
  }
}

interface CountdownTimerProps {
  eventDate: Date
}

function CountdownTimer(props: CountdownTimerProps) {
  var d = props.eventDate

  if (Utils.isDatePast(d)) {
    // Don't show timer when a challenge is running
    return <></>
  }

  return (
    <div className="countdown-timer">
      <Countdown date={d} renderer={timerRenderer} />
    </div>
  )
}

export default CountdownTimer
