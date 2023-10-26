import players from "../../players";
import Cart from "./Cart";
import "./player_list.css"
function Player_list() {
  return (
    <div className="container">
    {players.map((element, i) => {
      return (
        <div key={i} className="item">
          <Cart player={element}/>
        </div>
      );
    })}
  </div>
  )
}

export default Player_list