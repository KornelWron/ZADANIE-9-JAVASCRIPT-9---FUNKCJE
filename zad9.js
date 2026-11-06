 //Zad 1
function SUMA() {
    const a = parseInt(document.getElementById("suma-a").value);
    const b = parseInt(document.getElementById("suma-b").value);
    document.getElementById("suma-wynik").textContent = "Suma: " + (a + b);
  }
  
   //Zad 2
  function PODSTAWY() {
    const a = parseFloat(document.getElementById("podst-a").value);
    const b = parseFloat(document.getElementById("podst-b").value);
    let t = "Różnica: " + (a - b) + "\nIloczyn: " + (a * b);
    t += "\nIloraz: " + (b !== 0 ? a / b : "błąd – dzielenie przez zero");
    document.getElementById("podst-wynik").innerHTML = t.replace(/\n/g, "<br>");
  }
  
   //Zad 3
  function KALKULATOR() {
    const a = parseFloat(document.getElementById("kalk-a").value);
    const b = parseFloat(document.getElementById("kalk-b").value);
    const opcja = document.getElementById("kalk-op").value;
    let wynik;
    switch (opcja) {
      case "suma": wynik = a + b; break;
      case "różnica": wynik = a - b; break;
      case "iloczyn": wynik = a * b; break;
      case "iloraz": wynik = b !== 0 ? a / b : "błąd"; break;
    }
    document.getElementById("wynik").textContent = "Wynik: " + wynik;
  }
  
   //Zad 4
  function MAKS() {
    const a = parseFloat(document.getElementById("maks-a").value);
    const b = parseFloat(document.getElementById("maks-b").value);
    const c = parseFloat(document.getElementById("maks-c").value);
    document.getElementById("maks-wynik").textContent = "Największa: " + Math.max(a, b, c);
  }
  
   //Zad 5
  function WZROST() {
    const h = parseFloat(document.getElementById("wzrost-cm").value);
    let kat = h < 150 ? "niski" : h > 180 ? "wysoki" : "średni";
    document.getElementById("wzrost-wynik").textContent = "Kategoria: " + kat;
  }
  
   //Zad 6
  function BMI() {
    const wzrost = parseFloat(document.getElementById("bmi-wzrost").value);
    const waga = parseFloat(document.getElementById("bmi-waga").value);
    const bmi = waga / Math.pow(wzrost / 100, 2);
    let kom = bmi < 18.5 ? "za mało!" : bmi > 25 ? "za dużo!" : "OK!";
    document.getElementById("bmi-wynik").textContent = "BMI: " + bmi.toFixed(1) + " – " + kom;
  }
  
   //Zad 7
  function STARSZY() {
    const d1 = new Date(document.getElementById("urodzenie1").value);
    const d2 = new Date(document.getElementById("urodzenie2").value);
    let msg;
    if (d1 < d2) msg = "Osoba 1 jest starsza.";
    else if (d2 < d1) msg = "Osoba 2 jest starsza.";
    else msg = "Obie mają urodziny w tym samym dniu.";
    document.getElementById("starszy-wynik").textContent = msg;
  }
  
   //Zad 8
  function PRZESTEPNY() {
    const rok = parseInt(document.getElementById("rok-input").value);
    const przestepny = (rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0;
    const msg = przestepny ? rok + " jest rokiem przestępnym." : rok + " nie jest rokiem przestępnym.";
    document.getElementById("przestepny-wynik").textContent = msg;
    console.log(msg);
  }
  
   //Zad 9
  function SIŁA() {
    const haslo = document.getElementById("haslo").value;
    let sila;
    if (haslo.length === 0) {
      document.getElementById("sila-wynik").textContent = "";
      return;
    }
    if (haslo.length <= 4) sila = "słabe";
    else if (haslo.length <= 8) sila = "średnie";
    else sila = "mocne";
    if (!/\d/.test(haslo)) sila = "słabe";
    if (!/[A-Z]/.test(haslo)) sila = "słabe";
    if (!/[a-z]/.test(haslo)) sila = "słabe";
    if (!/[^a-zA-Z0-9]/.test(haslo)) sila = "słabe";
    document.getElementById("sila-wynik").textContent = "Hasło " + sila;
  }
  
 //Zad 10
  function TROJKAT() {
    const a = parseInt(document.getElementById("troj-a").value);
    const b = parseInt(document.getElementById("troj-b").value);
    const c = parseInt(document.getElementById("troj-c").value);
    const ok = a + b > c && a + c > b && b + c > a;
    const msg = ok ? "Da się utworzyć trójkąt." : "Nie da się utworzyć trójkąta.";
    document.getElementById("troj-wynik").textContent = msg;
    console.log(msg);
  }

  //Zad 11
  function SZYFR() {
    const tekst = document.getElementById("szyfr-tekst").value;
    let out = "";
    for (const z of tekst) {
      const k = z.charCodeAt(0);
      if (k >= 65 && k <= 90) out += String.fromCharCode(((k - 65 + 2) % 26) + 65);
      else if (k >= 97 && k <= 122) out += String.fromCharCode(((k - 97 + 2) % 26) + 97);
      else out += z;
    }
    document.getElementById("szyfr-wyj").textContent = out;
  }