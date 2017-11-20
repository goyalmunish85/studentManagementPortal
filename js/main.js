let studentArr = [
    {
        "nameOfStudent" : "Munish Goyal",
        "rollnoOfStudent" : "1510991389",
        "passout" : "2019",
        "stream" : "CSE"
    },
    {
        "nameOfStudent" : "Anchit Chawla",
        "rollnoOfStudent" : "1510991072",
        "passout" : "2019",
        "stream" : "CSE"
    }
];

let replaceCall = true;
let insertcall = false;

function insertRecord()
{ 
    $("#table-colp").collapse('hide');
    insertcall = true;
    let i = document.getElementsByClassName("form-control");   
    i[0].value = "";
    i[1].value = "";
    i[2].value = "";
    i[3].value = "";
}
function dRecord(d)
{
    let el = document.getElementsByTagName("tbody");
    el[0].parentElement.removeChild(el[0]);
    studentArr.splice(d,1);
    display();
}
let ins;


function iRecord()
{
    $("#form-colp").collapse('hide');
    let studentObj ={
        "nameOfStudent" : "",
        "rollnoOfStudent" : "",
        "passout" : "",
        "stream" : ""
    }
    let i = document.getElementsByClassName("form-control");   
    studentObj.nameOfStudent = i[0].value;
    i[0].value = "";
    studentObj.rollnoOfStudent = i[1].value;
    i[1].value = "";
    studentObj.passout = i[2].value;
    i[2].value = "";
    studentObj.stream = i[3].value;
    i[3].value = "";
    studentArr.push(studentObj);
}
function deleteRecord()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Enter Roll No. of Student:", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            studentArr.forEach((element, index) => {
                if(element.rollnoOfStudent === value) {
                    dRecord(index);
                }
            });
        }
    });
}
function editRecord()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Enter Roll No. of Student:", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            studentArr.forEach((element, index) => {
                if(element.rollnoOfStudent === value) {
                    eRecord(index);
                }
            });
        }
      });
}
function eRecord(e)
{
    $("#table-colp").collapse('hide');
    let el = document.getElementsByTagName("tbody");
    
    $("#form-colp").collapse('show');
    
    let i = document.getElementsByClassName("form-control");
    i[0].value = studentArr[e].nameOfStudent; 
    i[1].value = studentArr[e].rollnoOfStudent;
    i[2].value = studentArr[e].passout;
    i[3].value = studentArr[e].stream;
    insertcall = false;
    ins =e;
}
function rRecord()
{
    $("#form-colp").collapse('hide');
    let i = document.getElementsByClassName("form-control");
    studentArr[ins].nameOfStudent = i[0].value; 
    studentArr[ins].rollnoOfStudent = i[1].value;
    studentArr[ins].passout = i[2].value;
    studentArr[ins].stream = i[3].value;
}

function display()
{   
    $("#form-colp").collapse('hide');
    if(document.getElementsByTagName("tbody").length==0)
    {
        let element = document.getElementsByTagName("table");
        let tbodyTag = document.createElement("tbody");
        for(let j = 0 ;j < studentArr.length; j++)
        {
            let trTag = document.createElement("tr");

            let tdTag = document.createElement("td");
            tdTag.innerHTML = studentArr[j].nameOfStudent;
            trTag.appendChild(tdTag);
            
            let td2 = document.createElement("td");
            td2.innerHTML = studentArr[j].rollnoOfStudent;
            trTag.appendChild(td2);
            
            let td3 = document.createElement("td");
            td3.innerHTML = studentArr[j].passout;
            trTag.appendChild(td3);
            
            let td4 = document.createElement("td");
            td4.innerHTML = studentArr[j].stream;
            trTag.appendChild(td4);

            let td5 = document.createElement("td");
            let aTag1 = document.createElement("a");
            let iTag1 = document.createElement("i");
            aTag1.className = "btn btn-default";
            iTag1.className = "fa fa-pencil-square-o";
            aTag1.appendChild(iTag1);
            aTag1.onclick = function() { eRecord(j); };
            td5.appendChild(aTag1);
            let aTag2 = document.createElement("a");
            let iTag2 = document.createElement("i");
            aTag2.className = "btn btn-danger";
            iTag2.className = "fa fa-trash-o";
            aTag2.appendChild(iTag2);
            aTag2.onclick = function() { dRecord(j); };
            td5.appendChild(aTag2);
            trTag.appendChild(td5);
            
            tbodyTag.appendChild(trTag);  
        }
        element[0].appendChild(tbodyTag);
    }
}

function funcall()
{
    
    if(document.getElementsByTagName("tbody").length) 
    {
        let el = document.getElementsByTagName("tbody");
        el[0].parentElement.removeChild(el[0]);
    }
    if(insertcall == true)
    {
        iRecord();
    }
    else if(replaceCall == true)
    {
        rRecord();
    }
}