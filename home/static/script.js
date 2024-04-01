let employees = []; // Initialize an empty array for employees

function displayEmployees() {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = ''; // Clear existing entries

    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = employee.name;
        row.insertCell(1).textContent = employee.position;

        const actionCell = row.insertCell(2);
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function() {
            updateEmployee(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteEmployee(index);
        });

        actionCell.appendChild(updateButton);
        actionCell.appendChild(deleteButton);
    });
}

function addEmployee() {
    const newName = prompt('Enter employee name:');
    const newPosition = prompt('Enter employee position:');

    if (newName && newPosition) {
        employees.push({ name: newName, position: newPosition });
        saveTolocalStorage();
        displayEmployees();
    }
}

function updateEmployee(index) {
    const newName = prompt('Enter updated name:', employees[index].name);
    const newPosition = prompt('Enter updated position:', employees[index].position);

    if (newName !== null && newPosition !== null) {
        employees[index].name = newName;
        employees[index].position = newPosition;
        displayEmployees();
    }
}

function deleteEmployee(index) {
    if (confirm(`Are you sure you want to delete ${employees[index].name}?`)) {
        employees.splice(index, 1);
        saveTolocalStorage();
        displayEmployees();
    }
}

function saveTolocalStorage(){
    localStorage.setItem('employees', JSON.stringify(employees))
}

displayEmployees();
