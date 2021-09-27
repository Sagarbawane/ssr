import React from "react";
import Moment from "moment";
Moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "s",
    m: "1 min",
    mm: "%d min",
    h: "1 h",
    hh: "%d h",
    d: "1 d",
    dd: "%d d",
    M: "1 mth",
    MM: "%d mth",
    y: "1 y",
    yy: "%d y",
  },
});
class Time extends React.Component {
  render() {
    const tm = Moment("this.props.time").isSame();
    // const current = Moment().format;
    // const diff = tm.diff(current, "days");

    if (tm) {
      return Moment(this.props.time).from();
    } else {
      return Moment(this.props.time).format("Do MMM YYYY");
    }
  }
}
export default Time;
