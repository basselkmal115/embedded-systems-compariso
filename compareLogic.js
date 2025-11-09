document.getElementById('highlightBtn').addEventListener('click', function() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (!row.style.backgroundColor) {
            row.style.backgroundColor = '#fff3cd'; // soft yellow highlight
        } else {
            row.style.backgroundColor = ''; // remove highlight
        }
    });
    alert('Main differences highlighted successfully!');
});
