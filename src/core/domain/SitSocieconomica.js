import AbstractEntity from './AbstractEntity.js';

export default class SitSocieconomica extends AbstractEntity {
    constructor({
        id = null,
        paciente_id = "",
        recebe_beneficio = false,
        aposentado = false,
        desempregado = false,
        moradia = "",
        renda_per_capita = "",
    } = {}) {
        super();
        this.id = id;
        this.paciente_id = paciente_id;
        this.recebe_beneficio = recebe_beneficio;
        this.aposentado = aposentado;
        this.desempregado = desempregado;
        this.moradia = moradia;
        this.renda_per_capita = renda_per_capita;
    }
}
