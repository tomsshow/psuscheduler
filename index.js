//startDate
const startEl = document.getElementById('start');


// let end = null
const endEl = document.getElementById('end');

document.getElementById('submit').addEventListener('click', e=>{
    const startValue = startEl.value
    const endValue = endEl.value
    console.log({startValue, endValue})
})

console.log('loaded')