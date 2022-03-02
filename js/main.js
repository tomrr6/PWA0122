console.log('1');
function regSW(){
  if('serviceWorker' in navigator) {
    console.log('2');
    navigator.serviceWorker.register('./sw.js');
  }
  console.log('3');
}
