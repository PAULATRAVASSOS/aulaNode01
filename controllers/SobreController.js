const path = require('path');

class SobreController {
     static index(req, res) {
          res.sendfile(path.resolve('sobre.html'))
     }
}

module.exports = SobreController;