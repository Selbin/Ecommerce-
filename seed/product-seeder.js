var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping')

var products = [new Product({
    imagePath:'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw6a30f637/images/large/5c586c7d29e123fd15c55bc6.jpg?sw=220&sh=440&sm=fit',
    title:'Rainbow six siege',
    description:'awsome game!!! Number one fps game',
    price: 15
}),new Product(
{
    imagePath:'https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/12/AC3.jpg',
    title:'Assasians Creed',
    description:'simply lit',
    price: 13
}),new Product(
{
    imagePath:'https://s2.thcdn.com/productimg/960/960/10968071-1134395678186918.jpg',
    title:'Tomb raider',
    description:'Best of Tomb Raider,heavy graphics,open world game!!',
    price: 20
}),new Product(
{
    imagePath:'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-game-covers-2016/large/far-cry-primal-box-art.jpg?1384968217',
    title:'Far Cry',
    description:'One of the best open world game!!',
    price: 15
}),new Product(
{
    imagePath:'https://i.pinimg.com/236x/db/43/8b/db438bf8ceb5b06eda6a2cb9900e3a4b--sticker-vinyls.jpg',
    title:'Titan fall 2',
    description:'Great story and graphics',
    price: 10
}),new Product(
{
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Call_of_Duty_World_at_War_cover.png/220px-Call_of_Duty_World_at_War_cover.png',
    title:'Call Of Duty',
    description:'waarrrr!!!',
    price: 15
}),new Product(
{
    imagePath:'https://images-na.ssl-images-amazon.com/images/I/81d6JU6g1pL._AC_SL1500_.jpg',
    title:'Amazing spiderman',
    description:'best ever spidey game',
    price: 15
})];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}