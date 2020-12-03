const messageOpening = ["The smallest ", "The biggest ", "The oldest "];
const messageMiddles = ["city in the UK is", "country is", "planet in our solar system is"];
const endings = [[" St Davids.", " London.", "York."], [" Vatican City.", " Russa.", " Egypt."], [" Mercury.", " Jupiter."]];

const getRandomNumber = () => Math.floor(Math.random()*3);


const startUpFunction = () => {
    const rand = getRandomNumber();
    const randTwo = getRandomNumber();
    let finalMessage = messageOpening[rand].concat(messageMiddles[randTwo]);
    console.log(rand);
    console.log(randTwo);
    let finalSegment;
    switch(randTwo){
        case 0: 
            if(rand === 0){
                finalSegment = endings[0][0];
                
            }else if(rand === 1){
                finalSegment = endings[0][1];

            }else if(rand === 2){
                finalSegment = endings[0][2];

            }

            break;
        case 1:
            if(rand === 0){
                finalSegment = endings[1][0];
            }else if(rand === 1){
                finalSegment = endings[1][1];
            }else if(rand === 2){
                finalSegment = endings[1][2];         
            }

            break;
        case 2: 
            if(rand === 0){
                finalSegment = endings[2][0];
            }else if(rand === 1){
                finalSegment = endings[2][1];
            }else if(rand === 2){
                finalSegment = endings[2][1];
            }

            break;
    }
    return `${finalMessage}${finalSegment}`;
}

console.log(startUpFunction());