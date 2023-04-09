import { Student, Employee, Customer } from "./Person.js";

export class List {
  danhSach = [];
  themDanhSach(son) {
    this.danhSach.push(son);
  }
  renderTablePerSon(selectorTbody) {
    let htmlContent = "";
    for (let son of this.danhSach) {
      htmlContent += `
           <tr>
            <td>${son.id}</td>
            <td>${son.regency}</td>
            <td>${son.name}</td>
            <td>${son.address}</td>
            <td>${son.email}</td>
            <td>
            <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="Sua(
                '${son.id}'
              )">Sửa</button>
              <button class="btn btn-danger my-1" onclick="deletePerSon('${son.id}')">Xóa</button>
              </td>
           </tr>
           `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }

  //luu
  luuLocalStorage() {
    let stringDS = JSON.stringify(this.danhSach);
    localStorage.setItem("DS", stringDS);
  }
  //lay
  layLocalStorage() {
    if (localStorage.getItem("DS")) {
      let stringDS = localStorage.getItem("DS");
      this.danhSach = JSON.parse(stringDS);
    }
  }
  //xoa
  xoaPerSon(id) {
    for (let index in this.danhSach) {
      if (this.danhSach[index].id === id) {
        this.danhSach.splice(index, 1);
        break;
      }
    }
  }
  // Sửa
  Sua(id) {
    for (let son of this.danhSach) {
      if (son.id === id) {
        return son;
      }
    }
    return undefined;
  }
  // update
  capNhat(sonCapNhat) {
    for (let son of this.danhSach) {
      if (son.id === sonCapNhat.id) {
        for (let key in son) {
          son[key] = sonCapNhat[key];
        }
      }
    }
  }
  /* 
  function filterListByRegency(listPerson, regency) {
  const newList = new List(); // rỗng
  const newStu = new StudentList(); // rỗng
  const newEpl = new EmployeeList(); // rỗng
  const newCus = new CustomerList(); // rỗng
  newList.danhSach = listPerson; // newList chứa all phần tử trong 'DS'
  newStu.danhSach = listPerson;
  newEpl.danhSach = listPerson;
  newCus.danhSach = listPerson;
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
}
  */
}
export class StudentList {
  danhSach = [];
  themDanhSach(std) {
    this.danhSach.push(std);
  }
  renderStudent(selectorTbody) {
    let htmlContent = "";
    for (let son of this.danhSach) {
      let std = new Student();
      Object.assign(std, son);
      htmlContent += `
        <tr>
          <td>${std.id}</td>
          <td>${std.regency}</td>
          <td>${std.name}</td>
          <td>${std.address}</td>
          <td>${std.email}</td>
          <td>
          <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="Sua('${
            std.id
          }')">Sửa</button>
          <button class="btn btn-danger my-1" onclick="deletePerSon('${
            std.id
          }')">Xóa</button>
        </td>
        <tr>
        <th class="student-table d-block" id="thMath">Toán</th>
        <td>${std.math}</td>
        </tr>
        <tr>
        <th class="student-table d-block" id="thMath">Lý</th>
        <td>${std.physics}</td>
        </tr>
        <tr>
        <th class="student-table d-block" id="thMath">Hóa</th>
        <td>${std.chemistry}</td>
        </tr>
        <tr>
        <th class="student-table d-block" id="thMath">Điểm TB</th>
        <td>${std.diemTrungBinh()}</td>
        </tr>
        </tr>
      `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
export class EmployeeList {
  danhSach = [];
  themDanhSach(epl) {
    this.danhSach.push(epl);
  }
  renderEmployee(selectorTbody) {
    let htmlContent = "";
    for (let son of this.danhSach) {
      let epl = new Employee();
      Object.assign(epl, son);
      console.log(epl);
      htmlContent += `
      <tr>
       <td>${epl.id}</td>
       <td>${epl.regency}</td>
       <td>${epl.name}</td>
       <td>${epl.address}</td>
       <td>${epl.email}</td>
       <td>
       <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="Sua(
           '${epl.id}'
         )">Sửa</button>
         <button class="btn btn-danger my-1" onclick="deletePerSon('${
           epl.id
         }')">Xóa</button>
         </td>
         <tr>
         <th class="employee-table d-block">Date of work</th>
         <td>${epl.dayOfWork}</td>
         </tr>
 <tr>
         <tr>
         <th class="employee-table d-block">SalaryOneDay</th>
         <td>${epl.salaryOneDay}</td>
         </tr>
         <tr>
         <th class="employee-table d-block" id="thSumSalary">Tổng lương</th>
         <td>${epl.tongLuong()}</td
         </tr>
      </tr>
      `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
export class CustomerList {
  danhSach = [];
  themDanhSach(cus) {
    this.danhSach.push(cus);
  }
  renderCustomer(selectorTbody) {
    let htmlContent = "";
    for (let son of this.danhSach) {
      let cus = new Customer();
      Object.assign(cus, son);
      console.log(cus);
      htmlContent += `
          <tr>
           <td>${cus.id}</td>
           <td>${cus.regency}</td>
           <td>${cus.name}</td>
           <td>${cus.address}</td>
           <td>${cus.email}</td>
           <td>
           <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="Sua(
               '${cus.id}'
             )">Sửa</button>
             <button class="btn btn-danger my-1" onclick="deletePerSon('${cus.id}')">Xóa</button>
             </td>

             </td>
        <tr>
        <th class="customer-table d-block" id="thNameCompany"> Tên công ty </th>
        <td>${cus.nameCompany}</td>
        </tr>
        <tr>
        <th class="student-table d-block" id="thMath">Đánh giá</th>
        <td>${cus.review}</td>
        </tr>
        <tr>
        <th class="student-table d-block" id="thMath">Hóa đơn</th>
        <td>${cus.invoiceValue}</td
        </tr>
          </tr>
          `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
