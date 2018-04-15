      promise = GetSheetDone.raw("1_nj0UytRrqEcIIUK7Nt1bRt3JPkXGrhyoyRIu_Akf8k", 1);
      sheetType = 'raw';
      // console.log(key, sheetNum, sheetType);
      //
      promise.then((data) => {
      console.log('Data');
      console.log(data);
      // $output.innerHTML = JSON.stringify(data);
      console.log(JSON.stringify(data));
      var myObject;
      myObject = JSON.stringify(data);
      var n = myObject.slice(39,-4);
      document.getElementById("output").innerHTML= n;
      // document.getElementById("output").innerHTML= JSON.stringify(data);
      console.log(String(myObject));
      var tempText = String(myObject);
      console.log(tempText.length);
      var firstPos = tempText.indexOf("[");
      var lastPos = tempText.lastIndexOf("]");
      console.log(firstPos);
      console.log(lastPos);
      var res = tempText.slice(firstPos+1, lastPos);
      console.log(res);
      });
      picx=[1,2,3,4,5]
      pall=[p1,p2]
      
      function makearray(){
      for(i=1;i<=5;i++){
      var xd=document.getElementById("output").innerHTML;
      var ss = xd.search("https");
      var se= xd.search("jpg");
      var val=xd.slice(ss,se+3);
      var rt=xd.slice(se+3,);
      document.getElementById("output").innerHTML=rt;
      picx[i]=val
      }
      document.getElementById("p").innerHTML=count;
      
      };
  
      var slideIndex = 0;
      var count=0;
      
      showSlides();
      
      function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none"; 
             
          }
          slideIndex++;
          count++;
          if(count>5){count=1;}
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
              document.getElementById("p"+count).src = picx[count];
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 3500); // Change image every 2 seconds
      }