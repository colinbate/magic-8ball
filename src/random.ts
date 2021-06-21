const MAX_INT = 2147483647;

function rand() {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return (a[0] & MAX_INT) / MAX_INT;
}

export function randInt(maxExclusive) {
  return Math.floor(rand() * maxExclusive);
}

export function randSide(sides) {
  return randInt(sides) + 1;
}

export function shuffle(original) {
  const array = [...original];
  for (let i = array.length - 1; i > 0; i--) {
    let j = randInt(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}