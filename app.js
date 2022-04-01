import { exportData } from './data.js';

let purchaseFreqMap = [];
let coolFactorMap = [];
let genderMap = [];

for (let data of exportData) {
    if (purchaseFreqMap[data.purchase_frequency]) {
        purchaseFreqMap[data.purchase_frequency]++;
    } else {
        purchaseFreqMap[data.purchase_frequency] = 1;
    }
    if (coolFactorMap[data.cool_factor]) {
        coolFactorMap[data.cool_factor]++;
    } else {
        coolFactorMap[data.cool_factor] = 1;
    }
    if (genderMap[data.gender]) {
        genderMap[data.gender]++;
    } else {
        genderMap[data.gender] = 1;
    }
}

const dataOne = {
    labels: ['Daily', 'Monthly', 'Never', 'Often', 'Once', 'Seldom', 'Weekly', 'Yearly'],
    datasets: [{
        label: 'Customers by Purchase Frequency',
        backgroundColor: 'rgb(124, 0, 132)',
        borderColor: 'rgb(255, 99, 0)',
        data: 
          [
              purchaseFreqMap['Daily'],
              purchaseFreqMap['Monthly'],
              purchaseFreqMap['Never'],
              purchaseFreqMap['Often'],
              purchaseFreqMap['Once'],
              purchaseFreqMap['Seldom'],
              purchaseFreqMap['Weekly'],
              purchaseFreqMap['Yearly']
          ]
    }]
};

const dataTwo = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
        label: 'Customers by Cool Factor',
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: coolFactorMap,
    }]
};

const dataThree = {
    labels: [
        'Agender',
        'Bigender',
        'Female',
        'Genderfluid',
        'Genderqueer',
        'Male',
        '"Non-binary"',
        'Polygender',
    ],
    datasets: [{
        label: 'Customers by Gender',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(0, 99, 132)',
            'rgb(255, 255, 132)',
            'rgb(255, 0, 132)',
            'rgb(255, 99, 0)',
            'rgb(255, 99, 255)',
            'rgb(0, 0, 132)',
            'rgb(255, 0, 0)'
        ],
        hoverOffset: 4,
        data: [
            genderMap['Agender'],
            genderMap['Bigender'],
            genderMap['Female'],
            genderMap['Genderfluid'],
            genderMap['Genderqueer'],
            genderMap['Male'],
            genderMap['"Non-binary"'],
            genderMap['Polygender']
        ],
    }]
};


const configOne = {
    type: 'line',
    data: dataOne,
    options: {
        xAxisKey: 'purchase_frequency',
    }
};

const configTwo = {
    type: 'bar',
    data: dataTwo,
    options: {}
};

const configThree = {
    type: 'pie',
    data: dataThree,
    options: {}
};

const chartOne = new Chart(// eslint-disable-line
    document.getElementById('custByPurchFreqBar'),
    configOne
);

const chartTwo = new Chart(// eslint-disable-line
    document.getElementById('custByCoolFactorLine'),
    configTwo
);

const chartThree = new Chart(// eslint-disable-line
    document.getElementById('custByGenderPie'),
    configThree
);