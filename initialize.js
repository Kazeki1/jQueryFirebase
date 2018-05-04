var db = firebase.firestore();
var employeesRef = db.collection("employees");

//comment out ln12-end, run and see data from
employeesRef.get().then((querySnapshot) => {
  employeesRef.orderBy("fname", "asc").limit(10).get().then(function (querySnapshot) {
    LoadTableData(querySnapshot);
  })
})

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


//edit the following, uncomment and comment ln5-9 above, run, and update db
// employeesRef.doc("Z.Stone").set({
//   fname: "Zena",
//   lname: "Stone",
//   email: "zstone@hatena.ne.jp",
//   age: 41,
//   gender: "Female",
//   yearsOfExperience: 6,
//   isFullTime: true
// });

// employeesRef.doc("G.Parsons").set({
//   fname: "George",
//   lname: "Parsons",
//   email: "gparson@hatena.ne.jp",
//   age: 39,
//   gender: "Male",
//   yearsOfExperience: 7,
//   isFullTime: false
// });

// employeesRef.doc("M.Sea").set({
//   fname: "Mike",
//   lname: "Sea",
//   email: "msea@hatena.ne.jp",
//   age: 36,
//   gender: "Male",
//   yearsOfExperience: 6,
//   isFullTime: true
// });

// employeesRef.doc("N.Diamond").set({
//   fname: "Neil",
//   lname: "Diamond",
//   email: "ndiamond@hatena.ne.jp",
//   age: 55,
//   gender: "Male",
//   yearsOfExperience: 13,
//   isFullTime: true
// });

// employeesRef.doc("P.Winslow").set({
//   fname: "Pamela",
//   lname: "Windslow",
//   email: "pwindslow@hatena.ne.jp",
//   age: 25,
//   gender: "Female",
//   yearsOfExperience: 8,
//   isFullTime: false
// });

// employeesRef.doc("S.Waters").set({
//   fname: "Sandy",
//   lname: "Waters",
//   email: "swaters@hatena.ne.jp",
//   age: 43,
//   gender: "Feale",
//   yearsOfExperience: 8,
//   isFullTime: true
// });

// employeesRef.doc("C.Masters").set({
//   fname: "Cindy",
//   lname: "Masters",
//   email: "cmasters@hatena.ne.jp",
//   age: 35,
//   gender: "Female",
//   yearsOfExperience: 1,
//   isFullTime: false
// });

// employeesRef.doc("T.Stone").set({
//   fname: "Tammy",
//   lname: "Stone",
//   email: "tstone@hatena.ne.jp",
//   age: 27,
//   gender: "Feale",
//   yearsOfExperience: 10,
//   isFullTime: true
// });

// employeesRef.doc("C.Hearts").set({
//   fname: "Cathy",
//   lname: "Hearts",
//   email: "cheart@hatena.ne.jp",
//   age: 26,
//   gender: "Female",
//   yearsOfExperience: 5,
//   isFullTime: true
// });

// employeesRef.doc("G.Cook").set({
//   fname: "Grant",
//   lname: "Cook",
//   email: "gcook@hatena.ne.jp",
//   age: 43,
//   gender: "Male",
//   yearsOfExperience: 20,
//   isFullTime: true
// });

// employeesRef.doc("W.Hanks").set({
//   fname: "Wilbur",
//   lname: "Hanks",
//   email: "whanks@hatena.ne.jp",
//   age: 27,
//   gender: "Male",
//   yearsOfExperience: 6,
//   isFullTime: false
// });

// employeesRef.doc("F.Weeks").set({
//   fname: "Florence",
//   lname: "Weeks",
//   email: "fweeks@hatena.ne.jp",
//   age: 30,
//   gender: "Female",
//   yearsOfExperience: 6,
//   isFullTime: false
// });
