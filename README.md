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

----

# Musical Notation

This is the formatting for musical notation that can be read by my program
<br>
It will be store in JSON data and it will contain information about the music to be played
<br>
For an example, I will be using Vance Joy's Riptide because thats one of the top songs listed on guitar tabs when I was looking for songs to emulate
<br>
Also, I really didn't want to do a sam smith song because I got really tired of them
smh my brother kept playing it on repeat like what stop it it ruins it
<br>
anyways, this is the json notation
<br>

>var Riptide_VanceJoy = {
>    'bpm': 102,
>    'chordProgression': ['am', 'g', 'c'],
>    'noteLength' : 9,
>    'melodyNotes': ['a', 'b', 'c', 'd', 'e', 'a', 'g', 'f', 'e'],
>    'octave'     : [ 4 ,  4 ,  5 ,  5 ,  5 ,  5 ,  5 ,  5  , 5 ],
>    'beats'      : [ 0 , 0.5, 1  , 1.5,  2 , 2.5,  3 , 3.5 , 4 ]
>}

<br>
Extra note: since vance joy's song is literally the same chord progression the entire 3 minutes, i don't need to add any extra identifiers to the song, however, I will add that later. For now, the entire thing is hardcoded as one song and not broken up
<br>
Extra thanks to the people at midi.js who made the music playing software open source because I really didn't wnat to write that entire thing as well. I'm already reinventing the wheel here but the other musical software notation was hard for me to understand. If I build it from ground up, I'll be able to navigate everything better
