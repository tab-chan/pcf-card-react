import * as React from 'react';

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Text
} from "@fluentui/react-components";
// Import ChevronUp and ChevronDown icons from Fluent UI React version 9
import { ChevronUp20Regular, ChevronDown20Regular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { ConsultaContratosResponse } from './ConsultaContratosResponse'; // Adjust the path as necessary


const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px' as any,
    padding: '20px' as any,
  },
  section: {
    marginBottom: '20px',
  },
  card: {
    margin: 'auto' as any,
    width: '720px',
    maxWidth: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


const HistoricoApolices: React.FC = () => {
  const styles = useStyles();
  const [showVida, setShowVida] = React.useState(true);
  const [showPrestamista, setShowPrestamista] = React.useState(true);
  const [apiResponse, setApiResponse] = React.useState<ConsultaContratosResponse>({ data: { contratos: [], mensagemApi: '' } });

  const toggleVida = () => setShowVida(!showVida);
  const togglePrestamista = () => setShowPrestamista(!showPrestamista);

  const vidaContratos = apiResponse.data.contratos.filter(c => c.documentos.ramo === 1);
  const prestamistaContratos = apiResponse.data.contratos.filter(c => c.documentos.ramo === 77);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.header}>
          <Text >Vida</Text>
          <Button icon={showVida ? <ChevronUp20Regular /> : <ChevronDown20Regular />} onClick={toggleVida} />
        </div>
        {showVida && vidaContratos.map((contrato, index) => (
          <Card key={index} className={styles.card}>
            <CardHeader
              image={<img src={resolveAsset("avatar_elvia.svg")} alt="Elvia Atkins avatar picture" />}
              header={<Body1><b>{contrato.segurado.nome_segurado}</b></Body1>}
              description={<Caption1>{contrato.documentos.nome_produto}</Caption1>}
            />
            <CardPreview
              logo={<img src={resolveAsset("docx.png")} alt="Microsoft Word document" />}
            >
              <img src={resolveAsset("doc_template.png")} alt="Preview of a Word document" />
            </CardPreview>
            <CardFooter>
              <Button icon={<ChevronUp20Regular fontSize={16} />}>Consultar apólice</Button>
              <Button icon={<ChevronUp20Regular fontSize={16} />}>Detalhes</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className={styles.section}>
        <div className={styles.header}>
          <Text >Prestamista</Text>
          <Button icon={showPrestamista ? <ChevronUp20Regular /> : <ChevronDown20Regular />} onClick={togglePrestamista} />
        </div>
        {showPrestamista && prestamistaContratos.map((contrato, index) => (
          <Card key={index} className={styles.card}>
            <CardHeader
              image={<img src={resolveAsset("avatar_elvia.svg")} alt="Elvia Atkins avatar picture" />}
              header={<Body1><b>{contrato.segurado.nome_segurado}</b></Body1>}
              description={<Caption1>{contrato.documentos.nome_produto}</Caption1>}
            />
            <CardPreview
              logo={<img src={resolveAsset("docx.png")} alt="Microsoft Word document" />}
            >
              <img src={resolveAsset("doc_template.png")} alt="Preview of a Word document" />
            </CardPreview>
            <CardFooter>
              <Button icon={<ChevronUp20Regular fontSize={16} />}>Consultar apólice</Button>
              <Button icon={<ChevronUp20Regular fontSize={16} />}>Detalhes</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoricoApolices;
