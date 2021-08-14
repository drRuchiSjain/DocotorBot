function talk(){
    var know ={
        "Hello Doctor":"Hello",
        "How are you?":"Great !",
        "I want to book a appointment!": "Ok sure, Our Clinic is open from Monday-Friday 1-5 pm",
        "Ok i want for Tuesday 2 pm" : "Booked",
        "Thank you":"Welcome, Have A Nice Day!",
        
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}