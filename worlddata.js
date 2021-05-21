function worlddata(){
    d3.json("CPV_array.json", function(data) {
    console.log(data);
        /*for (var i = 0; i < 20; i++) {
        console.log(data[i].Country);
        console.log(data[i].Value);
    }*/
});
}