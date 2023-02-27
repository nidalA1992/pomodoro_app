export function format(timestamp: number) {
  const min = String(Math.floor(timestamp / 60 / 1000));
  const sec = String((timestamp / 1000) % 60);

  return `${min.length < 2 ? 0 : ""}${min} : ${sec.length < 2 ? 0 : ""}${sec}`;
}
