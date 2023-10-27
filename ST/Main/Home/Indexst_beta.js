let counts = setInterval(updated , 12 );
        let upto = 0;
            function updated(){
                let count = document.getElementById('Count');
                count.innerHTML = ++upto;
                if (upto == 139){
                    clearInterval(counts);
                }
            }
       
            