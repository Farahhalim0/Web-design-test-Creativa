// var form = document.getElementById("myForm");
// var nameInput = document.getElementById("nameInput");
// var idInput = document.getElementById("idInput");
// var balanceInput = document.getElementById("balanceInput");
// var tableBody = document.getElementById("dataTable");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//    var name = nameInput.value.trim ();
//     var id = idInput.value.trim ();
//    var balance = balanceInput.value.trim ();

//     if (name === "" || id === "" || balance === "") {
//         alert("Please fill all fields.");
//         return;
//     }

//    var newRow = document.createElement("tr");

//     newRow.innerHTML = `
//         <td>${name}</td>
//         <td>${balance}</td>
//         <td>${id}</td>
//         <td>
//             <button class="btn btn-danger deleteBtn">Delete</button>
//             <button class="btn btn-danger editBtn">Edit Balance</button>
//         </td>
//     `;

//     tableBody.appendChild(newRow);

//     nameInput.value = "";
//     idInput.value = "";
//     balanceInput.value = "";
// });


// tableBody.addEventListener("click", function (e) {
//     if (e.target.classList.contains("deleteBtn")) {
//         var row = e.target.closest("tr");
//         row.remove();
//     }

//     if (e.target.classList.contains("editBtn")) {
//         var row = e.target.closest("tr");
//        var balanceCell = row.children[1];
//         var newBalance = prompt("Enter new balance:", balanceCell.textContent);
//         if (newBalance !== null && newBalance.trim() !== "") {
//             balanceCell.textContent = newBalance;
//         }
//     }
// });

var form = document.getElementById("myForm");
var nameInput = document.getElementById("nameInput");
var idInput = document.getElementById("idInput");
var balanceInput = document.getElementById("balanceInput");
var tableBody = document.getElementById("dataTable");

 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addUser();
});

 
tableBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        deleteUser(e);
    }

    if (e.target.classList.contains("editBtn")) {
        edit(e);
    }
});


function addUser() {
    var name = nameInput.value.trim();
    var id = idInput.value.trim();
    var balance = balanceInput.value.trim();

    if (name === "" || id === "" || balance === "") {
        alert("Please fill all fields.");
        return;
    }

    showUser(name, id, balance);

    nameInput.value = "";
    idInput.value = "";
    balanceInput.value = "";
}


function showUser(name, id, balance) {
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${name}</td>
            <td>${balance}</td>
            <td>${id}</td>
            <td>
                <button class="btn btn-danger deleteBtn">Delete</button>
                <button class="btn btn-danger editBtn">Edit Balance</button>
            </td>
        `;

    tableBody.appendChild(newRow);
}

function edit(e) {
    var row = e.target.closest("tr");
    var balanceCell = row.children[1];
    var newBalance = prompt("Enter new balance:", balanceCell.textContent);

    if (newBalance !== null && newBalance.trim() !== "") {
        balanceCell.textContent = newBalance.trim();
    }
}

 
function deleteUser(e) {
    var row = e.target.closest("tr");
    row.remove();
}