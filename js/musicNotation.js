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
const Riptide_VanceJoy = {
    'bpm': 102,
    'chordProgression': ['a min', 'g maj', 'c maj', 'c maj'],
    'melodyNotes': [57, 59, 60, 62, 64, 69, 67, 62, 64, 57, 59, 60, 62, 64, 69, 67, 65, 64, 62, 64, 62, 64, 67, 64, 62, 64, 62, 64, 62, 64, 62, 60 ],
    'beats': [0,0.5,1,1.5,2,2.5,3,3.5,3.75,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.66,16,16.5,17,17.5,18,18.5,19,19.5,20,20.33,20.5, 23.66,24,25,28,31.5,32,34,36,40]
}
const GoodLife_OneRepublic = {
    'bpm': 52,
    'chordProgression': ['g maj', 'c maj', 'e min', 'd maj'],
    'melodyNotes': [],
    'beats'      : []
}
const HeySoulSister_Train = {
    'bpm': 55,
    'chordProgression': ['e maj', 'b maj', 'c#min', 'a maj'],
    'melodyNotes': [68, 66, 64, 66, 68, 61, 64, 66, 68, 61, 59, 68, 68, 68, 66, 68, 69, 68, 66, 64, 68, 68, 68, 64 ,69, 68, 66, 64, 68, 64, 64, 69, 68, 66, 64, 63, 59, 59, 63, 64, 61, 64, 68, 64, 59, 66, 68, 69, 68, 66, 64, 68, 64, 64, 66, 61 ],
    'beats': [1.5, 2, 3, 3.25, 3.5, 3.75, 5, 5.25, 5.5, 5.75, 7.75, 8 ,8.5, 9, 10.5,10.75, 11, 11.25,11.5, 11.75, 12, 12.5, 13, 14.875, 15, 15.25, 15.5, 15.75, 16, 16.25, 16.875, 17, 17.25, 17.5, 17.75, 18, 18.66, 19, 19.33, 20.75, 20, 20.5, 21]
}

const Demons_ImagineDragons = {
    'bpm': 55,
    'chordProgression': ['e maj', 'b maj', 'c#min', 'a maj'],
    'melodyNotes': [64, 64, 71, 68, 66, 64, 64, 71, 68, 66, 64, 64, 73, 68, 66, 64, 64, 69, 69, 69, 71, 71, 71, 71, 68, 71, 71, 71, 71, 76, 75,73, 68, 68, 68, 68, 68, 69, 69, 69, 69, 69,68, 68],
    'beats': [7.25, 7.5, 7.75, 8.5, 9, 9.25, 9.5, 9.75, 10.5, 11, 11.25, 11.5, 11.75, 12.5, 13, 13.25, 13.5, 13.75, 14.25, 14.75, 16.25, 16.5, 16.75, 17, 17.33, 17.67, 18.25, 18.5, 18.75, 19, 19.33, 19.67, 20.25]
}
const FourChords_Generic = {
    'bpm': 55,
    'chordProgression': ['abmaj', 'ebmaj', 'f min', 'c#maj'],
    'melodyNotes': [],
    'beats'      : []
}

var song_data = Demons_ImagineDragons;
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