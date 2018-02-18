# mlpiano

Machine Learning program that will take a chord progression and using machine learning, it will generate a melody to go along with it.

<br>

mlpiano uses MIDI.js, an open-source midi playing framework to play music

<br>
First, I need to write some program that can play basic chords
<br>
The more I'm writing this, the more I realize that I'm completely reinventing the wheel.
<br>
I'm creating my own form of music notation using JSON and also creating the base functions needed to play this notation. This form of notation is completely modular and every part of music needs to be written independently. 

<br>

Because my goal in mind right now is to create intelligent music writing software, given a generic chord progression, it should pump out different melodies to go along with it. 

<br>

For music readers and theory peeps, currently, it plays the chords given the root note with the type (major, minor, seventh dominant, etc.) in the root inversions. (probably later will write something that can intelligently play the best inversion because a c chord and a b chord is almost an octave away)

<br>

The bass line is currently the root note of the chord progression an octave lower than the chord.

<br>

The bass line and chords are going to sound SUPPPERRRR generic because of the basic level it's written and I'll improve it later but for now, it's good enough 