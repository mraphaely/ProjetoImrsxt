import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/images/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const imageUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowed = ["image/png", "image/jpg", "image/jpeg"];
        if (!allowed.includes(file.mimetype)) {
            return cb(new Error("Arquivo inválido, envie uma imagem PNG/JPG"));
        }
        cb(null, true);
    }
});

export default imageUpload;
