import Queue from "./icons/Queue";
import Trick from "./icons/Trick";
import Voting from "./icons/Voting";
import WavingHand from "./icons/WavingHand";
import Ballerina from "./icons/Ballerina";
import Eye from "./icons/Eye";
import "./Tip.scss";

const iconMap = {
  queue: <Queue />,
  trick: <Trick />,
  voting: <Voting />,
  wave: <WavingHand />,
  ballerina: <Ballerina />,
  eye: <Eye />,
};

export function Tip({ title, alignment, icon, children }) {
  return (
    <li className={`tip clay ${alignment}`}>
      <div className="tip-title">
        <h2>{title}</h2> {iconMap[icon]}
      </div>
      <p>{children}</p>
    </li>
  );
}
