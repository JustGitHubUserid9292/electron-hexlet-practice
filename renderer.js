let users = [];

document.getElementById('addUserBtn').addEventListener('click', () => {
    document.getElementById('userModal').style.display = 'flex';
});

document.getElementById('userName').addEventListener('input', () => {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none'; 
});


document.getElementById('userEmail').addEventListener('input', () => {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none'; 
});

document.getElementById('saveUserBtn').addEventListener('click', () => {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const errorMessage = document.getElementById('errorMessage');

    if (name && email) {
        users.push({ name, email });
        updateUsersTable();

        document.getElementById('userModal').style.display = 'none';
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        errorMessage.style.display = 'none'; 
    } else {
        errorMessage.style.display = 'block';
    }
});



document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('userModal').style.display = 'none'; 
    document.getElementById('userName').value = ''; 
    document.getElementById('userEmail').value = '';
    document.getElementById('errorMessage').style.display = 'none';
});

function updateUsersTable() {
    const usersBody = document.getElementById('usersBody');
    usersBody.innerHTML = '';

    users.forEach((user) => {
        const row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                    </tr>`;
        usersBody.innerHTML += row;
    });
}
