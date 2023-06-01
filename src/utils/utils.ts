
export function msToTime(ms:number) {

  const seconds = Math.floor((ms / 1000) % 60);

  const minutes = Math.floor((ms / 1000 / 60) % 60);
  return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
}

export function parsePitchClass(note:string) {
  let key = note;

  switch (+note) {
    case 0:
      key = 'C';
      break;
    case 1:
      key = 'D♭';
      break;
    case 2:
      key = 'D';
      break;
    case 3:
      key = 'E♭';
      break;
    case 4:
      key = 'E';
      break;
    case 5:
      key = 'F';
      break;
    case 6:
      key = 'G♭';
      break;
    case 7:
      key = 'G';
      break;
    case 8:
      key = 'A♭';
      break;
    case 9:
      key = 'A';
      break;
    case 10:
      key = 'B♭';
      break;
    case 11:
      key = 'B';
      break;
    default:
      return null;
  }

  return key;
};

export async function delay(ms:number) {
  // return await for better async stack trace support in case of errors.
  return await new Promise(resolve => setTimeout(resolve, ms));
}