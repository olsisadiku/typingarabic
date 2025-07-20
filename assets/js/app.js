var grams = {
    " ": {0.1: "ا", 0.2: "م", 0.3: "س", 0.4: "ح", 0.5: "ع", 0.6: "ب", 0.7: "ل", 0.8: "ت", 0.9: "ن", 1.0: "ر"},
    "ا": {0.1: "ل", 0.2: "م", 0.3: "ء", 0.4: "ن", 0.5: "ح", 0.6: "س", 0.7: "ب", 0.8: "ت", 0.9: "د", 1.0: "ك"},
    "م": {0.1: "ح", 0.2: "د", 0.3: " ", 0.4: "ي", 0.5: "ر", 0.6: "ا", 0.7: "ن", 0.8: "ت", 0.9: "ل", 1.0: "ع"},
    "س": {0.1: "ل", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ي", 0.6: "ح", 0.7: "ت", 0.8: "ر", 0.9: "ع", 1.0: "ب"},
    "ح": {0.1: "م", 0.2: "د", 0.3: " ", 0.4: "ب", 0.5: "ا", 0.6: "س", 0.7: "ت", 0.8: "ل", 0.9: "ر", 1.0: "ي"},
    "ل": {0.1: "ي", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "س", 0.7: "ت", 0.8: "ك", 0.9: "ع", 1.0: "ب"},
    "ي": {0.1: "د", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "س", 0.7: "ت", 0.8: "ن", 0.9: "ر", 1.0: "ل"},
    "د": {0.1: " ", 0.2: "ي", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "س", 0.7: "ت", 0.8: "ر", 0.9: "ل", 1.0: "ن"},
    "ع": {0.1: "ل", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "س", 0.7: "د", 0.8: "ب", 0.9: "ت", 1.0: "ر"},
    "ب": {0.1: "ر", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "س", 0.7: "ت", 0.8: "ل", 0.9: "ي", 1.0: "د"},
    "ر": {0.1: " ", 0.2: "ح", 0.3: "م", 0.4: "ا", 0.5: "ل", 0.6: "س", 0.7: "ت", 0.8: "ي", 0.9: "د", 1.0: "ب"},
    "ن": {0.1: "ت", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ي", 0.6: "س", 0.7: "ح", 0.8: "ل", 0.9: "ع", 1.0: "ب"},
    "ت": {0.1: "ر", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ح", 0.6: "ي", 0.7: "ل", 0.8: "س", 0.9: "ب", 1.0: "ن"},
    "ك": {0.1: "ت", 0.2: " ", 0.3: "م", 0.4: "ا", 0.5: "ل", 0.6: "ر", 0.7: "ي", 0.8: "س", 0.9: "ح", 1.0: "ن"},
    "ء": {1.0: " "}
};

for(var key in grams){
    var sorted = [];
    for(var p in grams[key])
        sorted.push(p);
    grams[key].sorted = sorted.sort(function(a, b){return parseFloat(a)-parseFloat(b);});
}

function generateWords(n){
    if(!n){
        n = 1;
    }
    var words = [];
    for(var i=0; i<n; i++){
        var w = ' ';
        var last = w;
        // Random word length between 5 and 7
        var maxLen = Math.floor(Math.random() * 3) + 5; // 5, 6, or 7
        var charCount = 0;
        while(true){
            var rand = Math.random();
            var p_list = grams[last].sorted;
            for(var k=0; k+1 < p_list.length && parseFloat(p_list[k]) < rand; k++);
            var char = grams[last][p_list[k]];
            if(char === ' '){
                if(w.length > 5 && charCount >= 5)
                    break;
            }
            else{
                w += char;
                charCount++;
                if(charCount >= maxLen) break;
            }
            last = char;
            if(!(last in grams)) break;
        }
        words.push(w.substring(1));
    }
    return words;
}

document.addEventListener('DOMContentLoaded', function() {
    function setupTypingGame() {
        const words = generateWords(10);
        var string = "";
        words.forEach(word => {
            string += word + ' ';
        });
        return string;
    }

    let string = setupTypingGame();
    const inputField = document.getElementById('input-field');
    let highlightContainer = document.getElementById('highlight-container');
    const wordContainer = document.getElementById('word-container');

    // If highlightContainer doesn't exist (first load), create it
    if (!highlightContainer) {
        highlightContainer = document.createElement('div');
        highlightContainer.id = 'highlight-container';
        highlightContainer.style.fontSize = '2rem';
        highlightContainer.style.marginTop = '1rem';
        wordContainer.appendChild(highlightContainer);
    }

    function updateHighlight(input, target) {
        let html = '';
        input = input.normalize('NFC');
        target = target.normalize('NFC');
        for (let i = 0; i < target.length; i++) {
            if (i < input.length) {
                if (input[i] === target[i]) {
                    html += `<span class='correct-letter'>${target[i]}</span>`;
                } else {
                    html += `<span class='incorrect-letter'>${target[i]}</span>`;
                }
            } else {
                html += `<span>${target[i]}</span>`;
            }
        }
        highlightContainer.innerHTML = html;
    }

    inputField.addEventListener('input', (e) => {
        updateHighlight(e.target.value, string);
        if (e.target.value === string) {
            // Generate new words and reset
            string = setupTypingGame();
            inputField.value = '';
            updateHighlight('', string);
        }
    });
    // Initialize highlight on page load
    updateHighlight('', string);
}); 