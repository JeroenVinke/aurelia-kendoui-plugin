export class PdfExport {
  pdf = {
    fileName: 'Kendo UI Stock Chart Export.pdf',
    proxyURL: '//demos.telerik.com/kendo-ui/service/export'
  };

  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/stock/json/boeing-stock.json!json')
        .then(data => options.success(data));
      }
    },
    schema: {
      model: {
        fields: {
          Date: { type: 'date' }
        }
      }
    }
  };

  panes = [{
    title: 'Value'
  }, {
    name: 'volumePane',
    title: 'Volume',
    height: 150 // pixels
  }];

  valueAxis = [{
    line: {
      visible: false
    }
  }, {
    name: 'volumeAxis',
    pane: 'volumePane',
    visible: false
  }];

  series = [{
    type: 'candlestick',
    openField: 'Open',
    highField: 'High',
    lowField: 'Low',
    closeField: 'Close'

  }, {
    type: 'column',
    field: 'Volume',
    axis: 'volumeAxis',
    tooltip: {
      format: '{0:C0}'
    }
  }];

  navigator = {
    series: {
      type: 'area',
      field: 'Close'
    },
    select: {
      from: '2009/02/05',
      to: '2011/10/07'
    }
  }

  exportPDF() {
    this.stock.widget.saveAsPDF();
  }
}
