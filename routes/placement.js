module.exports = function(app){
   
    app.get('/placement', function (req, res) {
    console.log("User Requested Placement Page Page");
      res.sendfile('app/pages/index.html');
    });
}
