const {Queue} = require('./queue')

it('Creates a queue', function () {
    const queue = Queue(7)
    expect(queue).toBeDefined()
});

it('Get an item in line', function () {
    const queue = Queue(7)
    queue.getInLine("Fernando")
    queue.getInLine("Mauricio")
    expect(queue.currentQueue()).toEqual(["Fernando","Mauricio"])
});

it('Get an item out of line', function (){
    const queue = Queue(7)
    queue.getInLine("Fernando")
    queue.getInLine("Mauricio")
    queue.nextInLine()
    expect(queue.currentQueue()).toEqual(["Mauricio"])
})