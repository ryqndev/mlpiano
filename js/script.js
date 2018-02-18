window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
            playMusic();
		}
	});
};


var octave = 3;
var noteNum = {
    'c' : 0,
    'c#': 1,
    'db': 1,
    'd' : 2,
    'd#': 3,
    'eb': 3,
    'e' : 4,
    'fb': 4,
    'e#': 5,
    'f' : 5,
    'f#': 6,
    'gb': 6,
    'g' : 7,
    'g#': 8,
    'ab': 8,
    'a' : 9,
    'a#': 10,
    'bb': 10,
    'b' : 11,
    'cb': 11,
    'b#': 0,
};
var bps = 120;



function playMusic(){
    var chordProgression = ['amin', 'gmaj', 'cmaj', 'cmaj'];
    
    //1. set tempo
    setBPM(102);
    
    
    setInterval(function(){
        //2. set chords
        prebuiltchords();
        //chords(chordProgression);
        
        //3. set baseline
        bassLine(chordProgression);
        
        melody();
        
    }, bps*8000);
    
    //4. set melody
    //setInterval(melody, bps*8000);

    
    //5(?) add introduce verses/chorus/etc.
    
    
}
function melody(){
    pN(noteNum['a'] + (octave+2)*12 , 0);
    pN(noteNum['b'] + (octave+2)*12 , bps/2);
    pN(noteNum['c'] + (octave+3)*12 , bps);
    pN(noteNum['d'] + (octave+3)*12 , bps + bps/2);
    pN(noteNum['e'] + (octave+3)*12 , bps*2);
    pN(noteNum['a'] + (octave+3)*12 , bps*2 + bps/2);
    pN(noteNum['g'] + (octave+3)*12 , bps*3);
    pN(noteNum['f'] + (octave+3)*12 , bps*3 + bps*(3/4));
    pN(noteNum['e'] + (octave+3)*12 , bps*4);
}

function setBPM(bpm){
    bps = (bpm/60);
    bps = 1.0/bps;
}
function bassLine(chordProgression){
    for(i = 0; i < chordProgression.length; i++){
        type = chordProgression[i].substr(1,5);
        pO(parseInt(noteNum[chordProgression[i].substr(0,1)])+ (octave-1)*12,  bps*2*i);
    }
    
}
function strumPattern(){

}



//given a chord progression
function chords(chordProgression){
    for(i = 0; i < chordProgression.length; i++){
        type = chordProgression[i].substr(1,5);
        pC(type, parseInt(noteNum[chordProgression[i].substr(0,1)])+ (octave+1)*12,  bps*2*i);
    }
}

//prebuilt chords and strum pattern for Riptide
function prebuiltchords(){  
    pC('min', 57, 0);
    pC('min', 57, bps/2);
    //measure 2
    pC('min', 57, bps + bps/4);
    pC('min', 57, bps + bps/2);
    pC('min', 57, bps + bps*(3/4));
    //measure 3
    pC('maj', 55, bps*2);
    pC('maj', 55, bps*2 + bps/2);
    //measure 4
    pC('maj', 55, bps*3 + bps/4);
    pC('maj', 55, bps*3 + bps/2);
    pC('maj', 55, bps*3 + bps*(3/4));
    //measure 5
    pC('maj', 48, bps*4);
    pC('maj', 48, bps*4 + bps/2);
    pC('maj', 48, bps*4 + bps*(3/4));
    //measure 6
    pC('maj', 48, bps*5 + bps/4);
    pC('maj', 48, bps*5 + bps/2);
    pC('maj', 48, bps*5 + bps*(3/4));
    //measure 7
    pC('maj', 48, bps*6);
    pC('maj', 48, bps*6 + bps/2);
    pC('maj', 48, bps*6 + bps*(3/4));
    //measure 8
    pC('maj', 48, bps*7 + bps/4);
    pC('maj', 48, bps*7 + bps/2);
    pC('maj', 48, bps*7 + bps*(3/4));
}

//plays a chord given chord type, root note, and delay, will add inversions
function pC(type, note, delay){
    switch(type){
        case 'maj':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+7, delay);
            break;
        case 'maj7':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+7, delay);
            pN(note+11, delay);
            break;
        case 'min':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+7, delay);
            break;
        case 'min7':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+7, delay);
            pN(note+10, delay);
            break;
        case 'dim':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+6, delay);
            break;
        case 'dim7':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+6, delay);
            pN(note+9, delay);
        case 'aug':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+8, delay);
            break;
        case 'aug7':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+8, delay);
            pN(note+10, delay);
            break;
        default:
            console.log("chord type not recognized");
            break;
    }
}

//plays a perfect fifth given root note
function pF(note, delay){
    pN(note, delay);
    pN(note+7, delay);
}

//plays a perfect octave given root note
function pO(note, delay){
    pN(note, delay);
    pN(note+12, delay);
}

//plays a note
//default function called by all other play functions
function pN(note, delay){
    var num = 0;
    var vel = 127;
    MIDI.setVolume(num, 127);
    MIDI.noteOn(num, note, vel, delay);
    MIDI.noteOff(num, note, delay + 0.5);
}