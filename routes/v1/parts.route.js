const express = require('express');
const partsController = require('../../controllers/parts.controllers');

const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("Parts Found");
// });

router.get(partsController.getAParts);

// router.post("/parts", (req, res) => {
//     res.send("Parts Posted");
// });


// Multiple method for same route 
router.route("/")
/**
   * @api {get} /parts All parts
   * @apiDescription Get all the parts
   * @apiPermission admin, regular user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
.get(partsController.getAllParts)
/**
   * @api {post} /parts All parts
   * @apiDescription save any part parts
   * @apiPermission admin, regular user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
.post(
    (req, res) => {
        res.send("Parts Posted");
    }
);


// exporting router 
module.exports = router;