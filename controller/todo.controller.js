const ToDoServices = require("../services/todo.services");

exports.createTodo = async (req,res,next) => {
    try {
        const {userId,title,desc} = req.body;

        let todo = await ToDoServices.createTodo(userId,title,desc);

        res.json({
            status: true,
            success: todo
        });
    } catch (err) {
        next(err)
    }
}


exports.getUserTodo = async (req, res, next) => {
    try {
        const { userId } = req.query;

        let todo = await ToDoServices.getTododata(userId);

        res.json({
            status: true,
            success: todo
        });
    } catch (err) {
        next(err)
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
      const { id } = req.query;
  
      // Lakukan operasi penghapusan data berdasarkan id
      // Misalnya, menggunakan id untuk menghapus data dari database
      // Sesuaikan dengan logika penghapusan data Anda
  
      // Contoh sederhana:
      const deleted = await ToDoServices.deleteTodo(id);
  
      // Mengembalikan respons setelah penghapusan berhasil
      res.json({
        status: true,
        success: deleted,
      });
    } catch (err) {
      next(err);
    }
  };
  
