// addEventListener
var img_input = document.querySelector('.input')
var head_input = document.querySelector('.heading')
var text_area = document.querySelector('.text-area')
var auth_input = document.querySelector('.author')
var time_input = document.querySelector('.time')
var btn = document.querySelector('.btn')

var main_cont = document.querySelector('.content')


function main() {
  if (head_input.value == '' && text_area.value == '' && auth_input.value == '' && time_input.value == '') {
    alert('Please fill up all inputs')
  }
  else if (head_input.value == '') {
    alert('Please give it a Heading')
  }
  else if (text_area.value == '') {
    alert('Please type content')
  }
  else if (auth_input.value == '') {
    alert('Please type the author\'s name')
  }
  else if (time_input.value == '') {
    alert('Please type the publishing time')
  }
  else {
    var news_div = document.createElement('div')
    var head_show = document.createElement('h1')
    var cont_show = document.createElement('p')
    var auth_show = document.createElement('p')
    var time_show = document.createElement('p')
    
    var head_text = document.createTextNode(head_input.value)
    var cont_text = document.createTextNode(text_area.value)
    var auth_text = document.createTextNode(auth_input.value)
    var time_text = document.createTextNode(time_input.value)
    
    head_show.appendChild(head_text)
    cont_show.appendChild(cont_text)
    auth_show.appendChild(auth_text)
    time_show.appendChild(time_text)
    
    news_div.appendChild(head_show)
    news_div.appendChild(cont_show)
    news_div.appendChild(auth_show)
    news_div.appendChild(time_show)
    
    main_cont.appendChild(news_div)
    head_show.classList.add('head-style')
    cont_show.classList.add('cont-style')
    auth_show.classList.add('auth-style')
    time_show.classList.add('time-style')
    news_div.classList.add('news-style')
    
    head_input.value = ''
    text_area.value = ''
    auth_input.value = ''
    time_input.value = ''
  }
}

btn.addEventListener('click', () => {
  main()
})

window.addEventListener('keydown', key => {
  if (key.keycode == '13') {
    main()
  }
})