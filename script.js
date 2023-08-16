document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("assessmentForm");
    const resultDiv = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Gather the selected values from the form
        const q1Value = parseInt(document.getElementById("q1").value);
        const q2Value = parseInt(document.getElementById("q2").value);
        const q3Value = parseInt(document.getElementById("q3").value);
        const q4Value = parseInt(document.getElementById("q4").value);
        const q5Value = parseInt(document.getElementById("q5").value);
        
        // Calculate the mental health score
        const totalScore = q1Value + q2Value + q3Value + q4Value + q5Value;

        // Display the result
        scoreElement.textContent = totalScore;
        resultDiv.classList.remove("hidden");
    });
});
