export const uploadPhoto = async (file: File) => {
  // Aqui futuramente conectaremos com o Firebase ou Supabase
  console.log("Preparando upload da foto:", file.name);
  return URL.createObjectURL(file); // Retorna um link temporário
};
