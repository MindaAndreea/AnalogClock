setInterval(() => {
  const hour = document.getElementById("container-hour");
  const minute = document.getElementById("container-minute");
  const second = document.getElementById("container-second");

  date = new Date();

  timeHours = date.getHours();
  timeMinutes = date.getMinutes();
  timeSeconds = date.getSeconds();

  rotationHour = 30 * timeHours + timeMinutes / 2;
  rotationMinutes = 6 * timeMinutes;
  rotationSeconds = 6 * timeSeconds;

  hour.style.transform = `rotate(${rotationHour}deg)`;
  minute.style.transform = `rotate(${rotationMinutes}deg)`;
  second.style.transform = `rotate(${rotationSeconds}deg)`;
}, 1000);
