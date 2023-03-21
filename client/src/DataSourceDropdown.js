import React from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import CreateView from './CreateView';

function DataSourceDropdown(props) {
  const { dataSourceList, selectedDataSource, setSelectedDataSource } = props;

  const handleChange = (event) => {
    setSelectedDataSource(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="data-source-dropdown-label">Data Source</InputLabel>
      <Select
        labelId="data-source-dropdown-label"
        id="data-source-dropdown"
        value={selectedDataSource}
        label="Data Source"
        onChange={handleChange}
      >
        {dataSourceList.map((dataSource) => (
          <MenuItem key={dataSource.datasourceId} value={dataSource.datasourceId}>
            {dataSource.datasource_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DataSourceDropdown;
