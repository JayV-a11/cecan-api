import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";
import excelJS from "exceljs";

export default class GenerateXLSXStrategy extends AbstractStrategy {
  constructor({ result = new Result(), pacienteService = null } = {}) {
    super();
    this.result = result;
    this.pacienteService = pacienteService;
  }

  async execute(data, result = this.result) {
    try {
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
      };

      const formatBoolean = (value) => (value ? "Sim" : "Não");

      const workbook = new excelJS.Workbook();
      const worksheet = workbook.addWorksheet("Pacientes");

      // Configurando colunas
      worksheet.columns = [
        { header: "Código", key: "codigo", width: 50 },
        { header: "Status", key: "status", width: 15 },
        { header: "Criado em", key: "created_at", width: 15 },
        { header: "Atualizado em", key: "updated_at", width: 15 },
        { header: "Nome do Paciente", key: "nome_paciente", width: 20 },
        { header: "RG", key: "rg", width: 12 },
        { header: "CPF", key: "cpf", width: 15 },
        { header: "Data de Nascimento", key: "nascimento", width: 15 },
        { header: "Número SUS", key: "sus", width: 18 },
        { header: "Estado Civil", key: "estado_civil", width: 15 },
        { header: "Escolaridade", key: "escolaridade", width: 18 },
        { header: "Contato", key: "contato", width: 15 },
        { header: "Nome Completo", key: "nome", width: 25 },
        { header: "Convênio", key: "convenio", width: 10 },
        { header: "CEP", key: "cep", width: 10 },
        { header: "Número", key: "numero", width: 10 },
        { header: "Cidade", key: "cidade", width: 15 },
        { header: "Bairro", key: "bairro", width: 15 },
        { header: "Estado", key: "estado", width: 10 },
        { header: "Rua", key: "rua", width: 30 },
        { header: "Complemento", key: "complemento", width: 15 },
        { header: "Recidiva", key: "recidiva", width: 10 },
        { header: "Metástase", key: "metastase", width: 10 },
        { header: "Realizou Cirurgia", key: "realizou_cirurgia", width: 15 },
        { header: "Exames de Prevenção", key: "realiza_exames_prevencao", width: 18 },
        { header: "Tratamento Outras Doenças", key: "realiza_tratamento_outras_doencas", width: 25 },
        { header: "Local do Tratamento", key: "local_tratamento", width: 20 },
        { header: "Médico Responsável", key: "medico_responsavel", width: 20 },
        { header: "Data do Diagnóstico", key: "data_diagnostico", width: 15 },
        { header: "Recebe Benefício", key: "recebe_beneficio", width: 15 },
        { header: "Aposentado", key: "aposentado", width: 12 },
        { header: "Desempregado", key: "desempregado", width: 12 },
        { header: "Moradia", key: "moradia", width: 15 },
        { header: "Renda per Capita", key: "renda_per_capita", width: 15 },
      ];

      // Adicionando linhas
      data.forEach((user) => {
        worksheet.addRow({
          codigo: user.codigo ? user.codigo : user.id ?? '-',
          status: user.status,
          created_at: formatDate(user.created_at),
          updated_at: formatDate(user.updated_at),
          nome_paciente: user.nome_paciente ?? 'Resposta Pendente',
          rg: user.rg ?? 'Resposta Pendente',
          cpf: user.cpf ?? 'Resposta Pendente',
          nascimento: formatDate(user.nascimento),
          sus: user.sus ?? 'Resposta Pendente',
          estado_civil: user.estado_civil ?? 'Resposta Pendente',
          escolaridade: user.escolaridade ?? 'Resposta Pendente',
          contato: user.contato ?? 'Resposta Pendente',
          nome: user.nome ?? 'Resposta Pendente',
          convenio: formatBoolean(user.convenio === "true"),
          cep: user.cep  ?? 'Resposta Pendente',
          numero: user.numero  ?? 'Resposta Pendente',
          cidade: user.cidade  ?? 'Resposta Pendente',
          bairro: user.bairro  ?? 'Resposta Pendente',
          estado: user.estado  ?? 'Resposta Pendente',
          rua: user.rua  ?? 'Resposta Pendente',
          complemento: user.complemento  ?? 'Resposta Pendente',
          recidiva: formatBoolean(user.recidiva),
          metastase: formatBoolean(user.metastase),
          realizou_cirurgia: formatBoolean(user.realizou_cirurgia),
          realiza_exames_prevencao: formatBoolean(user.realiza_exames_prevencao),
          realiza_tratamento_outras_doencas: formatBoolean(
            user.realiza_tratamento_outras_doencas
          ),
          local_tratamento: user.local_tratamento  ?? 'Resposta Pendente',
          medico_responsavel: user.medico_responsavel  ?? 'Resposta Pendente',
          data_diagnostico: formatDate(user.data_diagnostico),
          recebe_beneficio: formatBoolean(user.recebe_beneficio),
          aposentado: formatBoolean(user.aposentado),
          desempregado: formatBoolean(user.desempregado),
          moradia: user.moradia  ?? 'Resposta Pendente',
          renda_per_capita: user.renda_per_capita  ?? 'Resposta Pendente',
        });
      });

      // Estilizando cabeçalho
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF4F81BD" },
        };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
        cell.alignment = { vertical: "middle", horizontal: "center" };
      });

      // Estilizando células
      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell) => {
          cell.border = {
            left: { style: "thin" },
            right: { style: "thin" },
          };
          cell.alignment = { vertical: "middle", horizontal: "left" };
        });
      });

      const headerCount = worksheet.columns.length;
      const lastRow = worksheet.rowCount;

      worksheet.addTable({
        name: "TabelaPacientes",
        ref: `A1:${String.fromCharCode(64 + headerCount)}${lastRow}`,
        headerRow: true,
        style: {
          theme: "TableStyleMedium9",
          showRowStripes: true,
        },
        columns: worksheet.columns.map((col) => ({ name: col.header, filterButton: true })),
        rows: worksheet.getRows(2, lastRow - 1).map((row) => row.values.slice(1)),
      });

      result.data = workbook;
      result.status = 201;
    } catch (error) {
      result.status = 500;
      result.error.push(error.message);
    }

    return {
      entity: data,
      result,
    };
  }
}
