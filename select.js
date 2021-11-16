




      function clickBtn1() {
        var arr = [];
        var wedding = document.getElementsByName("wedding");
        var greet = document.getElementById('greet');

        for (let i = 0; i < wedding.length; i++) {
            if (wedding[i].checked) { //(color2[i].checked === true)と同じ
                arr.push(wedding[i].value);
                alert( arr[0] );
            }

        }
      }





        for (let i = 0; i < arr.length; i++) {
            alert(arr[i]);
            greet.innerHTML =("s");
        }
        //   if(arr[i] == true){
        //         alert(2);
        //         greet.innerHTML =("s");
        //   }else{
        //       alert(111);
        //   }

      





  






      clickBtn1();




