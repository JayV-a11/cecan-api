import { Sequelize } from "sequelize";
import IPacienteRepository from "../../../../../core/repository/IPacienteRepository.js";
import CadastroModel from "../model/CadastroModel.js";
import PacienteModel from "../model/PacienteModel.js";
export default class PacienteRepository extends IPacienteRepository {
  constructor() {
    super(PacienteModel.init());
    this.sequelize = PacienteModel.sequelize;
  }

  async save(paciente) {
    return await this.connection.create({
      nome: paciente.nome,
      rg: paciente.rg,
      cpf: paciente.cpf,
      nascimento: paciente.nascimento,
      sus: paciente.sus,
      convenio: paciente.convenio,
      estado_civil: paciente.estado_civil,
      escolaridade: paciente.escolaridade,
      contato: paciente.contato,
      codigo: paciente.codigo,
    });
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }

  async findAll(defaultFilter) {
    const buildWhereClause = (filter) => {
      const clauses = [];

      if (filter.where) {
        for (const [key, value] of Object.entries(filter.where)) {
          clauses.push(`c.${key} ${typeof value === "boolean" ? '=' : 'ILIKE'} ${typeof value === "boolean" ? value : `'%${value}%'`}`);
        }
      }

      if (filter.custom) {
        if (filter.custom.Paciente) {
          for (const [key, value] of Object.entries(filter.custom.Paciente)) {
            clauses.push(`p.${key} ${typeof value === "boolean" ? '=' : 'ILIKE'} ${typeof value === "boolean" ? value : `'%${value}%'`}`);
          }
        }
        if (filter.custom.Endereco) {
          for (const [key, value] of Object.entries(filter.custom.Endereco)) {
            clauses.push(`e.${key} ${typeof value === "boolean" ? '=' : 'ILIKE'} ${typeof value === "boolean" ? value : `'%${value}%'`}`);
          }
        }
        if (filter.custom.QuadroClinico) {
          for (const [key, value] of Object.entries(
            filter.custom.QuadroClinico
          )) {
            clauses.push(`qc.${key} ${typeof value === "boolean" ? '=' : 'ILIKE'} ${typeof value === "boolean" ? value : `'%${value}%'`}`);
          }
        }
        if (filter.custom.SitSocieconomica) {
          for (const [key, value] of Object.entries(
            filter.custom.SitSocieconomica
          )) {
            clauses.push(`ss.${key} ${typeof value === "boolean" ? '=' : 'ILIKE'} ${typeof value === "boolean" ? value : `'%${value}%'`}`);
          }
        }
      }

      return clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
    };

    const whereClause = buildWhereClause(defaultFilter);
    const query = `
    SELECT c.*, p.*, e.*, qc.*, ss.*
    FROM "Cadastros" AS c
    LEFT JOIN "Pacientes" AS p ON p.codigo = c.id
    LEFT JOIN "Enderecos" AS e ON e.paciente_id = p.id
    LEFT JOIN "Quadros_clinicos" AS qc ON qc.paciente_id = p.id
    LEFT JOIN "Sit_socieconomica" AS ss ON ss.paciente_id = p.id
    ${whereClause}
    LIMIT ${defaultFilter.limit || 5};
  `;

    const [result] = await this.sequelize.query(query);
    return result;
  }

  async remove(paciente_id) {
    const Quadroquery = `DELETE FROM "Quadros_clinicos" WHERE paciente_id = ${paciente_id};`;
    const Endquery = `DELETE FROM "Enderecos" WHERE paciente_id = ${paciente_id};`;
    const Sitquery = `DELETE FROM "Sit_socieconomica" WHERE paciente_id = ${paciente_id};`;
    const Pacquery = `DELETE FROM "Pacientes" WHERE id = ${paciente_id};`;

    await this.sequelize.query(Quadroquery);
    await this.sequelize.query(Endquery);
    await this.sequelize.query(Sitquery);
    await this.sequelize.query(Pacquery);
    return true;
  }
}
