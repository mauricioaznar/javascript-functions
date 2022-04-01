function Queue(maxLenght){
    const max = maxLenght
    const arr = []

    function getInLine (item){
        if(lineIsFull()){
            throw new Error('Line is full')
        }

        arr.push(item)
    }

    function nextInLine(){
        if(emptyLine()){
            throw new Error('There is no item')
        }
        arr.shift()
    }

    function emptyLine(){
        return arr.length === 0
    }

    function lineIsFull(){
        return arr.length === max
    }

    function currentQueue (){
        return arr.slice()
    }

    // function leftTheLine (item){
    //     arr.indexOf(item)
    // }

    return {
        getInLine,
        nextInLine,
        currentQueue
    }
}

module.exports = {
    Queue
}