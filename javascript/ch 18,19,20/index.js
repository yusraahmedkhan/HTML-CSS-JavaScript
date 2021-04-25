var course = [];

course1 = prompt("Enter course1", "HTML");
course2 = prompt("Enter course2", "CSS");
course3 = prompt("Enter course3", "Javascript");
course4 = prompt("Enter course4", "AdvanceJavascript");
course5 = prompt("Enter course5", "React");


course.push(course1);
course.push(course2);
course.push(course3);
course.push(course4);
course.push(course5);

alert(course);




for (i = 0; i < course.length; i++) {
    
    alert(course[i]);
};