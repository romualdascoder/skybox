$(document).ready(function() {
        TweenMax.set(".project-preview", { width: 0 });

        var tl = new TimelineLite();

        $(document)
          .on("mouseover", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 1, {
              width: "600px",
              ease: Expo.easeInOut
            });
          })
          .on("mouseout", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 0.5, {
              width: 0,
              ease: Expo.easeInOut
            });
          });
      });

      $(".navigation-link-1").hover(function() {
        $(".project-preview").css({ "background-image": "url(project1.gif)" });
      });

      $(".navigation-link-2").hover(function() {
        $(".project-preview").css({ "background-image": "url(project2.gif)" });
      });

      $(".navigation-link-3").hover(function() {
        $(".project-preview").css({ "background-image": "url(project3.gif)" });
      });

      $(".navigation-link-4").hover(function() {
        $(".project-preview").css({ "background-image": "url(project4.gif)" });
      });

      $(".navigation-link-5").hover(function() {
        $(".project-preview").css({ "background-image": "url()" });
      });

      $(".navigation-link-6").hover(function() {
        $(".project-preview").css({ "background-image": "url()" });
      });

     

     