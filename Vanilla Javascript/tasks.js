document.addEventListener("DOMContentLoaded", () => {
    const taskTable = document.getElementById("task-table");
    const taskForm = document.getElementById("task-form");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("task-name").value.trim();
        const dateInput = document.getElementById("deadline").value.trim();
        if (!name || !dateInput) return;

        let content = "";
        let cellId = "";

        switch(name.toLowerCase()) {
            case "elizabeth":
                content = `-Elizabeth-<br>Update project<br>timeline and milestones.<br>11/30/2025`;
                cellId = "assigned-elizabeth";
                break;
            case "michael":
                content = `-Michael-<br>Update project status<br>report for management review.<br>11/25/2025`;
                cellId = "status-michael";
                break;
            case "john":
                content = `-John-<br>Prepare detail<br>progress summaries<br>for weekly report.<br>11/20/2025`;
                cellId = "task-john";
                break;
            case "emily":
                content = `-Emily-<br>Verify and finalize<br>new submission timelines.<br>12/01/2025`;
                cellId = "deadline-emily";
                break;
        }

        // Tüm hücrelerin ID listesi
        const cells = ["task-john","assigned-elizabeth","status-michael","deadline-emily"];

        // Yeni satırı baştan oluştur
        const tr = document.createElement("tr");
        let rowHTML = "";

        cells.forEach(id => {
            const wrapperClass = `wrapper-${id.split("-")[1]}`;
            const innerContent = id === cellId ? content : "";
            rowHTML += `
                <td id="${id}">
                    <div class="${wrapperClass}">
                        ${innerContent}
                    </div>
                </td>
            `;
        });

        tr.innerHTML = rowHTML;

        // Mevcut tabloyu tamamen temizle, tek satır ekle
        taskTable.innerHTML = "";
        taskTable.appendChild(tr);

        taskForm.reset();
    });
});

