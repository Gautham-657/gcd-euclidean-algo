function onNumbersChange() {
  console.log("Changed");

  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  let LCM = 0;

  let greater = num1,
    lesser = num2;

  if (num2 > num1) {
    greater = num2;
    lesser = num1;
  }

  let output = "";

  output += `
      <p>Greater: ${greater} | Lesser: ${lesser}</p>
    `;

  let found = false;
  let lastR = null;

  while (!found) {
    let q = Math.floor(greater / lesser);
    let r = greater % lesser;

    output += `
        <div style="margin-bottom: -16px;">${greater} = ${lesser} * q + r</div>
        <p>${greater} = ${lesser} * ${q} + ${r}</p>
      `;

    if (r === 0) {
      found = true;


      if (!lastR) {
        let hcf = 0
        let lcm = 0

        if (lesser === 0) {
          hcf = greater
        } else {
          hcf = lesser
        }

        lcm = (num1 * num2) / hcf

        output += `
            <h2>GCD: ${hcf}</h2>
            <h2>LCM: ${lcm}</h2>
          `;
      } else {
        const lcm = (num1 * num2) / lastR

        output += `
              <h2>GCD: ${lastR}</h2>
              <h2>LCM: ${lcm}</h2>
            `;
      }
    }

    lastR = r;
    greater = lesser;
    lesser = r;
  }



  document.getElementById("output").innerHTML = output;

}
