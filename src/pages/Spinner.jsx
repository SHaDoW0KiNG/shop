import { RotatingLines } from "react-loader-spinner";
import "./Spinner.css"
export default function () {
    return (
        <div className="spinner">
            <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </div>
    )
}