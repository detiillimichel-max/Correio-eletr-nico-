export const getUserLocation = async () => {
  return new Promise((resolve) => {
    // Simulando busca de localização (BJ Perdões por padrão)
    setTimeout(() => resolve("Bom Jesus dos Perdões, SP"), 1000);
  });
};
