# Bowling Game Kata

## Design
A game has 10 frames
A frame has one or tow rolls
The score depends on counting each frame
A spare is when a bowler knocks down 10 pins on 2 two rolls
 - 10 + pins on the next frame
A strike, when the bowler knocks down 10 pins on the first roll on the frame
 - 10 + pins on the two next rolls
 the 10th frame, if there is a spare, we will have a roll
 if this a strike, we will have two more rolls

 ## Unit testing
 Set of data that will allow us to validate the scoring of our module.
 
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- => 0 <br/>
1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 => 20 <br/>
5/5 1/- -/- -/- -/- -/- -/- -/- -/- -/- => 12 <br/>
10  1/1 -/- -/- -/- -/- -/- -/- -/- -/- => 14 <br/>
10 10 10 10 10 10 10 10 10 10 10 10 10  => 300 <br/>

