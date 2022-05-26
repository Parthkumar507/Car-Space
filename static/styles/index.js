function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false

    var age=document.forms['myForm']['Year'].value;
    if(age){
        seterror("car-age", "*Age is above 15 Years");
        returnval = false;
    }

        console.log(age);
        return false;

    // return returnval;
}