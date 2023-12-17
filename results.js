import { get } from './IdeologyFinder.js';

const urlParams = new URLSearchParams(window.location.search);
const rightParam = parseFloat(urlParams.get('right')) || 0; 
const authParam = parseFloat(urlParams.get('auth')) || 0; 

const result = get(rightParam, authParam);

const resultContainer = document.getElementById('result-container');
resultContainer.textContent = "Ideology match: " + result;
