const calcular = () => {
  const celsius = document.querySelector("#celsius").value;
  const resultado = document.querySelector("#resultado");

  const fahrenheit = celsius * 1.8 + 32;

  return (resultado.innerHTML = `A temperatura digitada é ${fahrenheit.toFixed(2)} °F`);
};