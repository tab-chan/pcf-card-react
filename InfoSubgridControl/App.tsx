import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default as TabList } from './TabList';
import HistoricoApolices from './ApoliceContrato';
import { Default as DataTable } from "./DataTable";

import React = require('react');

const App = () => {
    return (
      <FluentProvider theme={webLightTheme}>
        <HistoricoApolices />
      </FluentProvider>
    );
};

export default App;