$(document).ready(function(){
    $("#what1").click(function(){
      $("#p1").toggle();
      $("#img1").toggle();
    });
    $("#what2").click(function(){
        $("#p2").toggle();
        $("#img2").toggle();
      });
      $("#what3").click(function(){
        $("#p3").toggle();
        $("#img3").toggle();
      });
  });

$("#text1").hover(
  function(){
    $("#desktop").show();
  },
  function(){
    $("#desktop").hide();
  }
);
$("#text2").hover(
  function(){
    $("#color").show();
  },
  function(){
    $("#color").hide();
  }
)
$("#text3").hover(
  function(){
    $("#ontario").show();
  },
  function(){
    $("#ontario").hide();
  }
)
$("#text4").hover(
  function(){
    $("#blank").show();
  },
  function(){
    $("#blank").hide();
  }
)
$("#text5").hover(
  function(){
    $("#wishes").show();
  },
  function(){
    $("#wishes").hide();
  }
)
$("#text6").hover(
  function(){
    $("#icons").show();
  },
  function(){
    $("#icons").hide();
  }
)
$("#text7").hover(
  function(){
    $("#burned").show();
  },
  function(){
    $("#burned").hide();
  }
)
$("#text8").hover(
  function(){
    $("#giraffe").show();
  },
  function(){
    $("#giraffe").hide();
  }
)
$(document).ready(function(){
  var $form = $('#formAdd');
  $form.submit(function(){
      var id= $("#id").val();
      if (id.length < 12) {
          alert("INPUT ERROR");
          return false;
      }

      $.post($form.attr('action'), $(this).serialize(), function(response){
          alert("DATA SUCCESSFULLY ADDED");
      },'json');
      return false;
  });
});
function myFunction() {
  alert("Thank you for contacting Delani studios we shall get back to you shortly!");
}