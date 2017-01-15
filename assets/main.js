$(function () {
  //your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3217488.json',
    dataType: 'jsonp',
    success: function (response) {
      // handle response
      addCourses(response.courses.completed);
      console.log(response);
    },
  });

  function addCourses(courses) {
    var $badges = $('#badges');
    courses.forEach(function (course) {
      var $course = $('<div />', {
        'class': 'course',
      }).appendTo($badges);

      console.log(course);

      $('<h3 />', {
        text: course.title,
      }).appendTo($course);
      $('<img />', {
        src: course.badge,
      }).appendTo($course);
      $('<a />', {
        href: course.url,
        'class': 'btn btn-primary',
        text: 'See Course',
        target: '_blank',
      }).appendTo($course);
    });
  };
  $('.container h1').append('<p>Ezequiel Farioli</p>');
});
