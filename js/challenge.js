


function incrementTimer() {
  const timer = document.querySelector("#counter")
  const stringTime = timer.innerText
  let newTime = parseInt(stringTime)
  newTime += 1 
  timer.innerText = newTime 
}

function auto() {
  setInterval(function(){
    incrementTimer()
  },
  1000)
}

function manuallyIncrement() {
  const plusButton = document.getElementById("plus")
  plusButton.addEventListener('click', incrementTimer)
}

function manuallyDecrement() {
  const minusButton = document.getElementById("minus")
  minusButton.addEventListener('click', decrementTimer)
}

function decrementTimer() {
  const timer = document.querySelector("#counter")
  const stringTime = timer.innerText
  let newTime = parseInt(stringTime)
  newTime -= 1 
  timer.innerText = newTime 
}

manuallyIncrement()
manuallyDecrement()


function heartLiker() {
  const heart = document.getElementById('heart')
  const likes = {}
  let numLike = 1
  const ul = document.getElementsByClassName('likes')

  heart.addEventListener('click', function(e) {
    let timer = document.querySelector("#counter").innerText
    if (likes[timer]) {
      const lii = document.getElementById(`${timer}`)
      likes[timer] += 1 
      const v = likes[timer]
      lii.innerText = `You liked ${timer} ${v} times`
    } 
    else {
      likes[timer] = 1 
      const li = document.createElement('li')
      li.id = timer
      li.innerText = `You liked ${timer} ${numLike} time`
      ul[0].appendChild(li)
    }
  })
}

heartLiker();

function pauseButton () {
  const pause = document.getElementById('pause')
  pause.addEventListener('click', function(e) {
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("heart").disabled = true;
    pause.innerText = "resume"
    pause.addEventListener('click', function(e) {
      document.getElementById("plus").disabled = false;
      document.getElementById("minus").disabled = false;
      document.getElementById("heart").disabled = false;
      pause.innerText = "pause"
      let timer = document.querySelector("#counter")
      timer.innerText = 0
      pauseButton()
    })
  })
}

pauseButton();


function submit() {
  const form = document.getElementById('comment-form')
  const submitButton = document.getElementById('submit')
  const input = document.getElementById('comment-input')
  const h = document.getElementById('me')
  submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let p = document.createElement('li')
    const hi = input.value
    p.innerText = hi 
    p.id = hi
    h.appendChild(p)
    form.reset()
  })
}

submit(); 