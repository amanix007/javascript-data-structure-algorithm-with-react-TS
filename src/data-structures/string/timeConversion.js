

export default function timeConversion(s="07:05:45PM") {
// Write your code here
    // 12:01:00:PM = 12:01:00;
    // 12:01:00:AM = 00:01:00;
    let time = s.split(":");
    let hour = parseInt(time[0]);
    let min = time[1];
    let second = time[2].slice(0,2);
    let timePeriod = time[2].slice(2,4);

    console.log("----start---------------")
    console.log("second", second);
    console.log("timePeriod", timePeriod);
    let hour24 = 0;
    console.log('hour:', hour)
    hour24 = hour;
    console.log('hour24:', hour24)
    if (timePeriod === "AM" && hour === 12) {
      hour24 = "00";
    } else if (timePeriod == "PM" && hour > 12) {
      console.log('hit:')
        hour24 = 12 + hour;

      }
    let output = `${hour24}:${min}:${second}`
    console.log('output:', output)
    console.log("----end---------------")
    return output

}
