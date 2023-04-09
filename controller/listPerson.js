import {
  List,
  StudentList,
  EmployeeList,
  CustomerList,
} from "../models/List.js";
import { Person } from "../models/Person.js";
import {
  validPerson,
  validStudent,
  validEmployee,
  validCustomer,
} from "../until/validation.js";
let list = new List();
list.layLocalStorage(); // lay
list.renderTablePerSon("#tBodylist");

document.getElementById("btnAdd").onclick = function () {
  let son = new Person();
  var tagSelect = document.getElementById("typeForm");
  var viTriTheChon = tagSelect.selectedIndex;
  var regency = tagSelect.options[viTriTheChon].innerHTML;
  son.regency = regency;
  let arrInput = document.querySelectorAll(
    ".modal-body select , .modal-body input"
  );
  for (let input of arrInput) {
    let { id, value } = input;
    son[id] = value;
  }
  if (!validPerson()) {
    return;
  }
  console.log("son", son);
  //
  list.themDanhSach(son);
  //
  list.renderTablePerSon("#tBodylist");
  //
  list.luuLocalStorage();
  //
  resetForm();
};
window.deletePerSon = function (id) {
  list.xoaPerSon(id);
  // render
  list.renderTablePerSon("#tBodylist");
  list.luuLocalStorage();
};

window.Sua = function (id) {
  document.querySelector("#btnClick").click();
  let sonCapNhat = list.Sua(id);
  if (sonCapNhat) {
    var arrInput = document.querySelectorAll(
      ".modal-body select , .modal-body input"
    );
    for (let input of arrInput) {
      let { id } = input;
      input.value = sonCapNhat[id];
      var tagSelect = document.getElementById("typeForm");
      var viTriTheChon = tagSelect.selectedIndex;
      var regency = tagSelect.options[viTriTheChon].innerHTML;
      sonCapNhat.regency = regency;
    }
  }
};

document.querySelector("#btnUpdate").onclick = function () {
  var sonCapNhat = new Person();
  const newList = new List();
  const newStu = new StudentList(); // rỗng
  const newEpl = new EmployeeList(); // rỗng
  const newCus = new CustomerList(); // rỗng
  let arrInput = document.querySelectorAll(
    ".modal-body select , .modal-body input"
  );
  for (let input of arrInput) {
    let { id, value } = input;
    sonCapNhat[id] = value;
    var tagSelect = document.getElementById("typeForm");
    var viTriTheChon = tagSelect.selectedIndex;
    var regency = tagSelect.options[viTriTheChon].innerHTML;
    sonCapNhat.regency = regency;
  }

  console.log(sonCapNhat);
  list.capNhat(sonCapNhat);
  list.luuLocalStorage();
  const listPerson = list.danhSach;
  // list.renderTablePerSon("#tBodylist");
  if (regency !== "all") {
    const personRegency = listPerson.filter(
      (person) => person.regency == regency
    );
    newList.danhSach = personRegency;
    newStu.danhSach = personRegency;
    newEpl.danhSach = personRegency;
    newCus.danhSach = personRegency;
  }
  switch (regency) {
    case "sinh viên":
      if (!validStudent()) {
        return;
      }
      newStu.renderStudent("#tBodylist");
      break;
    case "nhân viên":
      if (!validEmployee()) {
        return;
      }
      newEpl.renderEmployee("#tBodylist");
      break;
    case "khách hàng":
      if (!validCustomer()) {
        return;
      }
      newCus.renderCustomer("#tBodylist");
      break;
    default:
      if (!validPerson()) {
        return;
      }
      newList.renderTablePerSon("#tBodylist");
      break;
  }

  resetForm();
};

// Hàm reset
function resetForm() {
  document.querySelector("#typeForm").value = "Chọn loại người dùng";
  document.querySelector("#name").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#id").value = "";

  document.querySelector("#math").value = "";
  document.querySelector("#physics").value = "";
  document.querySelector("#chemistry").value = "";

  document.querySelector("#dayOfWork").value = "";
  document.querySelector("#salaryOneDay").value = "";
  document.querySelector("#nameCompany").value = "";

  document.querySelector("#invoiceValue").value = "";
  document.querySelector("#review").value = "";
}
