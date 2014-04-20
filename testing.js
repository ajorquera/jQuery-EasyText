$(document).ready(function() {
    var easyText1 = $('#easyText1').easyText(),
        easyText2 = $('#easyText2').easyText({
            minWidth:40,
            maxWidth:300,
            maxChars:60}),
        easyText3 = $('#easyText3').easyText(),    
        easyText4 = $('#easyText4').easyText({
            storage: 'localStorage'
        }),
        easyText5 = $('#easyText5').easyText({
            storage:'ajax',
            ajaxConfig:{
                url:'api',
                id:'1',
                GETCallback:function(){},
                UPDATEData:{},
                UPDATETemplate:'{value:<%=value%>}'
            }
        });
   

   
   $('.easyText3 button[id="next"]').on('click',function() {
       easyText3.easyText('getNextBackValue');
   });
   $('.easyText3 button[id="back"]').on('click',function() {
       easyText3.easyText('getNextBackValue',false);
   });  
   $('.easyText3 button[id="deleteStorage"]').on('click',function() {
       easyText3.easyText('deleteStorage');
   });     
   
   $('.easyText4 button[id="next"]').on('click',function() {
       easyText4.easyText('getNextBackValue');
   });
   $('.easyText4 button[id="back"]').on('click',function() {
       easyText4.easyText('getNextBackValue',false);
   });     
   $('.easyText4 button[id="deleteStorage"]').on('click',function() {
       easyText4.easyText('deleteStorage');
   }); 
   
   $('.easyText5 button[id="deleteStorage"]').on('click',function() {
       easyText5.easyText('deleteStorage');
   }); 
        

});
   