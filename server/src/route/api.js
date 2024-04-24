const express = require('express');
const router = express.Router()
const CrudController = require('../controller/CrudController')




router.post( '/Create', CrudController.Create)
router.get( '/Read', CrudController.Read)
router.get( "/UpdateById/:id", CrudController.UpdateById);
router.post( '/Update/:id', CrudController.Update)
router.get( '/Delete/:id', CrudController.Delete)


module.exports =  router;