document.addEventListener('DOMContentLoaded', () => {
    // Project Overview elementleri
    const totalTasksEl = document.getElementById('total-tasks');
    const completedTasksEl = document.getElementById('completed-tasks');
    const pendingTasksEl = document.getElementById('pending-tasks');
    const progressEl = document.getElementById('progress-percentage');

    // Quick Stats değerleri (ana sayfadan baz alınmış)
    const quickStats = [
        { total: 22, completed: 10, pending: 7 },   // Task
        { total: 19, completed: 7, pending: 4 },    // Assigned To
        { total: 18, completed: 8, pending: 5 },    // Status
        { total: 5,  completed: 0, pending: 2 }     // Deadline
    ];

    // Toplamları hesapla
    const totals = quickStats.reduce((acc, stat) => {
        acc.total += stat.total;
        acc.completed += stat.completed;
        acc.pending += stat.pending;
        return acc;
    }, { total: 0, completed: 0, pending: 0 });

    // Progress yüzdesi
    const progress = Math.round((totals.completed / totals.total) * 100);

    // Project Overview alanlarını doldur
    totalTasksEl.textContent = totals.total;
    completedTasksEl.textContent = totals.completed;
    pendingTasksEl.textContent = totals.pending;
    progressEl.textContent = progress + '%';







  // ------------------------------
    // Performance Charts
    // ------------------------------
    const chartsContainer = document.getElementById('charts-container');

    // Eğer canvas yoksa oluştur
    let canvas = chartsContainer.querySelector('canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'performanceChart';
        chartsContainer.innerHTML = ''; // placeholder <p> temizle
        chartsContainer.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');

    const chartData = {
        labels: ['Total Tasks', 'Completed Tasks', 'Pending Tasks'],
        datasets: [{
            label: 'Project Stats',
            data: [totals.total, totals.completed, totals.pending],
            backgroundColor: ['#00b4d8', '#1abc9c', '#f39c12'],
            hoverBackgroundColor: ['#00b4d8', '#1abc9c', '#f39c12'],
            borderRadius: 5,
            barPercentage: 0.5
        }]
    };




    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw;
                        }
                    }
                }
            },
              scales: {
            y: {
                beginAtZero: true,
                ticks: { 
                    stepSize: 5,
                    font: {
                        weight: '800' // <- font-weight burada eklendi
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        weight: '800' // <- x eksenine de eklendi
                    }
                }
            }
        }
    }
});
});



const logList = document.getElementById('log-list');

// Activity listesi
const activities = [
    
    'John is preparing weekly progress summaries for team review.',
    'Elizabeth is adjusting project milestones to reflect recent changes.',
    'Michael is compiling status report for management review.',
    'Emily is verifying and finalizing submission deadlines for next sprint.',
    
    
    'John reviewed budget allocations and updated the tracking sheet.',
    'Elizabeth coordinated timeline adjustments with the design team.',
    'Michael updated risk assessment report for ongoing tasks.',
    'Emily confirmed all deliverables met quality standards before submission.'
];

activities.forEach((activity, index) => {
    const li = document.createElement('li');
    li.textContent = activity;

    // Sadece Emily'nin şimdiki aktivitesi için ekstra boşluk
    if (activity.includes('Emily is verifying')) {
        li.classList.add('extra-space');
    }

    logList.appendChild(li);
});


