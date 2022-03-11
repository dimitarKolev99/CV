function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
  }

  let x = 0;
  let secondTime = false;

  
  function doScrolling(element, duration) {
    x++;
    var startingY = window.pageYOffset
    var elementY = getElementY(element)
    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
      var diff = targetY - startingY
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
    var start
  
    if (!diff) return
  
      // Bootstrap our animation - it will get called right before next frame shall be rendered.
      window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      // Elapsed miliseconds since start of scrolling.
      var time = timestamp - start
          // Get percent of completion in range [0, 1].
      var percent = Math.min(time / duration, 1)
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
      percent = easing(percent)
  
      window.scrollTo(0, startingY + diff * percent)
  
          // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }
  
 
  function collapseFunction(coll) {
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == 'block'){
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  }
  
  let y = 0;
  let yOff = window.pageYOffset;
  function a() {
    let button = document.getElementById('scrollMid');
    button.addEventListener('click', function () {
      
      // print "false" if direction is down and "true" if up
  console.log(this.oldScroll > this.scrollY);
  this.oldScroll = this.scrollY;

      if (x == 0) {
        doScrolling('#proekt', 1500);
             
      } else if (x == 1) {
        doScrolling('#kontakt', 1500);
        // button.style.visibility='hidden' 
      } else if (x == 2) {
        doScrolling('#proekt', 1500);
      } else if (x == 3) {
        doScrolling('#mega', 1500);
        x = 0;
      }
  });

    const coll = document.getElementsByClassName("collapsible");
    collapseFunction(coll);
  }

  window.onload = a;
  // Or simply:
  //doScrolling('#mytarget', 1000)