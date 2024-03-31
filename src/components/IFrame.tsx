interface IFrameProps {
  src: string;
  height: string;
  width: string;
  title: string;
}

function IFrame(props: IFrameProps) {
  return (
    <div>
      <iframe
        title={props.title}
        src={props.src}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}

export default IFrame;
