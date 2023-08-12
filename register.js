function isValid(){
    let x = document.forms["reg"];
    if(x["bname"].value == "" || x["pname"].value == "" || x["phone"].value == ""){
        alert("ชื่อบริษัท ชื่อผู้ติดต่อ และเบอร์ผู้ติดต่อ ห้ามเป็นค่าว่าง");
        return false;
    } else if (x["size"].value == "none") {
        alert("ต้องมีการเลือกขนาดบูธ");
        return false;
    } else if (x["cnum"].value < 1 || x["cnum"].value > 10){
        alert("จำนวนเก้าอี้ต้องอยู่ระหว่าง 1 ถึง 10 ตัว");
        return false;
    }
}