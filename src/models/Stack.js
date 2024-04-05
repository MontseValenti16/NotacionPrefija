import { Node } from "./Node.js";

export class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.data;
    }
}