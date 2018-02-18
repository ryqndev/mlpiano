/*
This is the formatting for musical notation that can be read by my program

It will be store in JSON data and it will contain information about the music to be played


For an example, I will be using Vance Joy's Riptide because thats one of the top songs listed on guitar tabs when I was looking for songs to emulate

Also, I really didn't want to do a sam smith song because I got really tired of them
smh my brother kept playing it on repeat like what stop it it ruins it

anyways, this is the json notation


Extra note: since vance joy's song is literally the same chord progression the entire 3 minutes, i don't need to add any extra identifiers to the song, however, I will add that later. For now, the entire thing is hardcoded as one song and not broken up

Extra thanks to the people at midi.js who made the music playing software open source because I really didn't wnat to write that entire thing as well. I'm already reinventing the wheel here but the other musical software notation was hard for me to understand. If I build it from ground up, I'll be able to navigate everything better
*/

var Riptide_VanceJoy = {
    'bpm': 102,
    'chordProgression': ['am', 'g', 'c'],
    'noteLength' : 9,
    'melodyNotes': ['a', 'b', 'c', 'd', 'e', 'a', 'g', 'f', 'e'],
    'octave'     : [ 4 ,  4 ,  5 ,  5 ,  5 ,  5 ,  5 ,  5  , 5 ],
    'beats'      : [ 0 , 0.5, 1  , 1.5,  2 , 2.5,  3 , 3.5 , 4 ]
}

var song_data = Riptide_VanceJoy;
/*
    the melody section of the JSON will be composed a key-value pair of note-beatcount
    
    I was thinking about using separate arrays for melody and beats like this:
    
    ''melody':['a', 'b', 'c'],
    'beats': [1, 2, 3]
    
    But it's not efficient enough to have to go through every single array as opposed to doing key value
    
    WAIT... hold on no it's the same. 
    I'm not exactly running in O(2n) time, it's running in O(1) time. Pretty much the exact same as if I did a key-value
    
    I'm going to go back to using separate arrays
    
 */

/*
Program has no need for time signatures because evertyihng will be based off the bpm and total number of beats. Rather than going 1,2,3,4,1,2,3,4 I'm going to do 1,2,3,4,5,6,7,8,9.... 

If I happen to need measures, then I can simply do a bunch of modulus and division and counter math.
*/