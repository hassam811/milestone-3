document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function validateForm() {
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("Please fill all required field correctly.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var Email = document.getElementById("Email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        //populate resume//
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayEmail").innerText = Email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
    }
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    // generate resume//
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("picture")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("phone")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("skils")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("education")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("experience")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
});
