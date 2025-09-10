document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let regNo = document.getElementById("regNo").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits!");
    return;
  }

  const studentData = {
    name,
    regNo,
    phone,
    email,
  };

  document.getElementById("output").innerHTML = JSON.stringify(studentData, null, 2)
    .replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");

  let table = document.getElementById("studentTable");
  let row = table.insertRow(-1); 

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = regNo;
  row.insertCell(2).innerText = phone;
  row.insertCell(3).innerText = email;

  let actionsCell = row.insertCell(4);

  // Edit Button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    document.getElementById("name").value = row.cells[0].innerText;
    document.getElementById("regNo").value = row.cells[1].innerText;
    document.getElementById("phone").value = row.cells[2].innerText;
    document.getElementById("email").value = row.cells[3].innerText;

    table.deleteRow(row.rowIndex);
    window.scrollTo(0, 0);
  };

  // Delete Button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.onclick = function () {
    if (confirm("Are you sure you want to delete this record?")) {
      table.deleteRow(row.rowIndex);
    }
  };

  actionsCell.appendChild(editBtn);
  actionsCell.appendChild(deleteBtn);

  this.reset();


});
