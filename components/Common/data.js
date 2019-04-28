const data = {
  columns : [
    {
        title:'序号',
        align: 'center',
        dataIndex:'index',
        className: 'sort-cell',
        render: (text, record, index) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            }
            return (
                <span>{index +1}</span>
            );
        },
    }, {
        title:'店铺订单号',
        width: 180,
        dataIndex:'orderNo',
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return (<span style={{ fontWeight: 'bold' }}>{text}</span>);
            } else {
                return (<span className="cell-nowrap" title={text} style={{ width: '164px' }}>{text}</span>);
            }
        },
    }, {
        title:'店铺商品名称',
        width: 230,
        dataIndex:'productName',
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            }
            return (
                <Tooltip title={text}>
                    <span className="showTooltip">{text}</span>
                </Tooltip>
            );
        },
    }, {
        title:'购买数量',
        width: 140,
        dataIndex:'buyNum',
    }, {
        title:'购买总价(元)',
        width: 140,
        dataIndex:'totalPrice',
    }, {
        title:'充值成功时间',
        dataIndex:'successTime',
        nowrap: true,
    }, {
        title:'买家IP',
        dataIndex:'buyerIp',
        width: 140,
        nowrap: true,
    }, {
        title:'假成功订单',
        dataIndex:'isSuccess',
        width: 140,
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            } else if (text == 1) {
                return (<span>{`是`}</span>);
            } else {
                return (<span>{`否`}</span>);
            }
        },
    }, {
        title:'订单耗时',
        width: 140,
        dataIndex:'elapsedTime',
    }, {
        title:'成本价(元)',
        width: 140,
        dataIndex:'costPrice',
    }, {
        title:'利润(元)',
        width: 140,
        dataIndex:'profit',
    }, {
        title:'操作',
        fixed:'right',
        renderEmpty: (record) => { return record.id === 'pageTotal' || record.id === 'allTotal' },
        renderContent: [
            {
                type: 'span',
                text: '详情',
                enCode: 'lr-details',
                config: {
                    className: 'operation-link'
                },
                clickfnname: 'handleShowDetail'
            }
        ],
    }
  ],
    newColumns: [
      {
        title:'序号',
        align: 'center',
        dataIndex:'index',
        className: 'sort-cell',
        render: (text, record, index) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            }
            return (
                <span>{index +1}</span>
            );
        },
    }, {
        title:'店铺订单号',
        width: 180,
        dataIndex:'orderNo',
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return (<span style={{ fontWeight: 'bold' }}>{text}</span>);
            } else {
                return (<span className="cell-nowrap" title={text} style={{ width: '164px' }}>{text}</span>);
            }
        },
    }, {
        title:'订单状态',
        width: 140,
        dataIndex:'orderStatus',
        nowrap: true,
    }, {
        title:'发货状态',
        width: 140,
        dataIndex:'shipmentsStatus',
        nowrap: true,
    }, {
        title: '买家账号',
        width: 140,
        dataIndex:'buyerNick',
    }, {
        title:'下单时间',
        dataIndex:'orderTime',
        width: 180,
        nowrap: true,
    }, {
        title:'充值账号',
        width: 150,
        dataIndex:'chargeAccount',
    }, {
        title:'归属地',
        width: 150,
        dataIndex:'mobileQCellCore',
    }, {
        title:'店铺商品编号',
        width: 140,
        dataIndex:'productId',
    }, {
        title:'店铺商品名称',
        width: 230,
        dataIndex:'productName',
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            }
            return (
                <Tooltip title={text}>
                    <span className="showTooltip">{text}</span>
                </Tooltip>
            );
        },
    }, {
        title:'购买数量',
        width: 140,
        dataIndex:'buyNum',
    }, {
        title:'购买总价(元)',
        width: 140,
        dataIndex:'totalPrice',
    }, {
        title:'订单总面值',
        width: 140,
        dataIndex:'parvalue',
    }, {
        title:'供货商品编号',
        width: 140,
        dataIndex:'spProductId',
    }, {
        title:'供货商品名称',
        width: 140,
        dataIndex:'supProductName',
    }, {
        title:'供货商名称',
        width: 140,
        dataIndex:'supMemberName',
    }, {
        title:'订单号',
        width: 160,
        dataIndex:'fuluOrderNo',
        nowrap: true,
    }, {
        title:'充值成功时间',
        dataIndex:'successTime',
        nowrap: true,
    }, {
        title:'买家IP',
        dataIndex:'buyerIp',
        width: 140,
        nowrap: true,
    }, {
        title:'假成功订单',
        dataIndex:'isSuccess',
        width: 140,
        nowrap: true,
        render: (text, record) => {
            if (record.id === 'pageTotal' || record.id === 'allTotal') {
                return null;
            } else if (text == 1) {
                return (<span>{`是`}</span>);
            } else {
                return (<span>{`否`}</span>);
            }
        },
    }, {
        title:'订单耗时',
        width: 140,
        dataIndex:'elapsedTime',
    }, {
        title:'成本价(元)',
        width: 140,
        dataIndex:'costPrice',
    }, {
        title:'利润(元)',
        width: 140,
        dataIndex:'profit',
    }, {
        title:'操作',
        fixed:'right',
        renderEmpty: (record) => { return record.id === 'pageTotal' || record.id === 'allTotal' },
        renderContent: [
            {
                type: 'span',
                text: '详情',
                enCode: 'lr-details',
                config: {
                    className: 'operation-link'
                },
                clickfnname: 'handleShowDetail'
            }
        ],
    }
    ],
  }
  
  export default data