            var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
            var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            var now = new Date();
            document.write("" + " " + dayName[now.getDay()] + "," + " " + now.getDate() + " " + monName[now.getMonth()] + "");
