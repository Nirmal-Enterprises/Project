homeService.$inject = [];
app.service('homeService', homeService);
function homeService(){
    var product = {};
    this.redirectData = function(data,category){
        if(data)
            sessionStorage.setItem('product_detail', JSON.stringify(data));
        else if(category)
            sessionStorage.setItem('category', JSON.stringify(category));
        
    }
    this.redirectDataObj=function(){
        var product = null;
        product = JSON.parse(sessionStorage.getItem('product_detail'));
        return product;
    }
    this.redirectDataCategory=function(){
        var category = null;
        category = JSON.parse(sessionStorage.getItem('category'));
        return category;
    }
    
}