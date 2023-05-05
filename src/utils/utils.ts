// Get the query params off the window's URL
export function getHashParams () {
  const hashParams: any = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export function msToTime(ms:number) {

  const seconds = Math.floor((ms / 1000) % 60);

  const minutes = Math.floor((ms / 1000 / 60) % 60);
  return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
}