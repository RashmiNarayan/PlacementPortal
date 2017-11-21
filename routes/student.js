module.exports = function(app){
   
    app.get('/', function (req, res) {
    console.log("User Requested Home Page");
      res.sendfile('app/pages/index.html');
    });
}
