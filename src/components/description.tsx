import {
  goodColor,
  inProgressColor,
  originalColor,
  wrongColor,
} from "../colors";
import { BUBBLE_SORTING_DESC, SELECTION_SORTING_DESC } from "../constants";

interface descriptionProps {
  sorting: string;
}

const Description = (props: descriptionProps) => {
  let description = BUBBLE_SORTING_DESC;

  if (props.sorting === "Selection") {
    description = SELECTION_SORTING_DESC;
  }

  return (
    <>
      <div className="w-full h-16 text-center flex justify-center items-center">
        <span className="pl-2">Currently checking:</span>
        <div className={inProgressColor + " border-2 h-6 w-6 mt-1 ml-2"} />

        <span className="pl-2">Wrong place:</span>
        <div className={wrongColor + " border-2 h-6 w-6 mt-1 ml-2"} />

        <span className="pl-2">Good place/Switched:</span>
        <div className={goodColor + " border-2 h-6 w-6 mt-1 ml-2"} />
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
