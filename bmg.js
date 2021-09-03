const tes1 = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push("Frontend Backend");
    } else if (i % 5 === 0) {
      arr.push("Backend");
    } else if (i % 3 === 0) {
      arr.push("Frontend");
    } else {
      arr.push(i);
    }
  }

  return arr.join(",");
};

console.log(tes1(50));
