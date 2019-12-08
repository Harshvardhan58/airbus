import { observable } from "mobx";
import { serializable, identifier, deserialize } from "serializr";
import API from "./API";
export default class FlightSchedule {
  @serializable(identifier()) id;
  @serializable @observable flight_name;
  @serializable @observable departure;
  @serializable @observable arrival;
  @serializable @observable from;
  @serializable @observable to;
  @serializable @observable datetime;

  static search = (from, to, date) => {
    return API.get("location/flights", { from: from, to: to, date: date }).then(
      data => {
        return deserialize(FlightSchedule, data);
      }
    );
  };
}
