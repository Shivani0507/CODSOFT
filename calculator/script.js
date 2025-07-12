const expressionBox = document.getElementById('expression');
const resultBox = document.getElementById('result');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let expression = "";

function append(value) {
  expression += value;
  expressionBox.textContent = expression;
  resultBox.textContent = "=";
}

function clearAll() {
  expression = "";
  expressionBox.textContent = "0";
  resultBox.textContent = "= 0";
}

function backspace() {
  expression = expression.slice(0, -1);
  expressionBox.textContent = expression || "0";
}

function calculate() {
  try {
    let result = eval(expression);
    if (result === undefined) {
      resultBox.textContent = "= 0";
      return;
    }
    if (typeof result === 'number') {
      result = parseFloat(result.toFixed(10));
    }
    resultBox.textContent = "= " + result;

    const li = document.createElement('li');
    li.textContent = `${expression} = ${result}`;
    historyList.appendChild(li);
    historyList.scrollTop = historyList.scrollHeight;

    expression = result.toString();
    expressionBox.textContent = expression;
  } catch {
    resultBox.textContent = "= Error";
  }
}

clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = "";
});
