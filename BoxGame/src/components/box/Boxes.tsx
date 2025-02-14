/**
 * @file   Boxes.tsx
 * @brief  Boxes component which is the initial point of Box game
 * @date   Mar , 2020
 * @author ZCO Engineer
 * @copyright (c) 2020, ZCO
 */
import * as React from "react";

import Board from "./Board";

import i18n from "./../../i18n";

interface AppState {
  loaded: boolean;
  reverse: boolean;
  time:number;
  noBack: boolean;
}

class Box extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    const state = {
      loaded: false,
      noBack:false,
      reverse: false,
      time: new Date().getTime(),
    };
    this.state = state;
    const eventMethod = !!window.addEventListener ? "addEventListener" : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";
    // Listen to message from child window
    eventer(
      messageEvent,
      (e: any) => {
        const settings = e.data.activity?.settings ?? (e.data.settings ?? {});
        const configuration = e.data.configuration;
        i18n.changeLanguage(!!configuration ? configuration.language : "en-US");
        this.setState({ reverse: settings ? (settings.reverse_tapping ? settings.reverse_tapping : false) : false, noBack: e.data.noBack, loaded: true });
      },
      false
    );
  }


  // Game render function
  render() {
    return (
      <div>
        {this.state && this.state.loaded && (
          
              <Board reverse={this.state.reverse} noBack={this.state.noBack} language={i18n.language} time={this.state.time} />
          
        )}
      </div>
    );
  }
}

export default Box;
