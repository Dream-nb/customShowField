const data = {
    columns: [
      {
        title: '序号', width: 100, dataIndex: 'index', render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品编号', dataIndex: 'productId', width: 180, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品名称', dataIndex: 'productName', width: 220, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品面值',
        dataIndex: 'parvalue',
        width: 180,
        render: (text) => {
          return (<span className='ellipsis'>{transferNum(text)}</span>);
        },
      },
      {
        title: '店铺商品价格',
        dataIndex: 'productPrice',
        width: 180,
        render: (text) => {
          return (<span className='ellipsis'>{transferNum(text, 4)}</span>);
        }
      },
      {
        title: '商品类别', dataIndex: 'productCategory', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品类型',
        dataIndex: 'productType',
        width: 150,
        render: (text) => {
          return renderProductType(text);
        },
      },
      {
        title: '店铺游戏id', dataIndex: 'gameId', width: 200, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '游戏厂商', dataIndex: 'gameMaker', width: 200, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品id', dataIndex: 'syProductId', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品名称', dataIndex: 'syProductName', width: 200, render: (text) => <span title={text} className='ellipsis'>{text}</span>
      },
      {
        title: '商品状态',
        dataIndex: 'productState',
        width: 150,
        render: (text) => {
          return (<span>{text ? '启用' : '禁用'}</span>);
        },
      },
      {
        title: '商品面值', dataIndex: 'syParvalue', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品价格', dataIndex: 'syPrice', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '风控成本', dataIndex: 'syFkCost', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
    ],
    newColumns: [
      {
        title: '序号', width: 100, dataIndex: 'index', render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品ID',
        width: 180,
        dataIndex: 'id',
      },
      {
        title: '店铺商品编号', dataIndex: 'productId', width: 180, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品名称', dataIndex: 'productName', width: 220, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '店铺商品面值',
        dataIndex: 'parvalue',
        width: 180,
        render: (text) => {
          return (<span className='ellipsis'>{transferNum(text)}</span>);
        },
      },
      {
        title: '店铺商品价格',
        dataIndex: 'productPrice',
        width: 180,
        render: (text) => {
          return (<span className='ellipsis'>{transferNum(text, 4)}</span>);
        }
      },
      {
        title: '商品类别', dataIndex: 'productCategory', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品类型',
        dataIndex: 'productType',
        width: 150,
        render: (text) => {
          return renderProductType(text);
        },
      },
      {
        title: '店铺游戏id', dataIndex: 'gameId', width: 200, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '游戏厂商', dataIndex: 'gameMaker', width: 200, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品id', dataIndex: 'syProductId', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品名称', dataIndex: 'syProductName', width: 200, render: (text) => <span title={text} className='ellipsis'>{text}</span>
      },
      {
        title: '商品状态',
        dataIndex: 'productState',
        width: 150,
        render: (text) => {
          return (<span>{text ? '启用' : '禁用'}</span>);
        },
      },
      {
        title: '商品面值', dataIndex: 'syParvalue', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '商品价格', dataIndex: 'syPrice', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '风控成本', dataIndex: 'syFkCost', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '手续费', dataIndex: 'charge', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '供货商名称', dataIndex: 'spName', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '供货商商品id', dataIndex: 'spProductId', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '供货商商品名称', dataIndex: 'spProductName', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '供货商商品面值', dataIndex: 'spParvalue', width: 150, render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '供货商商品价格', dataIndex: 'spProductPrice', render: (text) => <span className='ellipsis'>{text}</span>
      },
      {
        title: '运营商',
        dataIndex: 'mobileOperator',
        width: 200,
      }, {
        title: '归属地',
        dataIndex: 'mobileQCellCore',
        width: 200,
      }, {
        title: '是否积压',
        dataIndex: 'isOverstock',
        render: (text) => {
          return (<span>{text ? '是' : '否'}</span>);
        },
      }
    ],
  }
  
  export default data