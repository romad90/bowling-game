'use strict'

/**
 * Module varibales
 * @private
 */

const BowlingGame = require('../lib/bowling-game.js')

describe('Bowling Game', () => {
    let game 
        
    const rollBatch = function (rolls, pins) {
        for (let i = 0; i < rolls;  i++) {
            game.roll(pins)
        }
    }

    const rollSpare = function () {
        game.roll(5)
        game.roll(5)
    }
    
    beforeEach(() => {
        game = new BowlingGame()
    })

    it('should return 0, a game where all zeros.', () => {
        rollBatch(20, 0)
        expect(game.score).toEqual(0)
    })

    it('should return 20, a game where all ones.', () => {
        rollBatch(20, 1)
        expect(game.score).toEqual(20)
    })

    it('should handle a spare, apply the right bonus', () => {
        rollSpare()
        game.roll(1)
        rollBatch(17, 0)
        expect(game.score).toEqual(12)
    })

    it('should handle a strike, apply the right bonus', () => {
        game.roll(10)
        game.roll(1)
        game.roll(1)
        rollBatch(17, 0)
        expect(game.score).toEqual(14)
    })

    it('should returns 300, a game where only strikes', () => {
        rollBatch(12, 10)
        expect(game.score).toEqual(300)
    })

    it('should returns 150 a game where only spares', () => {
        rollBatch(21, 5)
        expect(game.score).toEqual(150)
    })


})
