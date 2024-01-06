function drawPitch(background, lineColor, lineWidth, pithcWidth) {
  const canvas = document.getElementById("test-pitch");
  const context = canvas.getContext("2d");
  canvas.width = pithcWidth;
  const pitchHeight = Math.round(pithcWidth / 1.54);
  canvas.height = pitchHeight;

  canvas.style.background = background;

  //Linie końcowe
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  context.moveTo(5, 5);
  context.lineTo(pithcWidth - 5, 5);
  context.lineTo(pithcWidth - 5, pitchHeight - 5);
  context.lineTo(5, pitchHeight - 5);
  context.lineTo(5, 5);
  context.stroke();

  // linia środkowa
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  context.moveTo(pithcWidth / 2, 5);
  context.lineTo(pithcWidth / 2, pitchHeight - 5);
  context.stroke();

  //linie Szesnastek
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  //   context.moveTo(5, pitchHeight - (Math.round(pitchHeight / 2, 45) / 2));

  // Szesnastka wysokość   Y  Math.round(pitchHeight / 2, 45) / 2)

  context.moveTo(5, Math.round(pitchHeight / 2.45) / 2);
  context.lineTo(
    Math.round(pithcWidth / 6.36),
    Math.round(pitchHeight / 2.45) / 2
  );
  context.lineTo(
    Math.round(pithcWidth / 6.36),
    pitchHeight - Math.round(pitchHeight / 2.45) / 2
  );
  context.lineTo(5, pitchHeight - Math.round(pitchHeight / 2.45) / 2);

  context.moveTo(pithcWidth - 5, Math.round(pitchHeight / 2.45) / 2);
  context.lineTo(
    pithcWidth - Math.round(pithcWidth / 6.36),
    Math.round(pitchHeight / 2.45) / 2
  );
  context.lineTo(
    pithcWidth - Math.round(pithcWidth / 6.36),
    pitchHeight - Math.round(pitchHeight / 2.45) / 2
  );
  context.lineTo(
    pithcWidth - 5,
    pitchHeight - Math.round(pitchHeight / 2.45) / 2
  );

  //piatki

  context.moveTo(5, Math.round(pitchHeight / 1.36) / 2);
  context.lineTo(
    Math.round(pithcWidth / 19.1),
    Math.round(pitchHeight / 1.36) / 2
  );
  context.lineTo(
    Math.round(pithcWidth / 19.1),
    pitchHeight - Math.round(pitchHeight / 1.36) / 2
  );
  context.lineTo(5, pitchHeight - Math.round(pitchHeight / 1.36) / 2);

  context.moveTo(pithcWidth - 5, Math.round(pitchHeight / 1.36) / 2);
  context.lineTo(
    pithcWidth - Math.round(pithcWidth / 19.1),
    Math.round(pitchHeight / 1.36) / 2
  );
  context.lineTo(
    pithcWidth - Math.round(pithcWidth / 19.1),
    pitchHeight - Math.round(pitchHeight / 1.36) / 2
  );
  context.lineTo(
    pithcWidth - 5,
    pitchHeight - Math.round(pitchHeight / 1.36) / 2
  );

  context.stroke();

  // srodek boiska
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;

  context.arc(
    pithcWidth / 2,
    pitchHeight / 2,
    pithcWidth / 300,
    0,
    2 * Math.PI
  );
  context.fillStyle = lineColor;
  context.fill();

  context.stroke();
  // koło srodkowe
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  context.arc(
    pithcWidth / 2,
    pitchHeight / 2,
    pithcWidth / 11.47,
    0,
    2 * Math.PI
  );
  context.stroke();

  //karny1
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  context.arc(
    5 + Math.round(pithcWidth / 9.54),
    pitchHeight / 2,
    pithcWidth / 300,
    0,
    2 * Math.PI
  );
  context.fill();
  context.stroke();
  //karny2
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineWidth = lineWidth;
  context.arc(
    pithcWidth - Math.round(pithcWidth / 9.54) - 5,
    pitchHeight / 2,
    pithcWidth / 300,
    0,
    2 * Math.PI
  );
  context.fill();
  context.stroke();

  //   kola szesnastki1

  //   context.beginPath();
  //   context.strokeStyle = lineColor;
  //   context.lineWidth = lineWidth;
  //   context.arc(
  //     5 + Math.round(pithcWidth / 9.54),
  //     pitchHeight / 2,
  //     pithcWidth / 11.47,
  //     Math.PI / 4,
  //     (3 * Math.PI) / 4,
  //     false
  //   );

  context.stroke();
}

drawPitch("green", "white", 3, 540);
