


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
  let timer = document.querySelector("#counter").innerText
  let numLike = 1
  const ul = document.getElementsByClassName('likes')

  heart.addEventListener('click', function(e) {
    if (Object.values(likes) >= 1) {
      const lii = document.querySelector('ul li')
      let timer = document.querySelector("#counter").innerText
      likes[timer] += 1 
      const v = Object.values(likes)
      lii.innerText = `Youuuu liked ${timer} ${v}`
      ul[0].appendChild(lii)
    } 
    else {
      likes[timer] = 1 
      const li = document.createElement('li')
      li.innerText = `You liked ${timer} ${numLike} time`
      ul[0].appendChild(li)
    }
  })
}

heartLiker();