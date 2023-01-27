interface IFrameProps {
  src: string
  height: string
  width: string
  title: string
}

export function IFrame(props: IFrameProps) {
  return (
    <div>
      <iframe
        title={props.title}
        src={props.src}
        height={props.height}
        width={props.width}
      />
    </div>
  )
}
