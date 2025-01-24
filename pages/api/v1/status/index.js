function status(request, response) {
  return response.status(200).json({ teste: "TESTE TABNEWS OLÁ A TODOS" });
  // return response.status(200).send("TESTE TABNEWS OLÁ A TODOS" );
}

export default status;
