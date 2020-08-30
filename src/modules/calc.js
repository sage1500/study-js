
import { add } from './add.js';
import { sub } from './sub.js';

export class Calc {
    add(a, b) {
        return add(a, b);
    }

    sub(a, b) {
        return sub(a, b);
    }
}
