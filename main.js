studentarray=[];
function submit(){
    var display_array=[];

for(var j=1;j<=4;j++){
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student);
    studentarray.push(name_of_the_student);
}
console.log(studentarray);
var length_of_studentarray=studentarray.length
    for(var k=0;k<length_of_studentarray;k++){
        display_array.push("<h4>name-"+studentarray[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas = display_array.join(" "); console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting() { studentarray.sort();
     console.log(studentarray); 
     var display_student_array_sorting = [];
      var lenght_of_name_of_students_array = studentarray.length;
       console.log(lenght_of_name_of_students_array);
        for (var k = 0; k < lenght_of_name_of_students_array; k++)
         { display_student_array_sorting.push("NAME- " + studentarray[k] + "</h4>");

 console.log(display_student_array_sorting);
 } var remove_commas = display_student_array_sorting.join(" ");
  console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas; }
