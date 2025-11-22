function travelTime() {
  const speed = 50;
  const distance = 432;
  const totalHours = distance / speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  console.log(`Travel time is ${hours} hours and ${minutes} minutes.`);
}

travelTime();
