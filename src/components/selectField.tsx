type selectOptionsProps = {
  label:string;
  name: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<any>;
  isDisabled: boolean;
};

const SelectField = (props: selectOptionsProps) => {
  return (
  <>
  <label>{props.label}</label>
    <select
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className="m-2 bg-slate-200 dark:bg-slate-900 disabled:text-slate-700"
      disabled={props.isDisabled}
    >
      {props.options.map((value, key) => {
        return (
          <option value={value} key={key}>
            {value}
          </option>
        );
      })}
    </select>
    </>
  );
};

export default SelectField;
