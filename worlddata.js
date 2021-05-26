function worlddata(){
    d3.csv("country_profile_variables.csv", function(data) {
    console.log(data[2]);
        /*for (var i = 0; i < 20; i++) {
        console.log(data[i].Country);
        console.log(data[i].Value);
    }*/
});
}