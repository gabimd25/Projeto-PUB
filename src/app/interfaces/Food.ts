export interface Food{
    _id?: string;
    nome: string;
    foto: string;
    preco: number;
    descricao: string;
    isActive: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
}