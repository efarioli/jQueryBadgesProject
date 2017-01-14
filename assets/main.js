$(document).ready(function () {
  //your code will go here
  $ajax({
    url: 'https://www.codeschool.com/users/3217488.json',
    dataType: 'jsonp',
    success: function (response) {
      // handle response
    },
  });

});
