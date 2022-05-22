export interface Remain {
  day:number,
  time:string,
}

/**
 * 计算剩余时间
 *
 * @export
 * @param {number} inputMicroSeconds
 * @return {*}  {Remain} day-剩余天数 time-时间字符串 xx:xx:xx
 */
export function remainingTime(inputMicroSeconds:number):Remain{
    let date = inputMicroSeconds;
    let nowDate = new Date().getTime();
    let diff = date - nowDate;
    if (diff <= 0) {
      return {
        day: 0,
        time: "00:00:00",
      };
    }
    let day = Math.floor(diff / 86400000);
    diff -= 86400000 * day;
    let hour = Math.floor(diff / 3600000);
    diff -= 3600000 * hour;
    let minutes = Math.floor(diff / 60000);
    diff -= 60000 * minutes;
    let seconds = Math.floor(diff / 1000);
    let time = `${hour
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return {
      day,
      time,
    };
}