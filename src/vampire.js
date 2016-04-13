/**
 * Copyright (C) 2016 yanni4night.com
 * vampire.js
 *
 * changelog
 * 2016-04-12[21:48:00]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
import isInteger from 'is-integer';
import digitCount from 'digit-count';

export const isVampirePair = (prev, next) => {
    if (!isInteger(prev) || !isInteger(next)) {
        return false;
    }

    if (digitCount(prev) !== digitCount(next)) {
        return false;
    }

    const product = prev * next;

    if (product % 100 === 0) {
        return false;
    }

    if (digitCount(prev) + digitCount(next) !== digitCount(product)) {
        return false;
    }

    return product.toString(10).split('').sort().join('') === (prev + '' + next).split('').sort().join('');
};

export const explodeVampireNumber = num => {
    const pairs = [];

    if (!isInteger(num)) {
        return pairs;
    }

    const BIT = num.toString(10).length;

    if (BIT & 1 === 1) {
        return pairs;
    }

    if (num % 100 === 0) {
        return pairs;
    }

    const MAX = Math.pow(10, BIT / 2);
    const MIN = MAX / 10;

    for (let i = MIN + 1; i < MAX; ++i) {
        if (num % i !== 0) {
            continue;
        }

        let j = num / i;

        // Prevent duplicated,eg.[204, 615] vs [615, 204]
        if (j < i) {
            break;
        }
        /* eg.
         * N = 1000a + 100b + 10c + d = x * y
         * x = 10a + b
         * y = 10c + d
         * N - x - y = 990a + 99b + 9c = 9 * (110a + 11b + c)
         */
        if ((num - i - j) % 9 !== 0) {
            continue;
        }

        if (isVampirePair(i, j)) {
            pairs[pairs.length] = [i, j];
        }
    }
    return pairs;
};

export const isVampireNumber = num => {
    return explodeVampireNumber(num).length > 0;
};