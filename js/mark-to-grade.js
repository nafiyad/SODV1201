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
      if (mark >= 85 && mark <= 100) {
          grade = 'A';
      } else if (mark >= 70 && mark <= 84) {
          grade = 'B';
      } else if (mark >= 60 && mark <= 69) {
          grade = 'C';
      } else if (mark >= 50 && mark <= 59) {
          grade = 'D';
      } else {
          grade = 'F';
      }
      
      resultDiv.textContent = `Grade: ${grade}`;
      resultDiv.style.color = 'green';
  } catch (error) {
      resultDiv.textContent = error.message;
      resultDiv.style.color = 'red';
  }
});