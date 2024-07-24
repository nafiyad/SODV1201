document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const markInput = document.getElementById('mark');
    const resultDiv = document.getElementById('result');
    
    try {
            const mark = parseInt(markInput.value);
            
            if (isNaN(mark) || mark < 0 || mark > 100) {
                    throw new Error('Please enter a valid number between 0 and 100.');
            }
            
            let grade;
            let color;
            
            if (mark >= 85 && mark <= 100) {
                    grade = 'A';
                    color = 'green';
            } else if (mark >= 70 && mark <= 84) {
                    grade = 'B';
                    color = 'green';
            } else if (mark >= 60 && mark <= 69) {
                    grade = 'C';
                    color = 'green';
            } else if (mark >= 50 && mark <= 59) {
                    grade = 'D';
                    color = 'orange'; 
            } else {
                    grade = 'F';
                    color = 'red';
            }
            
            resultDiv.textContent = `Grade: ${grade}`;
            resultDiv.style.color = color;
    } catch (error) {
            resultDiv.textContent = error.message;
            resultDiv.style.color = 'red';
    }
});
