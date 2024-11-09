import AbstractController from "./AbstractController.js";
import { getBytes, getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import stream from 'stream'
export default class FileController extends AbstractController {
  constructor() {
    super();
    this.postFile = this.postFile.bind(this);
    this.getFile = this.getFile.bind(this);
  }

  async postFile(req, res, next) {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `files/${req.file.originalname}`
    );
    const metadata = {
      contentType: req.file.mimetype,
    };

    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metadata
    );

    const downloadURL = await getDownloadURL(snapshot.ref);
    
    res.send({
      message: "Arquivo enviado para o servidor",
      name: req.file.originalName,
      type: req.file.mimetype,
      downloadURL,
    });
  }

  async getFile(req, res, next) {
    const storage = getStorage();
    const filePath = ref(storage, `files/dados_${req.query.id}.pdf`);
    // const downloadURL = await getDownloadURL(filePath)
    try {
        // Obter o conteúdo do arquivo como um buffer
        const file = await getBytes(filePath);
        var fileContents = Buffer.from(file, "base64");
        var readStream = new stream.PassThrough();
        readStream.end(fileContents);
        res.setHeader('Content-Disposition', `attachment; filename="dados_${req.query.id}.pdf"`);
        res.setHeader('Content-Type', 'application/pdf');
        readStream.pipe(res);
        // const buffer = file;

        // // Definir os headers da resposta
        // res.setHeader('Content-Disposition', `attachment; filename="dados_${req.query.id}.pdf"`);
        // res.setHeader('Content-Type', 'application/pdf');

        // // Enviar o arquivo como resposta
        // res.send(buffer);
    } catch (error) {
        if (error.code === 'storage/object-not-found') {
            return res.status(404).send('Arquivo não encontrado');
        } else {
            console.error('Erro ao baixar o arquivo:', error);
            return res.status(500).send('Erro interno do servidor');
        }
    }
}
}
