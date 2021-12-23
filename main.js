var names = [];

function submit() {
    var name_1 = document.getElementById("student1").value;
    var name_2 = document.getElementById("student2").value;
    var name_3 = document.getElementById("student3").value;
    var name_4 = document.getElementById("student4").value;

    names.push(name_1);
    names.push(name_2);
    names.push(name_3);
    names.push(name_4);

    console.log(names);

    document.getElementById("names").innerHTML = names;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";
}

function sorting() {
    names.sort();

    console.log(names);

    document.getElementById("names").innerHTML = names;
}