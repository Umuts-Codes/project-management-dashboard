document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-task');

    const allowedTasks = ['Task', 'task', 'assigned to', 'Assigned To', 'status', 'Status', 'deadline', 'Deadline'];

    // Progress bar ve Quick Stats elementleri
    const progressFill = document.querySelector('.progress-fill');
    const totalTasksEl = document.querySelector('#stats .stats-cards .stat-card:nth-child(1) span');
    const completedTasksEl = document.querySelector('#stats .stats-cards .stat-card:nth-child(2) span');
    const openTasksEl = document.querySelector('#stats .stats-cards .stat-card:nth-child(3) span');

    let taskAdded = false;     
    let deadlineAdded = false; 
    let statusAdded = false;   
    let assignedAdded = false; // sadece bir Assigned To eklenebilir

    addBtn.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (!taskValue) return;

        if (!allowedTasks.includes(taskValue)) {
            taskInput.value = '';
            return;
        }

        const taskValueLower = taskValue.toLowerCase();

        // Task ekleme
        if (taskValueLower === 'task') {
            if (!taskAdded) taskAdded = true;

            progressFill.style.width = '50%';
            progressFill.style.backgroundColor = '#1abc9c';

            totalTasksEl.textContent = '22';
            completedTasksEl.textContent = '10';
            openTasksEl.textContent = '7';
        }

        // Deadline ekleme
        if (taskValueLower === 'deadline') {
            if (!deadlineAdded) deadlineAdded = true;

            progressFill.style.width = '10%';
            progressFill.style.backgroundColor = '#1abc9c';

            totalTasksEl.textContent = '5';
            completedTasksEl.textContent = '0';
            openTasksEl.textContent = '2';
        }

        // Status ekleme
        if (taskValueLower === 'status') {
            if (!statusAdded) statusAdded = true;

            progressFill.style.width = '44%';
            progressFill.style.backgroundColor = '#1abc9c';

            totalTasksEl.textContent = '18';
            completedTasksEl.textContent = '8';
            openTasksEl.textContent = '5';
        }

        // Assigned To ekleme
        if (taskValueLower === 'assigned to') {
            if (!assignedAdded) assignedAdded = true;

            progressFill.style.width = '80%';
            progressFill.style.backgroundColor = '#1abc9c';

            totalTasksEl.textContent = '19';
            completedTasksEl.textContent = '7';
            openTasksEl.textContent = '4';
        }

        taskInput.value = ''; // input temizle
    });
});





