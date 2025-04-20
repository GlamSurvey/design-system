function Window(props: {
  children?: React.ReactElement | React.ReactElement[] | string;
  width?: number;
  height?: number;
}) {
  return (
    <div className='flex flex-auto justify-self-center'>{props.children}</div>
  );
}

export default Window;
