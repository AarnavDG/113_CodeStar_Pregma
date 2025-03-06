document.getElementById('calculate-btn').addEventListener('click', function () {
    const lmpDate = document.getElementById('lmp-date').value;
    if (!lmpDate) {
        alert('Please enter a valid date.');
        return;
    }

    const dueDate = calculateDueDate(lmpDate);
    document.getElementById('due-date').textContent = dueDate.toDateString();
    document.getElementById('result').style.display = 'block';
});

function calculateDueDate(lmpDate) {
    const lmp = new Date(lmpDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(lmp.getDate() + 280); // Adding 280 days (40 weeks) to LMP
    return dueDate;
}