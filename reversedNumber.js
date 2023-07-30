
function main()
{
  let n, r;

  // Prompt the user for a number
  // Store the input as the value of n
  console.log("Give me a number and I will return it in reverse: ");
  n = parseInt(prompt());

  // While the value of n is greater than zero
  while(n > 0)
  {
    // Assign to r the value of the remainder when n is divided by 10
    r = n %10;

    // Prints out the reversed number to screen
    console.log(r);

    // n is assigned the value when n is divided by 10
    n = Math.floor(n/10);
  }

  return 0;
}

main();
