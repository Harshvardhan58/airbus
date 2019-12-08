// import React, { Component } from 'react';
// import {Row,Col,Button,InputNumber,Layout} from  'antd';
// import styled from 'styled-components';
// import './CounterApp.css';
// const {Content} = Layout;
// const MyRow = styled(Row)`
//   margin:2em;
//   margin-left:4em !important;
// `
// class Counter extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   increment(){
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   decrement(){
//       this.setState({
//         count:this.state.count-1
//       })
//   }
//   render(){
//     return (
//           <MyRow  >
//             <Col span={2}>
//               <Button type="default" onClick={()=>this.decrement()}>
//                 &#8722;
//               </Button>
//             </Col>
//             <Col span={3}>
//               <InputNumber value={this.state.count} disabled />
//             </Col>
//             <Col span={2}>
//               <Button type="default" onClick={()=>this.increment()}>
//                 &#x2b;
//               </Button>
//             </Col>
//             <Col span={2}>
//               <Button type="danger" onClick={()=>this.props.deleteCounter()}>
//                 Delete
//               </Button>
//             </Col>
//           </MyRow>
//     );
//   }
// }

// class CounterApp extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       counters:[]
//     }
//   }
//   deleteCounter(id){
//     console.log(id);
//     const tmp = this.state.counters.filter(elem=> elem!==id);
//     this.setState({
//       counters:tmp
//     })
//   }
//   addCounter(){
//     this.setState({
//       counters:this.state.counters.concat(this.state.counters.length? this.state.counters[this.state.counters.length-1]+1 : 0)})
//   }
//   render() {
//     return (

//         <Content>
//           <MyRow >
//             <Col span={3}>
//               <Button type="primary" onClick={()=>this.addCounter()} >Add Counter</Button>
//             </Col>
//           </MyRow>
//           {
//           this.state.counters.map((id)=>(
//             <Counter key={id} id={id} deleteCounter={()=>this.deleteCounter(id)}/>
//           ))
//         }
//         </Content>

//     );
//   }
// }

// export default CounterApp;
