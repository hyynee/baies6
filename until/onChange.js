import {
  List,
  StudentList,
  EmployeeList,
  CustomerList,
} from "../models/List.js";

document.querySelector("#searchRegency").onchange = (event) => {
  const listPerson = JSON.parse(localStorage.getItem("DS"));
  // lấy danh sách từ aplication về listPerson
  const newList = new List(); // rỗng
  const newStu = new StudentList(); // rỗng
  const newEpl = new EmployeeList(); // rỗng
  const newCus = new CustomerList(); // rỗng
  newList.danhSach = listPerson; // newList chứa all phần tử trong 'DS'
  newStu.danhSach = listPerson;
  newEpl.danhSach = listPerson;
  newCus.danhSach = listPerson;
  if (event.target.value !== "all") {
    const personRegency = listPerson.filter(
      (person) => person.regency == event.target.value
    );
    newList.danhSach = personRegency;
    newStu.danhSach = personRegency;
    newEpl.danhSach = personRegency;
    newCus.danhSach = personRegency;
  }
  switch (event.target.value) {
    case "sinh viên":
      newStu.renderStudent("#tBodylist");
      break;
    case "nhân viên":
      newEpl.renderEmployee("#tBodylist");
      break;
    case "khách hàng":
      newCus.renderCustomer("#tBodylist");
      break;
    default:
      newList.renderTablePerSon("#tBodylist");
      break;
  }
};
document.querySelector("#typeForm").onchange = (event) => {
  const student = [
    "name",
    "address",
    "id",
    "email",
    "math",
    "chemistry",
    "physics",
  ];
  const employee = [
    "name",
    "address",
    "id",
    "email",
    "dayOfWork",
    "salaryOneDay",
  ];
  const customer = [
    "name",
    "address",
    "id",
    "email",
    "nameCompany",
    "review",
    "invoiceValue",
  ];
  const input = document.querySelectorAll(".modal-body input");
  switch (event.target.value) {
    case "student":
      input.forEach((element) => {
        for (let inputRender of student) {
          if (element.id === inputRender) {
            element.style.display = "block";
            console.log(element.id);
            break;
          }
          element.style.display = "none";
        }
      });
      break;
    case "employee":
      input.forEach((element) => {
        for (let emrender of employee) {
          if (element.id === emrender) {
            element.style.display = "block";
            console.log(element);
            break;
          }
          element.style.display = "none";
        }
      });
      break;
    case "customer":
      input.forEach((element) => {
        for (let cusrender of customer) {
          if (element.id === cusrender) {
            element.style.display = "block";
            break;
          }
          element.style.display = "none";
        }
      });
  }
};
