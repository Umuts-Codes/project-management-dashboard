document.addEventListener("DOMContentLoaded", function() {
    const memberForm = document.getElementById("member-form");
    const membersTable = document.getElementById("members-table");

    // Daniel hakkında not kısmı
    const danielNote = {
        crewNumber: "459012",
        department: "Software Engineer",
        joinDate: "12/02/2025",
        roleDescription: "Perform code reviews<br>and testing to ensure<br>high-quality software.",
        email: "daniel@gmail.com"
    };

    // Sophia hakkında not kısmı
    const sophiaNote = {
        crewNumber: "783456",
        department: "Project Coordinator",
        joinDate: "12/05/2025",
        roleDescription: "Coordinate tasks among<br>team members and<br>track progress.",
        email: "sophia@gmail.com"
    };

    // Liam hakkında not kısmı
    const liamNote = {
        crewNumber: "996600",
        department: "Business Analyst",
        joinDate: "12/15/2025",
        roleDescription: "Identify process improvements<br>and propose actionable solutions.",
        email: "liam@gmail.com"
    };

    // Olivia hakkında not kısmı
    const oliviaNote = {
        crewNumber: "179845",
        department: "UX Designer",
        joinDate: "12/20/2025",
        roleDescription: "Analyze user behavior<br>using analytics tools<br>to improve UX.",
        email: "olivia@gmail.com"
    };

    memberForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const crewNumberInput = document.getElementById("member-name").value.trim();
        const departmentInput = document.getElementById("member-role").value.trim();
        const joinDateInput = document.getElementById("member-email").value.trim();

        let selectedMember = null;

        // Daniel kontrolü
        if (
            crewNumberInput.toLowerCase() === danielNote.crewNumber.toLowerCase() &&
            departmentInput.toLowerCase() === danielNote.department.toLowerCase() &&
            joinDateInput.toLowerCase() === danielNote.joinDate.toLowerCase()
        ) {
            selectedMember = danielNote;
        }
        // Sophia kontrolü
        else if (
            crewNumberInput.toLowerCase() === sophiaNote.crewNumber.toLowerCase() &&
            departmentInput.toLowerCase() === sophiaNote.department.toLowerCase() &&
            joinDateInput.toLowerCase() === sophiaNote.joinDate.toLowerCase()
        ) {
            selectedMember = sophiaNote;
        }
        // Liam kontrolü
        else if (
            crewNumberInput.toLowerCase() === liamNote.crewNumber.toLowerCase() &&
            departmentInput.toLowerCase() === liamNote.department.toLowerCase() &&
            joinDateInput.toLowerCase() === liamNote.joinDate.toLowerCase()
        ) {
            selectedMember = liamNote;
        }
        // Olivia kontrolü
        else if (
            crewNumberInput.toLowerCase() === oliviaNote.crewNumber.toLowerCase() &&
            departmentInput.toLowerCase() === oliviaNote.department.toLowerCase() &&
            joinDateInput.toLowerCase() === oliviaNote.joinDate.toLowerCase()
        ) {
            selectedMember = oliviaNote;
        }

        // Eğer biri bulunduysa tabloya ekle
        if (selectedMember) {

            // Tabloyu temizle → Böylece sadece girilen üye görünür
            membersTable.innerHTML = "";

            const newRow = document.createElement("tr");
            newRow.classList.add("member-row");

            if (selectedMember === sophiaNote) {
                newRow.classList.add("sophia-row");
            }
            if (selectedMember === liamNote) {
                newRow.classList.add("liam-row");
            }
            if (selectedMember === oliviaNote) {
                newRow.classList.add("olivia-row");
            }

            // Name
            const nameCell = document.createElement("td");
            if (selectedMember === danielNote) nameCell.textContent = "Daniel";
            else if (selectedMember === sophiaNote) nameCell.textContent = "Sophia";
            else if (selectedMember === liamNote) nameCell.textContent = "Liam";
            else if (selectedMember === oliviaNote) nameCell.textContent = "Olivia";
            newRow.appendChild(nameCell);

            // Role (alt alta metin)
            const roleCell = document.createElement("td");
            roleCell.innerHTML = selectedMember.roleDescription;
            newRow.appendChild(roleCell);

            // Email
            const emailCell = document.createElement("td");
            emailCell.textContent = selectedMember.email;
            newRow.appendChild(emailCell);

            // Tabloya ekle
            membersTable.appendChild(newRow);

            // Formu temizle
            memberForm.reset();
        }
    });
});

