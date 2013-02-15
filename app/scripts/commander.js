var
worker = new Worker('scripts/worker.js')
// , btn = document.getElementById('button')
, btn = document.querySelector('button.ask')
, answers = document.querySelector('#answers')
;

worker.addEventListener('message', function(e) {
    // console.log('No problem boss, it\'s ' + e.data);
    var answer = document.createElement('li');
    answer.textContent = 'No problem boss, it\'s ' + e.data;
    answers.appendChild(answer);
}, false);


btn.addEventListener('click', function(e) {
    var
    max = 100
    , min = 1
    , rand1 = Math.floor(Math.random() * (max - min + 1)) + min
    , rand2 = Math.floor(Math.random() * (max - min + 1)) + min
    , question = document.createElement('li')
    ;

    question.textContent = 'Worker please add these numbers: ' + rand1 + ', ' + rand2;
    answers.appendChild(question);

    worker.postMessage([rand1, rand2]); // Send data to our worker.
}, false);
