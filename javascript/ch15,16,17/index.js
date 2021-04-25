

courses = [];

course1 = prompt("Course1 " , "HTML");
course2 = prompt("Course2 ", "CSS");
course3 = prompt("Course2 ", "Javascript");
course4 = prompt("Course4 " , "AdvanceJavascript");
course5 = prompt("Course5 ", "React");

courses.push(course1)
courses.push(course2)
courses.push(course3)
courses.push(course4)
courses.push(course5)
alert(courses)

alert(courses[0])
alert(courses[1])
alert(courses[2])
alert(courses[3])
alert(courses[4])

course1 = prompt("First Course", courses[0]);
courses.splice(0,1,course1);
course2 = prompt("Second Course", courses[1]);
courses.splice(1,1,course2);
course3 = prompt("Third Course", courses[2]);
courses.splice(2,1,course3);
course4 = prompt("Fourth Course", courses[3]);
courses.splice(3,1,course4);
course5 = prompt("Fifth Course", courses[4]);
courses.splice(4,1,course5);

alert(courses);






