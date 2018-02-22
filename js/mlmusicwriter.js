var c1 = [];
var c2 = [];
var c3 = [];
var c4 = [];

/*
Writing the data for the not occuren

*/
var noteOccurence = {
    "chord1": {},
    "chord2": {},
    "chord3": {},
    "chord4": {}
}
var notePatterns;

//input will be the chord progression. 
//will be trained using melodies of different songs 
var chordInput = [[52, 56, 59], [59, 63, 66], [49,52, 56], [57, 61, 64]];
var melodyInput;
function analyzeDataSet(){
    divideMelodyIntoChords(Demons_ImagineDragons);
    divideMelodyIntoChords(HeySoulSister_Train);
    y = [c1,c2,c3,c4];
    findOccurenceOfNote();
    displayNoteOccurence(y);
}
function displayNoteOccurence(y){
    
}
function divideMelodyIntoChords(songData){
    for(let i = 0; i < songData['beats'].length; i++){
        var mel_beat = songData['beats'][i]%8;
        if(mel_beat < 2){
            c1.push(songData['melodyNotes'][i]);
        }else if(mel_beat >= 2 && mel_beat < 4){
            c2.push(songData['melodyNotes'][i]);
        }else if(mel_beat >= 4 && mel_beat < 6){
            c3.push(songData['melodyNotes'][i]);
        }else{
            c4.push(songData['melodyNotes'][i]);
        }
    }
}
//setup functions
function findOccurenceOfNote(){
    for(let i = 24; i <= 107; i++){
        noteOccurence["chord1"][i] = 0;
        noteOccurence["chord2"][i] = 0;
        noteOccurence["chord3"][i] = 0;
        noteOccurence["chord4"][i] = 0;
    }
    for(let i = 1; i < 5; i++){
        var name = 'c'+ i;
        var chordName = 'chord'+ i;
        for(let j = 0; j < window[name].length; j++){
            noteOccurence[chordName][window[name][j]] = noteOccurence[chordName][window[name][j]] + 1;
        }
    }
}

//deeplearning.js base code
/*

const a = dl.variable(dl.scalar(Math.random()));
const b = dl.variable(dl.scalar(Math.random()));
const c = dl.variable(dl.scalar(Math.random()));
const learningRate = 0.01;
const optimizer = dl.train.sgd(learningRate);
function predict(input) {
  // y = a * x ^ 2 + b * x + c
  return dl.tidy(() => {
    const x = dl.scalar(input);

    const ax2 = a.mul(x.square());
    const bx = b.mul(x);
    const y = ax2.add(bx).add(c);

    return y;
  });
}
function loss(prediction, actual){
  const error = dl.scalar(actual).sub(prediction).square();
  return error;
}
async function train(xs, ys, numIterations, done) {
  let currentIteration = 0;
  for (let iter = 0; iter < numIterations; iter++) {
    for (let i = 0; i < xs.length; i++) {
      optimizer.minimize(() => {
        const pred = predict(xs[i]);
        const predLoss = loss(pred, ys[i]);
        return predLoss;
      });
    }
    await dl.nextFrame();
  }
  done();
}
function test(xs, ys) {
  dl.tidy(() => {
    const predictedYs = xs.map(predict);
    console.log('Expected', ys);
    console.log('Got', predictedYs.map((p) => p.dataSync()[0]));
  })
}
const data = {
  xs: [0, 1, 2, 3],
  ys: [1.1, 5.9, 16.8, 33.9]
};
console.log('Before training: using random coefficients')
test(data.xs, data.ys);
train(data.xs, data.ys, 50, () => {
  console.log(
      `After training: a=${a.dataSync()}, b=${b.dataSync()}, c=${c.dataSync()}`)
  test(data.xs, data.ys);
});

*/