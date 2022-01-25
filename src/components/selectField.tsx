import { listenerCount } from "process";
import { urlToHttpOptions } from "url";

type selectOptionsProps = {
  classes: string;
  name: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<any>;
};

const SelectField = (props: selectOptionsProps) => {
  return (
    <select
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className={props.classes}
    >
      {props.options.map((value, key) => {
        return (
          <option value={value} key={key}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField;
