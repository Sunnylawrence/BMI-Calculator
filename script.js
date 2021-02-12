
$("#calcBMI").click(function(){

    const mass=Number($("#yourMass").val());

    const name = $("#yourName").val();
    
const height= Number($("#yourHeight").val());
$('#output').css("display", "block");

if(name==""){

   $('#output').text(`Hi! please add your name`);

} else if(mass==""){

    $('#output').text(`Hi! ${name} please add your mass`);

} else if(height==""){

    $('#output').text(`Hi! ${name} please add your height`);

} else{

let BMI = Math.floor(mass/height**2) ;


$('#output').text(`Hi! ${name} your BMI is ${BMI}`);


}
})



