'use strict'

class BowlingGame {
    constructor () {
        this.rolls = []
    }

    roll(pins) {
        this.rolls.push(pins)
    }
    
    sumFrame(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1]
    }

    isSpare(frameScore) {
        return frameScore === 10
    }

    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2]
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10
    }
    
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
    }
    
    get score() {
        let score = 0
        let rollIndex = 0

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            
            if (this.isStrike(rollIndex)) {
                score += 10 + this.strikeBonus(rollIndex)
                rollIndex++
                continue
            }

            let frameScore = this.sumFrame(rollIndex) 
            if (this.isSpare(frameScore)) {
                score += 10 + this.spareBonus(rollIndex)
            } else {
                score += frameScore
            }

            rollIndex+= 2
        }
        return score
    }
}

/**
 * Module exports
 * @public
 */
module.exports = BowlingGame
