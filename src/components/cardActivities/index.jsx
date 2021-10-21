import { StyleCardTask } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as moment from "moment";
import "moment/locale/pt-br";
import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";

const CardActivities = ({ item, locket }) => {
  const { deleteActivity } = useContext(ActivitiesContext);
  return (
    <StyleCardTask>
      <div>
        <h2>Titulo: {item.title}</h2>
        <h4>
          Data: {moment(item.realization_time).subtract(10, "days").calendar()}
        </h4>
        <h4>Hora: {moment(item.realization_time).format("LT")}</h4>
      </div>
      {locket && (
        <AiOutlineCloseCircle
          onClick={() => deleteActivity(item.id)}
          style={{
            color: "red",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        />
      )}
    </StyleCardTask>
  );
};

export default CardActivities;
