const RestaurantController = require('../controllers/restaurants.controller'); 
module.exports=function(app){

    app.get('/api/restaurants/',RestaurantController.getAll),
    app.post('/api/restaurants/',RestaurantController.create),
    app.get('/api/restaurants/:id',RestaurantController.getOne),
    app.put('/api/restaurants/:id',RestaurantController.update),
    app.delete('/api/restaurants/:id',RestaurantController.delete)

}