
const barContainer = document.getElementById("barcontainer");

function drawBarChart(element, barData, options) {
  createBarWrapper(element, barData, options);
  createYDivs(barData, options);
  createXDivs(barData, options);
  setTitle(options);
}

function findMaxValue(data) {
  let maxValue = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data[i].length; j++) {
      if (data[i][j].value > maxValue) {
        maxValue = data[i][j].value;
      }
    }
  }
  return Math.ceil(maxValue/100) * 100;
}

function createBarWrapper(element, barData, options) {
  for (let i = 0; i <= barData.length - 1; i++) {
    let barWrapper = document.createElement("div");
    barWrapper.className = 'barwrapper';
    barWrapper.setAttribute('id', 'barwrapper' + (i + 1));
    element.appendChild(barWrapper);
    barWrapper.style.backgroundColor = generateColor(200, 255)
    createMultiBars(barData, options, i);
  }
}

function createMultiBars(barData, options, i) {
  let barWrapper = document.getElementById('barwrapper' + (i + 1));
  for (let j = 1; j < barData[i].length; j++) {
    let bar = document.createElement("div");
    bar.setAttribute('id', "bar" + j);
    styleBar(barData, options, bar, i, j);
    barWrapper.appendChild(bar);
  }
}

function styleBar(barData, options, div, barWrapperIndex, barIndex) {
  div.className = 'bar';
  let backgroundColor = barData[barWrapperIndex][barIndex].color
  div.setAttribute('style', 'background-color: ' + backgroundColor);
  div.style.marginLeft = options.pxSpace + 'px';
  div.style.marginRight = options.pxSpace + 'px';
  div.style.height = barData[barWrapperIndex][barIndex].value * 100 / (findMaxValue(barData)) + "%";
  let textSpan = document.createElement("span");
  if (extractRGB(div.style.backgroundColor) > 450) {
    textSpan.style.color = 'black';
  } else {
    textSpan.style.color = 'white';
  }
  // textSpan.style.color = barData[barWrapperIndex][barIndex].labelColor;
  textSpan.setAttribute("class", "textSpan");
  if (barData[barWrapperIndex][barIndex].value === 0) {
  } else {
    if (options.unit === 'percentage') {
    textSpan.innerHTML = barData[barWrapperIndex][barIndex].value + '%';
  } else {
    textSpan.innerHTML = barData[barWrapperIndex][barIndex].value;
    }
  }
  if (options.barTextLocation === "center") {
    div.style.alignItems = "center";
  } else if (options.barTextLocation === "bottom") {
    div.style.alignItems = "flex-end";
  } else if (options.barTextLocation === "top") {
    div.style.alignItems = "flex-start";
  } else {
    div.style.alignItems = "center";
  }
  div.appendChild(textSpan);
}

function extractRGB(str) {
  rgbTotal = 0;
  let rgbArray = str.substring(4, str.length-1).replace(/ /g, '').split(',');
  for (let i = 0; i <= 2; i++) {
    rgbTotal += parseInt(rgbArray[i], 10);
  }
  console.log(rgbTotal)
  return rgbTotal
}

function createYDivs(barData, options) {
  let maxValue = findMaxValue(barData);
  const yAxis = document.getElementById("yaxis");
  for (let i = maxValue; i >= 0; i -= options.yIncrement) {
    let yDiv = document.createElement("div");
    yDiv.classList = 'yDiv';
    yDiv.setAttribute('id', 'yDiv' + i);
    yDiv.innerHTML = "<span>" + i + " -" + "</span>";
    yAxis.appendChild(yDiv);
  }
}

function createXDivs(barData) {
  const xAxis = document.getElementById("xaxis");
  for (let i = 0; i <= barData.length - 1; i++) {
    let xDiv = document.createElement("div");
    xDiv.setAttribute('id', 'xDiv' + (i + 1));
    xDiv.classList = 'xDiv';
    xDiv.innerHTML = barData[i][0]
    xDiv.classlist = 'xDiv';
    xAxis.appendChild(xDiv);
  }
}

function setTitle(options) {
  let header = document.getElementById("header");
  header.innerHTML = options.title;
  header.style.fontSize = options.fontSize;
}

function generateColor(min, max) {
  let r = randomBetween(min, max);
  let g = randomBetween(min, max);
  let b = randomBetween(min, max);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function randomBetween(min, max) {
  let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
  return randomNumber;
}

let multiBarObjectArray1 = [
  ['Mart Daemon',
  {value: 369, color: 'rgb(116, 81, 200)', labelColor: 'white'}],
  ["Elawn Moose",
  {value: 560, color: 'rgb(85, 192, 152)', labelColor: 'black'}],
  ["Deep Forking Value",
  {value: 999, color: 'rgb(173, 69, 215)', labelColor: 'white'}],
  ["Jarf Blazeit",
  {value: 150, color: 'rgb(67, 248, 21)', labelColor: 'black'}],
]

let multiBarObjectArray2 = [
  ['Canada',
  {value: 25, color: 'rgb(66, 218, 66)', labelColor: 'black'},
  {value: 75, color: 'rgb(67, 181, 220)', labelColor: 'white'}],
  ["Russia",
  {value: 50, color: 'rgb(66, 218, 66)', labelColor: 'black'},
  {value: 50, color: 'rgb(67, 181, 220)', labelColor: 'white'}],
  ["USA",
  {value: 10, color: 'rgb(66, 218, 66)', labelColor: 'black'},
  {value: 90, color: 'rgb(67, 181, 220)', labelColor: 'white'}],
  ["Europe",
  {value: 35, color: 'rgb(66, 218, 66)', labelColor: 'black'},
  {value: 65, color: 'rgb(67, 181, 220)', labelColor: 'white'}]
]

let multiBarObjectArray3 = [
  ['Value 1',
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'}],
  ["Value 2",
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'black'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'}],
  ["Value 3",
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'black'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'black'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'black'}],
  ["Value 4",
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'},
  {value: randomBetween(0, 1000), color: generateColor(0, 255), labelColor: 'white'}],
]


let optionsObject1 = {
  yIncrement: 100,
  pxSpace: 50,
  title: "Bro of The Year",
  fontSize: "20px",
  barTextLocation: 'top',
  unit: 'number'
}

let optionsObject2 = {
  yIncrement: 10,
  pxSpace: 10,
  title: "Cats Vs. Dogs - A Regional Comparison",
  fontSize: "30px",
  barTextLocation: 'center',
  unit: 'percentage'
}

let optionsObject3 = {
  yIncrement: 100,
  pxSpace: 7,
  title: "Graphical Bar Chart",
  fontSize: "50px",
  barTextLocation: 'bottom',
  unit: 'number'
}

drawBarChart(barContainer, multiBarObjectArray2, optionsObject2);

$("#button1").click(function(){
  $('#barcontainer').empty();
  $('#xaxis').empty();
  $('#yaxis').empty();
  drawBarChart(barContainer, multiBarObjectArray1, optionsObject1);
});

$("#button2").click(function(){
  $('#barcontainer').empty();
  $('#xaxis').empty();
  $('#yaxis').empty();
  drawBarChart(barContainer, multiBarObjectArray2, optionsObject2);
});

$("#button3").click(function(){
  $('#barcontainer').empty();
  $('#xaxis').empty();
  $('#yaxis').empty();
  drawBarChart(barContainer, multiBarObjectArray3, optionsObject3);
});

