const btn = document.querySelectorAll(".button")
const body = document.body
    btn.forEach( function  (button) {
    console.log(button)
        button.addEventListener('mouseover', (e) => {
            console.log(e)
            console.log(e.target.id)
            switch (e.target.id) {
                case 'grey' : body.style.backgroundColor = e.target.id
                break;
                case 'blue' : body.style.backgroundColor = e.target.id
                break;
                case 'yellow' : body.style.backgroundColor = e.target.id
                break;
                case 'Aliceblue' : body.style.backgroundColor = e.target.id
                break;
                default: body.style.backgroundColor = 'white'
            }
        })
})
