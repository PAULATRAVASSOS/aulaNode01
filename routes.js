const HomeController = require("./controllers/HomeController");
const SobreController = require("./controllers/SobreController");
const LivroController = require("./controllers/LivrosController");
const router = require("express").Router();

router.get("/", HomeController.index);

//  router.get('/imagens', SobreController.imagens)

// router.get('/sobre', SobreController.sobre)

// router.get('/perguntasFrequentes', SobreController.PerguntasFrequentes)

router.get("/livros/:id", LivroController.show);

router.get("/livros/", LivroController.index);

router.post("/livros/", LivroController.store);

router.put("/livros/:id", LivroController.update);

router.delete("/livros/:id", LivroController.delete);

module.exports = router;
