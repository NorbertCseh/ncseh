import ColorHelpers from "./colorHelpers";

import {
  goodColor,
  inProgressColor,
  originalColor,
  wrongColor,
} from "../colors";
import { BUBBLE_SORTING_DESC, SELECTION_SORTING_DESC } from "../constants";

type descriptionProps = {
  sorting: string;
};

const HelperColors = (props: descriptionProps) => {
  if (props.sorting === "Bubble") {
    return (
      <>
        <ColorHelpers text="Currently checking:" color={inProgressColor} />
        <ColorHelpers text="Correct place:" color={goodColor} />
        <ColorHelpers text="Wrong place:" color={wrongColor} />
      </>
    );
  } else {
    return (
      <>
        <ColorHelpers text="Currently checking:" color={inProgressColor} />
        <ColorHelpers text="Correct place:" color={goodColor} />
      </>
    );
  }
};

const Description = (props: descriptionProps) => {
  let description = BUBBLE_SORTING_DESC;

  if (props.sorting === "Selection") {
    description = SELECTION_SORTING_DESC;
  }

  return (
    <>
      <div className="w-full h-16 text-center flex justify-center items-center">
        <HelperColors sorting={props.sorting} />
      </div>
      <div className="w-full h-64 flex-col p-4">
        <div className="text-lg m-2">{description.description}</div>
        <div className="m-2 p-2 w-full">
          <table className="table-auto w-52">
            <thead className="border-b-2">
              <tr>
                <th>Time Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Best</td>
                <td>{description.best}</td>
              </tr>
              <tr>
                <td>Worst</td>
                <td>{description.worst}</td>
              </tr>
              <tr>
                <td>Avarage</td>
                <td>{description.avarage}</td>
              </tr>
              <tr>
                <td>Space Complexity</td>
                <td>{description.complexity}</td>
              </tr>
              <tr>
                <td>Stability</td>
                <td>{description.stability}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Description;
