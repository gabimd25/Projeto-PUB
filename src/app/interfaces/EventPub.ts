export interface EventPub{
    _id : string,
    nome : string,
    foto: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    horaInicio: string,
    horaFim: string,
    agendados : [],
    isActive: boolean;
    dataCriacao: Date,
    dataAtualizacao: Date;
}