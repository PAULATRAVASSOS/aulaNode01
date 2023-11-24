class HomeController {
     static index(req, res) {
          res.json({
               nome: "Paula",
               sobrenome: 'Travassos'
          })
     }
}

module.exports = HomeController;