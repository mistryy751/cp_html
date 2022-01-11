        function VALIDATION() {
            var Firstname = document.forms["RegForm"]["FirstName"];
            var Lastname = document.forms["RegForm"]["LastName"];
            var EMail = document.forms["RegForm"]["EMail"];
            var Mobilenumber = document.forms["RegForm"]["Mobilenumber"];
            var Subject = document.forms["RegForm"]["Subject"];

            if (Firstname.value == "") {
                window.alert("Please enter your First name.");
                Firstname.focus();
                return false;
            }
            if (Lastname.value == "") {
                window.alert("Please enter your Last name.");
                Lastname.focus();
                return false;
            }

            if (EMail.value == "") {
                window.alert("Please enter a valid e-mail address.");
                EMail.focus();
                return false;
            }

            if (Mobilenumber.value == "") {
                window.alert("Please enter your Mobile number.");
                Mobilenumber.focus();
                return false;
            }

            if (Subject.selectedIndex < 1) {
                alert("Please enter your course.");
                Subject.focus();
                return false;
            }
            var loadFile = function(event) {
                var image = document.getElementById('output');
                image.src = URL.createObjectURL(event.target.files[0]);
            };

            return true, alert("You Have Sucessfully Registered!");
        }