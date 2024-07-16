export interface Segurado {
    email: string | null;
    cpf_cnpj: string | null;
    nome_segurado: string;
    data_nascimento: string | null;
}

  export interface Documentos {
    numero_documento: string;
    tipo_documento: string;
    nome_seguradora: string;
    nome_produto: string;
    codigo_produto: number;
    codigo_familia: string;
    nome_familia: string;
    documento_ativo: boolean;
    inicio_vigencia: string;
    fim_vigencia: string;
    valor_parcela: number;
    segurado: boolean;
    ramo: number;
    cnpj_seguradora: string;
    pagamento_atrasado: boolean;
    numeros_processos_susep: string[];
    responsavel_financeiro: boolean;
  }
  
  export interface Contrato {
    segurado: Segurado;
    documentos: Documentos;
    id_contrato: string;
    nome_corretora: string;
    cnpj_corretora: string;
    processo_susep_corretora: string;
    origem: string;
  }
  
  export interface DataResponse {
    contratos: Contrato[];
    mensagemApi: string;
  }
  
  export interface ConsultaContratosResponse {
    data: DataResponse;
  }
  