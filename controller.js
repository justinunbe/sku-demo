angular.module("app").controller("mainCtrl", function($scope) {
  var vm = $scope;

// variables
  vm.message = "SKU will show here";


// SKU generator function
  vm.newSku = function() {
    var text = "";
    var possible = "ABCDFGHJKLMNPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    vm.message = text;
  };

// copy SKU function
  vm.copy = function(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

  };

// success alert function
  $("#success-alert").hide();

  $("#myWish").click(function showAlert() {
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
      $("#success-alert").slideUp(500);
    });
  });

});
