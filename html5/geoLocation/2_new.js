function init() {
  navigator.geolocation.getCurrentPosition(succ, err, {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 1000
  });
}

function succ(e) {
  const lati = e.coords.latitude;
  const long = e.coords.longitude;
  const accu = e.coords.accuracy;

  if (accu > 60000) {
    document.getElementById("position").innerHTML = `太遠啦~`;
  } else {
    document.getElementById("position").innerHTML = `
        latitude : ${lati}<br>
        longtitude : ${long}<br>
        accuracy: ${accu}<br>
        `;
  }
}

function err(e) {
  document.getElementById("position").innerHTML = `
    錯誤代碼： ${e.code}<br>
    錯誤訊息： ${e.message}<br>
    `;
  alert(`
    錯誤代碼： ${e.code}\n
    錯誤訊息： ${e.message}
    `);
}

window.onload = init;
