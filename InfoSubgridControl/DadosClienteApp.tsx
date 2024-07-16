import * as React from 'react';
import {
    FluentProvider,
    Badge,
    Label,
    Text,
    teamsLightTheme,
    makeStyles
} from '@fluentui/react-components';


export interface DadosClienteAppProps {
    agencia: string;
    conta: string;
    cpfCnpj: string;
    chpras: string;

    opcaoUra: string;
    servicoAtual: string;
    funcional: string;
    status: string,
}

const useStyles = makeStyles({
    dadosClienteApp: {
        // Add styles for dadosClienteApp
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        // Add more styles for header
    },
    content: {
        // Add styles for content
    },
    item: {
        display: 'flex', // Utiliza flexbox para alinhamento dos itens
        marginBottom: '0.5rem',
        alignItems: 'center', // Alinha verticalemnte os itens ao centro
    },
    label: {
        width: '100px', // Largura fixa para todas as labels
        marginRight: '1rem', // Espaço entre a label e o texto
    },
});

export const DadosClienteApp: React.FC<DadosClienteAppProps> = ({
    agencia,
    conta,
    cpfCnpj,
    opcaoUra,
    servicoAtual,
    funcional,
    status
}) => {
    const styles = useStyles();

    return (
        <FluentProvider theme={teamsLightTheme}>
            <div className={styles.dadosClienteApp}>
                <div className={styles.content}>
                    {[
                        { label: 'Agência:', value: agencia },
                        { label: 'Conta:', value: conta },
                        { label: 'CPF/CNPJ:', value: cpfCnpj },
                        { label: 'Opção URA:', value: opcaoUra },
                        { label: 'Serviço Atual:', value: servicoAtual },
                        { label: 'Funcional:', value: funcional },
                        {
                            label: 'Status:',
                            value: status === "Ativo" ? (
                                <Badge appearance="filled" color="success">Ativo</Badge>
                            ) : (
                                <Badge appearance="filled" color="danger">Inativo</Badge>
                            ),
                        },
                    ].map((item, index) => (
                        <div key={index} className={styles.item}>
                            <Label className={styles.label}>{item.label}</Label>
                            <Text>{item.value}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </FluentProvider>
    );
};
