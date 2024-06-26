function showTestInputs() {
    var testType = document.querySelector('input[name="testType"]:checked').value;
    if (testType === "bloodSugar") {
        document.getElementById("bloodSugarInputs").style.display = "block";
        document.getElementById("cbpInputs").style.display = "none";
    } else {
        document.getElementById("bloodSugarInputs").style.display = "none";
        document.getElementById("cbpInputs").style.display = "block";
    }
}

function showReport() {
    // Get form values
    var patientName = document.getElementById("patientName").value;
    var ageInYears = document.getElementById("ageInYears").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var visitDate = document.getElementById("visitDate").value;
    var referredByDr = document.getElementById("refferedByDr").value;
    var testType = document.querySelector('input[name="testType"]:checked').value;

   

    if (patientName==="" || ageInYears ==="" || visitDate ===""){
        alert(
            "Please enter required inputs"
        )
   }else{

   
        // Format the visit date as dd/mm/yyyy
        if (visitDate) {
            var visitDateObj = new Date(visitDate);
            var day = ("0" + visitDateObj.getDate()).slice(-2);
            var month = ("0" + (visitDateObj.getMonth() + 1)).slice(-2);
            var year = visitDateObj.getFullYear();
            visitDate = day + "/" + month + "/" + year;
        }

        // Set report values
        document.getElementById("reportPatientName").innerText = patientName;
        document.getElementById("reportAgeGender").innerText = ageInYears + "Y/" + gender;
        document.getElementById("reportVisitDate").innerText = visitDate;
        document.getElementById("reportDr").innerText = referredByDr;

        if (testType === "bloodSugar") {
            var fastingBloodSugar = document.getElementById("fastingBloodSugar").value;
            var postLanchBloodSugar = document.getElementById("postLanchBloodSugar").value;
            document.getElementById("reportFastingBloodSugar").innerText = fastingBloodSugar;
            document.getElementById("reportPostLanchBloodSugar").innerText = postLanchBloodSugar;
            document.getElementById("bloodSugarReport").style.display = "block";
            document.getElementById("cbpReport").style.display = "none";
        } else {
            var totalWBCCount = document.getElementById("totalWBCCount").value;
            var neutrophils = document.getElementById("neutrophils").value;
            var lymphocytes = document.getElementById("lymphocytes").value;
            var eosinophils = document.getElementById("eosinophils").value;
            var basophils = document.getElementById("basophils").value;
            var hemoglobin = document.getElementById("hemoglobin").value;
            var trbc = document.getElementById("trbc").value;
            var plateletCount = document.getElementById("plateletCount").value;

        
            if (neutrophils ==="" || lymphocytes === "" || eosinophils ===""){
                alert(
                    "Please enter required inputs"
                    )
                    }else{
                        
                        
                        var monocytes = 100 - (parseInt(neutrophils) + parseInt(lymphocytes) + parseInt(eosinophils))
                        
                        document.getElementById("reportTotalWBCCount").innerText = totalWBCCount + " cells/cumm";
                        document.getElementById("reportNeutrophils").innerText = neutrophils + " %";
                        document.getElementById("reportLymphocytes").innerText = lymphocytes + " %";
                        document.getElementById("reportEosinophils").innerText = eosinophils + " %";
                        document.getElementById("reportMonocytes").innerText = monocytes + " %";
                        document.getElementById("reportBasophils").innerText = basophils + " %";
                        document.getElementById("reportHemoglobin").innerText = hemoglobin + " gms";
                        document.getElementById("reportTRBC").innerText = trbc + " million/cumm";
                        document.getElementById("reportPlateletCount").innerText = plateletCount + " lakhs/cmm";
                        
                        
                        document.getElementById("bloodSugarReport").style.display = "none";
                        document.getElementById("cbpReport").style.display = "block";
                    }
        }

        // Show the report section
        document.getElementById("reportSection").style.display = "block";
    }
}

function printReport() {
   
    // Print the report

    window.print();
}
