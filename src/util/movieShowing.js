export function limitChars(text) {

  if(text.length) {

    text = text.split(" ");
    text = text.slice(0, 15);
    text[14] += '...';

    return text.join(" ");
  }

  return "";
  
}

export function getClassRate(rate) {


  if (rate >= 7) {
    return "good-rate";
  } 
  
  if (rate < 7 && rate >= 5) {

    return "medium-rate";
  }

  if (rate === 0) {

    return "no-rate";
  }
  
  return "bad-rate";
}