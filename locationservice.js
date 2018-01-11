angular.module('locationservice',[]).service('viewLocation',function(){
    return {
        
     getConten:function(){
           $("#container").click(function(e){
  

        console.log(e.target.getAttribute("id"));
    }) 
     }
      
   
 
    }
})