type colorHelpersProps = {
  text: string;
  color: string;
};

const ColorHelpers = (props: colorHelpersProps) => {
  return (
    <>
      <span className="pl-2">{props.text}</span>
      <div className={props.color + " border-2 h-6 w-6 mt-1 ml-2"} />
    </>
  );
};

export default ColorHelpers;
