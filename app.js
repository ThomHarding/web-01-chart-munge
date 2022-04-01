import { exportData } from './data.js';

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
let dataMap = [];
for (let data of exportData) {
    if (dataMap.purchase_frequency) {
        dataMap.purchase_frequency++;
    } else {
        dataMap.purchase_frequency = 1;
    }
}

const dataOne = {
    labels: ['Once', 'Seldom', 'Often', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
    datasets: [{
        label: 'Customers by Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: exportData,
        parsing: {
            yAxisKey: 'purchase_frequency'
        }
    }]
};

const dataTwo = {
    labels: ['Once', 'Seldom', 'Often', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
    datasets: [{
        label: 'Customers by Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: exportData['purchase_frequency'],
    }]
};

const dataThree = {
    labels: ['Once', 'Seldom', 'Often', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
    datasets: [{
        label: 'Customers by Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: exportData,
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