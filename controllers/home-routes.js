const router = require("express").Router();

// render homepage handlebars
router.get("/", (req, res) => {
    res.render("homepage", {
    });

});

//render login pages
router.get('/login', (req, res) => {
  res.render('login');
});
//render signup handlebars
router.get('/signup', (req, res) => {
  res.render('signup');
});



module.exports = router;
