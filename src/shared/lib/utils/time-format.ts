export function timeFormat(minutes: number) {
  let sec = String((minutes * 60) % 60);

  if (sec.length < 2) sec = "0" + sec;

  return `${minutes} : ${sec}`;
}
