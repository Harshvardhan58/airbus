import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { observable } from "mobx";
import { Select, DatePicker, Button, Icon, Table } from "antd";
import moment from "moment";
import Location from "../model/Location";
import { deserialize } from "serializr";
import API from "../model/API";
import FlightSchedule from "../model/FlightSchedule";
const { Option } = Select;
const View = styled.div`
  display: flex;
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  background-repeat: no-repeat, repeat;
  background-size: cover;
`;

@observer
class Search extends Component {
  @observable from;
  @observable to;
  @observable departureDate;
  @observable locations = [];
  @observable isLoading = true;
  @observable results = [];
  @observable showResult = false;
  @observable departure = "";
  @observable arrival = "";
  constructor(props) {
    super(props);
    Location.master().then(data => {
      this.locations = data;
      this.isLoading = false;
    });
  }
  columns = [
    {
      title: "Name",
      dataIndex: "flight_name",
      key: "flight_name",
      render: text => <p>{text}</p>
    },
    {
      title: "Departure",
      dataIndex: "departure",
      key: "departure",
      render: text => <p>{moment(text).format("DD/MMM/YYYY h:mm")}</p>
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
      key: "arrival",
      render: text => <p>{moment(text).format("DD/MMM/YYYY h:mm a")}</p>
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      render: text => <p>{this.departure.name}</p>
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      render: text => <p>{this.arrival.name}</p>
    }
  ];
  onFromChange = value => {
    this.from = value;
  };
  onToChange = value => {
    this.to = value;
  };
  onDateChange = (date, dateString) => {
    this.departureDate = date;
  };
  search = () => {
    if (!this.to || !this.from || !this.departureDate) {
      return;
    }
    this.departure = this.locations.filter(l => l.id == this.from)[0];
    this.arrival = this.locations.filter(l => l.id == this.to)[0];
    FlightSchedule.search(this.from, this.to, this.departureDate).then(data => {
      this.results = data;
      this.showResult = true;
    });
  };
  render() {
    if (this.isLoading) {
      return null;
    }
    console.log(this.locations);
    return (
      <div
        style={{
          backgroundImage: 'url("http://localhost:3000/search_background.jpg")',
          height: "100%"
        }}
      >
        <View
          flex={1}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <View>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="From"
              optionFilterProp="children"
              onChange={this.onFromChange}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.locations.map(l => (
                <Option value={l.id}>
                  {l.name}({l.code})
                </Option>
              ))}
            </Select>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="to"
              optionFilterProp="children"
              onChange={this.onToChange}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.locations.map(l => (
                <Option value={l.id}>
                  {l.name}({l.code})
                </Option>
              ))}
            </Select>
            <DatePicker onChange={this.onDateChange} />
            <Button onClick={this.search} type="primary">
              Search<Icon type="search"></Icon>
            </Button>
          </View>
        </View>
        {this.showResult && (
          <View>
            <br></br> <br></br> <br></br> <br></br>{" "}
            <Table columns={this.columns} dataSource={this.results}></Table>
          </View>
        )}
      </div>
    );
  }
}
export default Search;
