export
 class Timer {
  constructor(dateNow, targetDate,day = 0 ,hour = 0,mins = 0,secs = 0) {
    this.dateNow = dateNow;
    this.targetDate = targetDate;
    this.day = day;
    this.hour = hour;
    this.mins = mins;
    this.secs = secs;
  }
  showTimes(time){
    return time;
  }
  getDays(time){
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  getHours(time){
    return this.hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  };
  getMins(time){
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  };
  getSecs(time){
    return  Math.floor((time % (1000 * 60)) / 1000);
  }
}



const showDay = document.querySelector('span[data-value="days"]');


const showHour = document.querySelector('span[data-value="hours"]');


const showMins = document.querySelector('span[data-value="mins"]');


const showSecs = document.querySelector('span[data-value="secs"]');

const targetDate = new Date('2021, 0, 30').getTime();
const newTimer = new Timer(); 
const start = () => {
  setInterval(() => {
    const dateNow = Date.now();
    const time = targetDate-dateNow;
    showDay.textContent = `${newTimer.getDays(time)}` ;
    showHour.textContent = `${newTimer.getHours(time)}`;
    showMins.textContent = `${newTimer.getMins(time)}`;
    showSecs.textContent = `${newTimer.getSecs(time)}`;
    console.log(`${newTimer.getSecs(time)}`);
  }, 1000)
};
start()
