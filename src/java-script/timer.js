export
 class Timer {
  constructor({dateNow, targetDate,day = 0 ,hour = 0,mins = 0,secs = 0}) {
    this.dateNow = dateNow;
    this.targetDate = targetDate;
    this.time = this.targetDate-this.dateNow;
    this.day = day;
    this.hour = hour;
    this.mins = mins;
    this.secs = secs;
  }
  showTimes(){
    return this.time;
  }
  getDays(){
    return Math.floor(this.time / (1000 * 60 * 60 * 24));
  }
  getHours(){
    return this.hour = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  };
  getMins(){
    return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  };
  getSecs(){
    return  Math.floor((this.time % (1000 * 60)) / 1000);
  }
}
const showDay = document.querySelector('span[data-value="days"]');
const showHour = document.querySelector('span[data-value="hours"]');
const showMins = document.querySelector('span[data-value="mins"]');
const showSecs = document.querySelector('span[data-value="secs"]');
const startTimer = () => {
  setInterval(() => {
    const newTimer = new Timer({dateNow : Date.now(),targetDate : new Date(2021, 0, 30).getTime()}); 
    showDay.textContent = `${newTimer.getDays()}`;
    showHour.textContent = `${newTimer.getHours()}`;
    showMins.textContent = `${newTimer.getMins()}`;
    showSecs.textContent = `${newTimer.getSecs()}`;
  }, 1000)
};
startTimer()
