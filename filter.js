$(document).ready(function () {
  $('#onlyMalesFilter').click(function () {
    employeesRef.where("gender", "==", "Male")
      .onSnapshot(function (querySnapshot) {
        LoadTableData(querySnapshot);
      });
  });

  $('#fullTimeFilter').click(function () {
    employeesRef.where("isFullTime", "==", true)
      .onSnapshot(function (querySnapshot) {
        LoadTableData(querySnapshot);
      });
  });

  $('#olderThenFilter').click(function () {
    employeesRef.where("age", ">=", 30)
      .onSnapshot(function (querySnapshot) {
        LoadTableData(querySnapshot);
      });
  });

  $('#ageBetweenFilter').click(function () {
    employeesRef.where("age", ">=", 30).where("age", "<=", 50)
      .onSnapshot(function (querySnapshot) {
        LoadTableData(querySnapshot);
      });
  });

  $('#yearsOfExperienceFilter').click(function () {
    employeesRef.where("gender", "==", "female")
    employeesRef.where("yearsOfExperience", ">=", 5)
      .where("yearsOfExperience", "<=", 10)
      .onSnapshot(function (querySnapshot) {
        LoadTableData(querySnapshot);
      });
  });

  $('#clearFilter').click(function () {
    employeesRef.orderBy("fname", "asc").limit(10).get().then(function (querySnapshot) {
      LoadTableData(querySnapshot);
    });
  });

  $("#searchEmployee").change(function () {
    // console.log('You entered: ', $(this).val());
    var searchValue = $(this).val();
    employeesRef.where("fname", "==", searchValue)
      .onSnapshot(function(querySnapshot) {
        LoadTableData(querySnapshot)
      });

  });

});

db.collection("employees").onSnapshot(function (snapShot) {
  // console.log("something changed");
  snapShot.docChanges.forEach(function (change) {
    if (change.type === "added") {
      console.log("Employee Added");
    }
    if (change.type === "modified") {
      console.log("Employee Modified");
    }
    if (change.type === "removed") {
      console.log("Employee Removed");
    }
  });
  LoadTableData(snapShot);
});

function LoadTableData(querySnapshot) {
  var tableRow = '';
  querySnapshot.forEach(function (doc) {
    var document = doc.data();
    tableRow += '<tr>';
    tableRow += '<td class="fname">' + document.fname + '</td>';
    tableRow += '<td class="lname">' + document.lname + '</td>';
    tableRow += '<td class="email">' + document.email + '</td>';
    tableRow += '<td class="age">' + document.age + '</td>';
    tableRow += '<td class="gender">' + document.gender + '</td>';
    tableRow += '<td class="yearsOfExperience">' + document.yearsOfExperience + '</td>';
    tableRow += '<td class="isFullTime">' + document.isFullTime + '</td>';
    tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>';
    tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>';
    tableRow += '</tr>';
  })
  $('tbody.tbodyData').html(tableRow);
};
