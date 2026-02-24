export function getClockString() {

  const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const now=new Date();

  const pad = (n)=>String(n).padStart(2,"0");

  const date =
  `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} (${days[now.getDay()]})`;

  const tz = -now.getTimezoneOffset();
  const sign = tz >= 0 ? "+" : "-";

  const tzH = pad(Math.floor(Math.abs(tz)/60));
  const tzM = pad(Math.abs(tz)%60);

  const time =
  `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} ${sign}${tzH}:${tzM}`;

  return `${date}\n${time}`;
}