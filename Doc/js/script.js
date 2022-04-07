function myfunticon() {
    var a = document.getElementById("search").value;
    if (a === "Blog") {
        self.location = "";
    } else if (a === "blog") {
        self.location = "";
    } else if (a === "Home") {
        self.location = "https://webhoctap1.github.io/";
    } else if (a === "home") {
        self.location = "";
    }

    if (a === "youtube") {
        window.open("https://www.youtube.com/");
    } else if (a === "Youtube") {
        window.open("https://youtube.com/");
    }
    if (a === "Khóa học IT") {
        window.open("https://fullstack.edu.vn");
    } else if (a === "khóa học it") {
        window.open("https://fullstack.edu.vn");
    }
    if (a === "Wikipedia") {
        self.location = "https://phungbatam.github.io/wikipedia-tim-kiem-khoa-hoc-thu-vien-lap-trinh/";
    } else if (a === "wikipedia") {
        self.location = "https://phungbatam.github.io/wikipedia-tim-kiem-khoa-hoc-thu-vien-lap-trinh/";
        alert("Đây là một wikipedia tự tạo do super code làm ra!");
    }
    return true;
}
