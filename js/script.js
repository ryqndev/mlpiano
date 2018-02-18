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


var noteNum = {
    
    
    
};

var bps = 1;

function pN(note, delay){
    var num = 0;
    var vel = 127;
    MIDI.setVolume(num, 127);
    MIDI.noteOn(num, note, vel, delay);
    MIDI.noteOff(num, note, delay + 0.5);
}

function playMusic(){
    setBPM(102);
    var bass = setInterval(chords, bps*8000);
    //chords();
   
    //chords(3);
    //pN(48, 1);
    //pN(50, 1.5);   
}
function setBPM(bpm){
    bps = (bpm/60);
    bps = 1.0/bps;
}

function bassLine(octave){
    
    
    
}
function strumPattern(){
    // ok i need to rant about this to something and someone and i'm hoping that this will hide under all my commits and no one is actually going to look through every single commit and open up every single file. anyways holy shit my life is a roler coaster like i literally did not need this. why would you say that to me? my life was literally just fine and you HAD to tell me that? wtf ok look i admit i was pretty hard about this but seriously... holy fuck i can't eat i can't sleep. it shouldn't even be affecting me but it is and it bothers me so flippin much..... i hate everything rn holy shit
}
function chords(){  
    gC('min', 57, 0);
    gC('min', 57, bps/2);
    //measure 2
    gC('min', 57, bps + bps/4);
    gC('min', 57, bps + bps/2);
    gC('min', 57, bps + bps*(3/4));
    //measure 3
    gC('maj', 55, bps*2);
    gC('maj', 55, bps*2 + bps/2);
    //measure 4
    gC('maj', 55, bps*3 + bps/4);
    gC('maj', 55, bps*3 + bps/2);
    gC('maj', 55, bps*3 + bps*(3/4));
    //measure 5
    gC('maj', 48, bps*4);
    gC('maj', 48, bps*4 + bps/2);
    gC('maj', 48, bps*4 + bps*(3/4));
    //measure 6
    gC('maj', 48, bps*5 + bps/4);
    gC('maj', 48, bps*5 + bps/2);
    gC('maj', 48, bps*5 + bps*(3/4));
    //measure 7
    gC('maj', 48, bps*6);
    gC('maj', 48, bps*6 + bps/2);
    gC('maj', 48, bps*6 + bps*(3/4));
    //measure 8
    gC('maj', 48, bps*7 + bps/4);
    gC('maj', 48, bps*7 + bps/2);
    gC('maj', 48, bps*7 + bps*(3/4));
}

function gC(type, note, delay){
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
        default:
            console.log("chord type not recognized");
            break;
    }
}
function pF(note, delay){
    pN(note, delay);
    pN(note+7, delay);
}
function pO(note, delay){
    pN(note, delay);
    pN(note+12, delay);
}