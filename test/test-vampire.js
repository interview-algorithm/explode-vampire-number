/**
 * Copyright (C) 2016 yanni4night.com
 * test-vampire.js
 *
 * changelog
 * 2016-04-12[22:47:11]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */

var Vampire = require('../dist/explodeVampireNumber');
var assert = require('assert');

var cases = {
    1260: [
        [21, 60]
    ],
    1395: [
        [15, 93]
    ],
    1435: [
        [35, 41]
    ],
    1530: [
        [30, 51]
    ],
    125460: [
        [204, 615],
        [246, 510]
    ],
    13078260: [
        [1620, 8073],
        [1863, 7020],
        [2070, 6318]
    ]
};

describe('#isVampirePair', function() {
    Object.keys(cases).forEach(function(num) {
        cases[num].forEach(function(pair) {
            it(pair.join('*') + ' should be a vampire pair', function() {
                assert.ok(Vampire.isVampirePair(pair[0], pair[1]));
            });
        });
    });
});

describe('#parseVampireNumber', function() {
    Object.keys(cases).forEach(function(num) {
        var pairsStrs = cases[num].map(function(pair) {
            return pair.join();
        });
        var parsedPairs = Vampire.parseVampireNumber(num);

        parsedPairs.forEach(function(pair) {
            it(pair.join() + ' should be parsed out for ' + num, function() {
                assert.ok(pairsStrs.indexOf(pair.sort().join()) > -1);
            });
        });
    });
});

describe('#isVampireNumber', function() {
    var numbers = [1260, 1395, 1435, 1530, 1827, 2187, 6880, 102510, 104260, 105210, 105264, 105750, 108135, 110758, 115672, 116725, 117067, 118440, 123354, 124483, 125248, 125433, 125460, 126027, 126846, 129640, 129775, 131242, 132430, 133245, 134725, 135828, 135837, 136525, 136948, 140350, 145314, 146137, 146952, 152608, 152685, 153436, 156240, 156289, 156915, 162976, 163944, 172822, 173250, 174370, 175329, 180225, 180297, 182250, 182650, 186624, 190260, 192150, 193257, 193945, 197725, 201852, 205785, 211896, 213466, 215860, 216733, 217638, 218488, 226498, 226872, 229648, 233896, 241564, 245182, 251896, 253750, 254740, 260338, 262984, 263074, 284598, 284760, 286416, 296320, 304717, 312475, 312975, 315594, 319059, 319536, 326452, 329346, 329656, 336550, 336960, 338296, 341653, 346968, 361989, 362992, 365638, 368550, 369189, 371893, 378418, 378450, 384912, 386415, 392566, 404968, 414895, 416650, 416988, 428980, 429664, 447916, 456840, 458640, 475380, 486720, 489159, 489955, 498550, 516879, 529672, 536539, 538650, 559188, 567648, 568750, 629680, 638950, 673920, 729688, 736695, 738468, 769792, 789250, 789525, 792585, 794088, 809919, 809964, 815958, 829696, 841995, 939658];
    numbers.forEach(function(num) {
        it(num + ' should be a vampire number', function() {
            assert.ok(Vampire.isVampireNumber(num));
        });
    });
});