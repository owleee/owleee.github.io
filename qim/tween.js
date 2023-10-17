export default class Tween {
    constructor(startTime, startValue, endTime, endValue, mode = "linear ") {
      this.startTime = startTime;
      this.startValue = startValue;
      this.endTime = endTime;
      this.endValue = endValue;
      this.lenght = endTime - startTime;
    }
    value(time) {
      if (time <= this.startTime) return this.startValue;
      else if (time >= this.endTime) return this.endValue;
      else {
        if (this.mode === "smooth-in")
          return (
            ((this.endValue - this.startValue) /
              (this.endTime - this.startTime) ** 2) *
              (time - this.startTime) ** 2 +
            this.startValue
          );
        else if (this.mode === "smooth-out")
          return (
            ((this.startValue - this.endValue) /
              (this.startTime - this.endTime) ** 2) *
              (time - this.endTime) ** 2 +
            this.endValue
          );
        else if (this.mode === "smooth-in-out")
          return (
            ((this.endValue - this.startValue) / 2) *
              (Math.sin(
                (Math.PI / 2) *
                  (time * (2 / (this.endTime - this.startTime)) -
                    1 -
                    this.startTime)
              ) +
                1) +
            this.startValue
          );
        else
          return (
            ((this.endValue - this.startValue) /
              (this.endTime - this.startTime)) *
              (time - this.endTime) +
            this.endValue
          );
      }
    }
  }
  