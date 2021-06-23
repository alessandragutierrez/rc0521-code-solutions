let count = 3;

const countdown = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
    return;
  }
  console.log(count);
  count = count - 1;
};

const intervalID = setInterval(countdown, 1000);
