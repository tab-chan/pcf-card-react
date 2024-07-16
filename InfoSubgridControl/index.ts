import { IInputs, IOutputs } from "./generated/ManifestTypes";
// eslint-disable-next-line no-undef
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import { createRoot, Root } from "react-dom/client";
import { createElement } from 'react';
import { DadosClienteApp, DadosClienteAppProps } from './DadosClienteApp';
// import App from './App';


export class InfoSubgridControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
    private _state: ComponentFramework.Dictionary;
    private _dataset: DataSet;
    private _root: Root;

    /**
     * Empty constructor.
     */
    constructor() {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        // Add control initialization code
        this._root = createRoot(container);
        this._notifyOutputChanged = notifyOutputChanged;
        this._container = container;
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {

        //  // Dados fictícios criados para teste
        //  const dadosFicticios = {
        //     agencia: "1234",
        //     conta: "000123456",
        //     cpfCnpj: "123.456.789-00",
        //     chpras: "1231241342342",
        //     opcaoUra: "Opção de URA selecionada",
        //     servicoAtual: "Serviço Atual",
        //     funcional: "Funcionalidade X",
        //     status: "Ativo"
        // };

        // // Supondo que DadosClienteAppProps espera uma estrutura de objeto com esses campos
        // const props: DadosClienteAppProps = {
        //     agencia: dadosFicticios.agencia,
        //     conta: dadosFicticios.conta,
        //     cpfCnpj: dadosFicticios.cpfCnpj,
        //     chpras: dadosFicticios.chpras,
        //     opcaoUra: dadosFicticios.opcaoUra,
        //     servicoAtual: dadosFicticios.servicoAtual,
        //     funcional: dadosFicticios.funcional,
        //     status: dadosFicticios.status
        // };




        context.webAPI.retrieveMultipleRecords("entityLogicalName", "?$select=fields").then(
            (response) => {
                const data = response.entities.map((entity) => {
                    // Mapeie sua entidade para o formato esperado no DadosClienteAppProps
                    return {
                        agencia: entity.agencia,
                        conta: entity.conta,
                        cpfCnpj: entity.cpfCnpj,
                        chpras: entity.chpras,
                        opcaoUra: entity.opcaoUra,
                        servicoAtual: entity.servicoAtual,
                        funcional: entity.funcional,
                        status: entity.status,
                    };
                });

                // Supondo que você só precise do primeiro registro para seu componente
                if (data.length > 0) {
                    const props: DadosClienteAppProps = data[0];
                    this.renderizarComponentizacaoComDados(props);
                }
            },
            (error) => {
                console.error(error);
                // Trate o erro conforme necessário
            }
        );

        //this.renderizarComponentizacaoComDados(props);
        // Render the DadosClienteApp component with the prepared props
        // this._root.render(createElement(DadosClienteApp));
    }

    private renderizarComponentizacaoComDados(dadosClienteAppProps: DadosClienteAppProps): void {
        // Render the DadosClienteApp component with the prepared props

        this._root.render(createElement(DadosClienteApp, dadosClienteAppProps));
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }

}
