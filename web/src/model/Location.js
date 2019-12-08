import { observable } from "mobx";
import { serializable, identifier, deserialize } from "serializr";
import API from "./API";
export default class Location {
  @serializable(identifier()) id;
  @serializable @observable name;
  @serializable @observable value;
  @serializable @observable code;

  static master = () => {
    return API.get("location/master").then(data => {
      return data;
    });
  };
}
