function submissionHandler() {
    
    var nameElem = document.getElementById('name').value;
    var emailElem = document.getElementById('mailBox').value;
    var phoneElem = document.getElementById('phoneBox').value;
    var AppointmentDate = document.getElementById("adate").value;
    
    var checkDate = new Date();
    var today = new Date();
    checkDate.setDate(AppointmentDate.substring(8,10));
    checkDate.setMonth(AppointmentDate.substring(5,7)-1);
    checkDate.setDate(AppointmentDate.substring(8,10));
    checkDate.setFullYear(AppointmentDate.substring(0,4));
    
    var difference = checkDate - today;

    if (difference <= 0){
        alert('Appointment Date cannot be in the past');
        return false;
    }

    var formDiv = document.getElementById('formDiv');
    var returnHTML = '<p id="responseText">';
    returnHTML += 'Thank You ' +nameElem+ ', for filling the Online Consulation form.<br> Our Team will verify your details shortly and send you the Payment Link.<br> Zoom meeting Details for Consultation will be shared after successful payment.<br>';
    returnHTML += '</p><p id = "responseBold">Please Review below Contact information.</p>';
    returnHTML +='<table id="response"><tr><td> Email</td><td>'+ emailElem+'</td></tr>';

    if(phoneElem.value !== '') {

        returnHTML += '<tr><td> Phone </td><td>'+phoneElem+'</td></tr></table>';
    }


    formDiv.innerHTML = returnHTML;

    return false;
}

var myForm = document.querySelector('form');
myForm.onsubmit = submissionHandler;