//power of a given number with base and exponent

function power(base, exp){

  if (exp === 0) {
    return 1
  }else {
    return base * power(base, exp - 1)
  }

}