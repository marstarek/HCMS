$(".pagination").find(".page-item").on("click", function () {
     
     let reqpageid = $(this).data("req");
     let x = document.getElementById(`${reqpageid}`)
   if (reqpageid) {
     $(x).siblings().css("display", "none");
     $(x).css("display", "block");

        
   }

})
function screen(event) {
     let obj=event.target.parentElement.parentElement
     html2canvas(obj).then(function (canvas) {
     var anchor = document.createElement("a");
     anchor.href = canvas.toDataURL("image/png");
     anchor.download = "Request.PNG";
     anchor.click();
          // obj.appendChild(canvas);
     }); 
}
$(".send-for-approval").on("click", function () {
$(this).css("display", "none");
$(this).siblings().css("display", "block");
})





