import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Chip from "@material-ui/core/Chip";

import Dashboard from "../Dashboard";
import MUIDataTable, { TableFilterList } from "mui-datatables";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const columns = ["Nome", "Empŕesa", "Cidade", "Estado"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Maceió", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "TS", "TX"],
  ["James Houston", "Test Corp", "ASDA", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "12312", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "ASD", "TX"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["James Houston", "Test Corp", "Dal12312las", "TX"],
  ["James Houston", "Test Corp", "DSA", "TX"],
  ["James Houston", "Test Corp", "ASD", "TX"],
  ["James Houston", "Test Corp", "123", "TX"],
  ["James Houston", "Test Corp", "TESTE", "TX"],
  ["James Houston", "Test Corp", "CLIMA", "TX"],
  ["James Houston", "Test Corp", "Sao jorge", "TX"],
];

const options = {
  filterType: "checkbox",
  textLabels: {
    body: {
      noMatch: "Desculpa, este usuário não foi encontrado",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column) => `Sort for ${column.label}`,
    },
    pagination: {
      next: "Proxima Página",
      previous: "Previous Page",
      rowsPerPage: "Rows per page:",
      displayRows: "of",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Download CSV",
      print: "Download PDF",
      viewColumns: "Visualizar Colunas",
      filterTable: "Filtrar Tabela",
    },
    filter: {
      all: "TODOS",
      title: "FILTROS",
      reset: "RESETAR",
    },
    viewColumns: {
      title: "Mostrar Colunas",
      titleAria: "Mostrar/Esconder Colunas da tabela",
    },
    selectedRows: {
      text: "Linhas Selecionadas",
      delete: "Deletar",
      deleteAria: "Deletar Linhas Selecionadas",
    },
  },
};

const CustomChip = ({ label, onDelete }) => {
  return (
    <Chip
      variant="outlined"
      color="secondary"
      label={label}
      onDelete={onDelete}
    />
  );
};

const CustomFilterList = (props) => {
  return <TableFilterList {...props} ItemComponent={CustomChip} />;
};

export default function Categorias() {
  const classes = useStyles();

  return (
    <Dashboard>
      <MUIDataTable
        title={"Tabela de usuários"}
        data={data}
        columns={columns}
        options={options}
        components={{ TableFilterList: CustomFilterList }}
      />
    </Dashboard>
  );
}
