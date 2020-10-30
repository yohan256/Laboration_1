function startEscape() {

alert ('Welcome to the room!')
alert ('You wake up in an unfamiliar room...')

function start(){
    return prompt ('Feeling confused and cold, you decide to: Investigate or Check pockets')
}

let choicePath1 = ''
choicePath1 = start()

while(choicePath1 ==='Check pockets'){
    alert ('Your pockets seem to be empty')
    choicePath1 = start()
}

if (choicePath1=='Investigate') {
    alert ('You notice few things: a shelf, door and a bed')
    }

else {
    alert ('You get confused on what you were trying to do')
    choicePath1 = start()
}


function start2(){
    return prompt ('You decide to check the: Shelf or Door')
}

let choicePath2 = ''
choicePath2 = start2()

while(choicePath2 ==='Door'){
    alert ('The door is locked')
    choicePath2 = start2()
}

if (choicePath2=='Shelf') {
    alert ('There was a key in the shelf!')
    }

else {
    alert ('That item does not exist')
    choicePath2 = start2()
}

function start3(){
    return prompt ('You unlock the door with the key! There are two doors in the room: Left or Right?')
}

let choicePath3 = ''
choicePath3 = start3()

if (choicePath3 ==='Left'){
    alert ('You feel a shock behind your back and black out')
    choicePath2 = start()
}

else if (choicePath3=='Right') {
    alert ('You open the door and freed yourself from the room!')
    }

else {
    alert ('There are only two doors once can choose from.')
    choicePath3 = start3()
}

alert ('Thanks for playing!')

}

