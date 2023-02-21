const promise = (name) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(name)
        }, Math.round(Math.random() * 5))
    });
}

const report = (name) =>  {
    console.log('done', name);
}

const a = promise('a');
const b = promise('b');
const c = promise('c');
const d = promise('d');

class Queue {
    constructor(callback) {
        if (typeof callback !== 'function')
            throw new Error('Queue handler can be only a function');

        this.handler = callback;
        this.promises = []
        this.pendingPromise = null;
    }

    push(promise) {
        if(!(promise instanceof Promise))
            throw new Error('Only promise can be pushed to Queue');
        this.promises.push(promise)
        this.run();
    }

    run() {
        const isCanBeExecuted = !this.pendingPromise;
        if(isCanBeExecuted && this.promises.length) {
            this.pendingPromise = this.promises.shift().then((res) => {
                this.handler(res);
                this.pendingPromise = null;
                this.run();
            })
        }
    }

}

const queue = new Queue(report);

queue.push(a);
queue.push(b);
queue.push(c);
queue.push(d);


