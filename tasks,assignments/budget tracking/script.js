const budgetForm = document.getElementById("budget-form");
const budgetSummary = document.getElementById("budget-summary");

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${category}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${type}</td>
    `;
    budgetSummary.appendChild(newRow);

    budgetForm.reset();
});
