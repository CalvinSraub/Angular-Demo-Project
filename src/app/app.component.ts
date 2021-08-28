import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  data: any;

  columnDefs = [
    {
      headerName: 'Make',
      field: 'make',
      cellRenderer() {
        // return parseInt(params.node.id) + 1
        // const id = this.processId();
        return `<input type="checkbox"/>`;
      },
    },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
    enableRangeSelection: true,
    rowDragManaged: true,
    suppressAutoSize: true,
    suppressMovableColumns: true,
    allowDragFromColumnsToolPanel: true,
    pagination: true,
    defaultColDef: {
      editable: true, // 单元表格是否可编辑
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true, // 开启排序
      resizable: true, // 是否可以调整列大小，就是拖动改变列大小
      filter: true, // 开启刷选
    },
  };

  constructor() {
    this.data = {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFC756'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }

  processId() {
    return '666';
  }
}
