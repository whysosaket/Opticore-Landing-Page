import I1 from "../assets/bg.png";
import I2 from "../assets/e1.png";
import I3 from "../assets/e2.png";
import I4 from "../assets/e3.png";
function Decoy() {
  return (
    <div>
        <img src={I1} className="w-1 h-1" />
        <img src={I2} className="w-1 h-1"  />
        <img src={I3} className="w-1 h-1"  />
        <img src={I4} className="w-1 h-1" />
    </div>
  )
}

export default Decoy