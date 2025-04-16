
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  let score = 0;
  let totalscore = 10; 

  const correctAnswers = ['b', 'a', 'b', 'c', 'c', 'b', 'a', 'b', 'c', 'a'];

  for (let i = 1; i <= totalscore; i++) {
    const answer = document.querySelector('input[name="q' + i + '"]:checked');
    if (answer && answer.value === correctAnswers[i - 1]) {
      score++;
    }
  }

  document.getElementById('result').textContent = "You scored " + score + " out of " + totalscore + "!";
});


  