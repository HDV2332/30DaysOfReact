import React from "react";
import { Header } from "./numbox/Header";
import { Description } from "./numbox/Description";
import Body from "./numbox/NumBoxBody";

export class NumBoxApp extends React.Component{
    render() {
        const title = '30 Days of React'
        const description = 'Number Generator'
        const num = 10
        return (
          <div className='numbox-app-styles'>
            <Header message={title}/>
            <Description message ={description}/>
            <Body number={num} />
          </div>
        )
      }
}