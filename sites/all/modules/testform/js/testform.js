(function($) {
  var episode_info;
  Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  }
  var dat = new Date();
  var dayminus3, dayminus2, dayminus1, day, dayplus1, dayplus2, dayplus3;
  var arg = 0;
  
  function dateRange(){
    dayminus3 = dat.addDays(arg-3).toISOString().split("T")[0];
    dayminus2 = dat.addDays(arg-2).toISOString().split("T")[0];
    dayminus1 = dat.addDays(arg-1).toISOString().split("T")[0];
    day = dat.addDays(arg).toISOString().split("T")[0];
    dayplus1 = dat.addDays(arg+1).toISOString().split("T")[0];
    dayplus2 = dat.addDays(arg+2).toISOString().split("T")[0];
    dayplus3 = dat.addDays(arg+3).toISOString().split("T")[0];
    
    localeminus3 = dat.addDays(arg-3).toDateString();
    localeminus2 = dat.addDays(arg-2).toDateString();
    localeminus1 = dat.addDays(arg-1).toDateString();
    locale = dat.addDays(arg).toDateString();
    localeplus1 = dat.addDays(arg+1).toDateString();
    localeplus2 = dat.addDays(arg+2).toDateString();
    localeplus3 = dat.addDays(arg+3).toDateString();
    
    $(".calendar_holder").empty();
    $(".calendar_holder").append(
      "<div class='row'>" + localeminus3 + "<ul id='" + dayminus3 + "'></ul></div>" +
      "<div class='row'>" + localeminus2 + "<ul id='" + dayminus2 + "'></ul></div>" +
      "<div class='row'>" + localeminus1 + "<ul id='" + dayminus1 + "'></ul></div>" +
      "<div class='row'>" + locale + "<ul id='" + day + "'></ul></div>" +
      "<div class='row'>" + localeplus1 + "<ul id='" + dayplus1 + "'></ul></div>" +
      "<div class='row'>" + localeplus2 + "<ul id='" + dayplus2 + "'></ul></div>" +
      "<div class='row'>" + localeplus3 + "<ul id='" + dayplus3 + "'></ul></div>"
    );
    episode_info.forEach(function(elem){
      if(elem['Episode Date'] == day){
        $("#" + day).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayminus1){
        $("#" + dayminus1).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayminus2){
        $("#" + dayminus2).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayminus3){
        $("#" + dayminus3).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayplus1){
        $("#" + dayplus1).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayplus2){
        $("#" + dayplus2).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }else if(elem['Episode Date'] == dayplus3){
        $("#" + dayplus3).append("<li>" + elem['Show Name'] + " - " + elem['Episode Name'] + "</li>");
      }
    });
  }
  
  
  
  Drupal.behaviors.testform = {
    attach: function (context, settings) {
      episode_info = settings.testform.testvar;
      // console.log(isoDate[0]);
      dateRange();
      $(".prev_btn").click(function(){
        arg -= 7;
        dateRange();
        console.log(day);
      });
      $(".today_btn").click(function(){
        arg = 0;
        dateRange();
        console.log(day);
      });
      $(".next_btn").click(function(){
        arg += 7;
        dateRange();
        console.log(day);
      });
    }
  };
  
})(jQuery);