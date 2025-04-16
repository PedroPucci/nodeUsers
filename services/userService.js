const cliente = require('../config/db');

// exports.getAllUsers = async (req, res) => {
//     try {
//         let { data } = await cliente.supabase.from('usuario').select('*');
//         res.send(data);
//     } catch(error) {
//         console.error(error);
//     }
// }

exports.getAllUsers = async () => {
  const { data, error } = await cliente.supabase.from("usuario").select("*");
  if (error) throw new Error(error.message);
  return data;
};

exports.getUserByName = async (name) => {
  const { data, error } = await cliente.supabase
    .from("usuario")
    .select("*")
    .ilike("nome", `%${name}%`);

  if (error) throw new Error(error.message);
  return data;
};

exports.createUser = async (userData) => {
  const { data, error } = await cliente.supabase
    .from("usuario")
    .insert([userData])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

exports.updateUser = async (id, userData) => {
  const { data, error } = await cliente.supabase
    .from("usuario")
    .update(userData)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

exports.deleteUser = async (id) => {
  const { data, error } = await cliente.supabase
    .from("usuario")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data.length > 0;
};


//module.exports = getAllUsers;