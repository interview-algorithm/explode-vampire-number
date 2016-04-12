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

export const isVampirePair = (prev, next) => {
    return (prev * next).toString(10).split('').sort().join('') === (prev + '' + next).split('').sort().join('');
};

export const parseVampire = num => {
    let pairs = [];

    if (isNaN(num)) {
        return pairs;
    }

    if (parseInt(num, 10) !== +num) {
        return pairs;
    }

    num = +num;

    const BIT = num.toString(10).length;

    if (BIT & 1) {
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
    return !!parseVampire(num).length;
};