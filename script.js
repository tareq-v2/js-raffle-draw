
// Task to do

// Extract text from text area and store it to an array
// Render the names extracted from text area
// Shuffle the names array for better result
// Pick a random winner, remove him/her from the names array
// Display winner name


window.onload = function (){
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')
    // inp.innerHTML = "Magic";

    const participantNames = []
    inp.addEventListener('keypress', function (){
        if(event.key == 'Enter') {
            let newNames = event.target.value.split(', ')
            
            if (newNames[0] !== '') {
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }

        }
    })

    giveATry.addEventListener('click', function(){
        if(participantNames.length == 0){
            alert('There is no entry')
        }else{
            let shuffledNames = shuffle(participantNames)
            for(let i = 1; i < shuffledNames.length; i++){
                (function (i, count){
                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffledNames.length))
                        display.innerHTML = shuffledNames[rand]

                       if(count == shuffledNames.length - 1) {
                        if(!firstPosition.innerHTML){
                            firstPosition.innerHTML = shuffledNames[rand]
                            let index = participantNames.indexOf(shuffledNames[rand])
                            participantNames.splice(index, 1)
                        }else if(!secondPosition.innerHTML){
                            secondPosition.innerHTML = shuffledNames[rand]
                            let index = participantNames.indexOf(shuffledNames[rand])
                            participantNames.splice(IDBIndex, 1)
                        }else if(!thirdPosition.innerHTML){
                            thirdPosition.innerHTML = shuffledNames[rand]
                            let index = participantNames.indexOf(shuffledNames[rand])
                            participantNames.splice(index, 1)
                        }else{
                            alert('Raffle Draw Already Completed')
                        }
                       } 
                    }, i)
                })(i*100, i)
            }
        }
    })

    function createListItem(name){
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerHTML = name
        return li
    }

    function shuffle(arr) {
        let shuffledArr = [...arr]

        for (let i = shuffledArr.length - 1; i > 0; i--){
            let rand = Math.floor(Math.random() * (i + 1))
            let temp = shuffledArr[rand]
            shuffledArr[rand] = shuffledArr[i]
            shuffledArr[i] = temp
        }
        return shuffledArr
    }
    // console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    // console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    // console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
}

