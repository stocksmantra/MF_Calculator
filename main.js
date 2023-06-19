function updateSlider(sourceId, targetId, valueId) {
  const sourceInput = document.getElementById(sourceId);
  const targetInput = document.getElementById(targetId);
  const valueInput = document.getElementById(valueId);

  targetInput.value = sourceInput.value;
  valueInput.value = sourceInput.value;

  updateSliderColor(sourceInput, valueInput);
}

function updateSliderColor(input, value) {
  const track = input.nextElementSibling.firstElementChild;

  if (input.value == input.min) {
    track.style.backgroundColor = '#f1f1f1';
  } else if (input.value == input.max) {
    track.style.backgroundColor = '#04AA6D';
  } else {
    track.style.backgroundColor = '#FFC107';
  }
}

function calculate() {
  const investment = parseFloat(document.getElementById("investmentAmount").value);
  const returnRate = parseFloat(document.getElementById("returnRate").value) / 100;
  const timePeriod = parseFloat(document.getElementById("timePeriod").value);

  const [investedAmount, estimatedReturn, totalValue] = calculateMutualFundReturns(investment, returnRate, timePeriod);

  const resultContainer = document.getElementById("result-container");

  resultContainer.innerHTML = "";

  const investedAmountElement = document.createElement("p");
  investedAmountElement.innerText = "Invested Amount: ₹" + investedAmount.toFixed(2);

  const estimatedReturnElement = document.createElement("p");
  estimatedReturnElement.innerText = "Estimated Return: ₹" + estimatedReturn.toFixed(2);

  const totalValueElement = document.createElement("p");
  totalValueElement.innerText = "Total Value: ₹" + totalValue.toFixed(2);

  resultContainer.appendChild(investedAmountElement);
  resultContainer.appendChild(estimatedReturnElement);
  resultContainer.appendChild(totalValueElement);
}

function calculateMutualFundReturns(investment, returnRate, timePeriod) {
  const investedAmount = investment;
  const estimatedReturn = investment * (Math.pow(1 + returnRate, timePeriod) - 1);
  const totalValue = investedAmount + estimatedReturn;

  return [investedAmount, estimatedReturn, totalValue];
}
