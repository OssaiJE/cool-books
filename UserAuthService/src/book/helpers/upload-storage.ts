// import { extname, join } from 'path';
import { diskStorage } from 'multer';

// Set storage engine

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + file.originalname;
    cb(null, filename);
  },
});
//   filter file uploads
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = {
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  fileFilter: fileFilter,
};
// export const storage = diskStorage({
//     destination: './uploads',
// });

export default upload;
