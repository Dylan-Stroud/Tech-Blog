const router = require("express").Router();

// render homepage handlebars
router.get("/", (req, res) => {
    res.render("homepage", {
    });

});


//render signup handlebars
router.get('/signup', (req, res) => {
  res.render('signup');
});

//render listing
router.get('/listing', (req, res) => {
  res.render('listings');
});

module.exports = router;
