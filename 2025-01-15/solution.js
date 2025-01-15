function censor(str) {
  return str.split(' ').map(word => word.length > 4 ? '*'.repeat(word.length) : word).join(' ')
}

console.log(censor('eu quero é festa'))