$(document).ready(function () {
  
  
  // add new user-row
      $(".add-newuser-btn").on("click", function () {
        let clonedRow = `
        <tr>
            <th scope="row">2</th>
            <td>
              <input class="form-control bg-dark  text-white " type="text" placeholder="user name" aria-label="user name">
            </td>
            <td>
              <input class="form-control bg-dark  text-white " type="text" placeholder="Emp-code" aria-label="Emp-code">
            </td>
            <td>
              <input class="form-control bg-dark text-white" type="email" type="text" placeholder="email" aria-label="email">
            </td>
            <td>
              <input class="form-control bg-dark text-white" type="password" type="text" placeholder="password" aria-label="password ">
            </td>
            <td>
              <input class="form-control bg-dark text-white"  type="text" placeholder="mac" aria-label="mac">
            </td>
            <td>
              <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              </div>
            </td>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            </div>
            </td>
           
           
              <td class="d-flex  justify-content-between ">
                <button class="btn btn-success btn-block w-100 me-3" onclick="saveRow(this)">save</button>
                <button class="btn btn-secondary btn-block delete-row-btn" onclick="deleteRow(this)">Cancel</button>
              </td>
            
          </tr>
        `
        $(".users-table-body").append(clonedRow);

  
      });
  
  // toggle edite user-row  btn 
  $(".edite-user-row").on("click", function () {
 

    if ($(this).hasClass("btn-warning")&&$(this).parent().parent().find("input ,select").attr('disabled')) {
      $(this).removeClass("btn-warning").addClass("btn-success").text("Save");
      $(this).siblings().removeClass("btn-danger").addClass("btn-secondary").text("cancel").addClass("editeing")
        $(this).parent().parent().find("input ,select").removeAttr('disabled');
    } else {
      $(this).addClass("btn-warning").removeClass("btn-success").text("Edite");
      $(this).siblings().addClass("btn-danger").removeClass("btn-secondary").text("Delete").removeClass("editeing")
      $(this).parent().parent().find("input ,select").attr('disabled', true);
    }
  })
  // 
  
  
      $(function () {
        deleteRow = function (that) {
          if ($(that).hasClass("editeing")) {
            return false
          }
          $(that).parent().parent().remove();
          
        };
      });

  
$(function () {
saveRow = function (that) {
if ($(that).hasClass("btn-success") ) {
  $(that).removeClass("btn-success").addClass("btn-warning").text("Edite");
  $(that).siblings().removeClass("btn-secondary").addClass("btn-danger").text("Delete").removeClass("editeing")
  
} else {
  $(that).addClass("btn-success").removeClass("btn-warning").text("Save");
  $(that).siblings().addClass("btn-secondary").removeClass("btn-danger").text("cancel").addClass("editeing")


}
  if ($(that).parent().parent().find("input ,select").attr('disabled')) {
    $(that).parent().parent().find("input ,select").removeAttr('disabled');
  } else {
    $(that).parent().parent().find("input ,select").attr('disabled', true);
  }
  
      };
  });
  





  
  
  
  
  
  
  
  
  
  
  
});