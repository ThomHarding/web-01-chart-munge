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

console.log(coolFactorMap);

const dataOne = {
    labels: ['Daily', 'Monthly', 'Never', 'Often', 'Once', 'Seldom', 'Weekly', 'Yearly'],
    datasets: [{
        label: 'Customers by Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: purchaseFreqMap
    }]
};

const dataTwo = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
        label: 'Customers by Cool Factor',
        backgroundColor: 'rgb(255, 99, 132)',
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
        borderColor: 'rgb(255, 99, 132)',
        data: genderMap,
    }]
};


const configOne = {
    type: 'line',
    datasets: dataOne,
    options: {}
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

const chartOne = new Chart(
    document.getElementById('custByPurchFreqBar'),
    configOne
);

const chartTwo = new Chart(
    document.getElementById('custByCoolFactorLine'),
    configTwo
);

const chartThree = new Chart(
    document.getElementById('custByGenderPie'),
    configThree
);