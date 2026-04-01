export const selectPhoneContact = async () => {
  const props = ['name', 'tel'];
  const opts = { multiple: false };

  try {
    // Tenta abrir a agenda nativa do celular
    const contacts = await (navigator as any).contacts.select(props, opts);
    if (contacts.length > 0) {
      return {
        name: contacts[0].name[0],
        phone: contacts[0].tel[0]
      };
    }
  } catch (ex) {
    console.log("Agenda não suportada ou cancelada.");
    // Fallback: Se o celular não deixar, ele avisa
    alert("Para importar, selecione os contatos manualmente.");
  }
  return null;
};
