interface IFrameProps {
  src: string
  height: string
  width: string
}

export function IFrame(props: IFrameProps) {
  return (
    <div>
      <iframe src={props.src} height={props.height} width={props.width} />
    </div>
  )
}
