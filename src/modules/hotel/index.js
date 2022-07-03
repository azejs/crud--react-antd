/* eslint-disable no-undef */
import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
 


import {Button, Input, 
  Popconfirm, Table,Modal,Row, Col,Divider,Layout, Menu,Image } from 'antd';
 
  const { Header, Sider, Content } = Layout;
 
// eslint-disable-next-line import/first
import Notification from '../../components/notification/index'
// eslint-disable-next-line import/first
import Logo from '../../components/logo.js'
 
// eslint-disable-next-line import/first
import 'antd/dist/antd.css';
class Hotel extends React.Component {
  constructor(){
    super()
    this.state={
      visible: false ,
      openModal2:false,
      collapsed:false,
      data:{},
      nom:'',
      code:'',
      adresse:'',
      ville:'',
      notifaction:'',
      dataSource : [
       { 
        key:0,
       nom:"azeddine",
        code :"15246",
        adresse:"hay salam sale",
        ville: "sale"},
        {
         key:1,
         nom:"hamid",
        code :"10315",
        adresse:"hay houda rue 14 N 25 ",
        ville: "beni mellal"},
        {
         key:2,
         nom:"safae",
        code :"8015",
        adresse:"rihan ru e2 N 45 app 1",
        ville: ""}
      ]
    }
    }
  
    handleChangeMed = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    // onSumbit =()=>{
    //   const { name,code,adresse,ville}=this.state;

    // }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

 CancelModifier = e => {
    console.log(e);
    this.setState({
      openModal2: false,
    });
  };

  handleCollapsed = () => {
    console.log(e);
    this.setState({
      collapsed: !collapsed,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];

    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleOk = () => {
   let newData = {} ;
    const {nom ,code, adresse,ville,dataSource } = this.state;
    console.log("nom666666666666sdd",nom,code,adresse,ville);
       if( nom , code,adresse,ville){
         newData = {
          nom, 
          code ,
          adresse ,
          ville ,
        };
       }

    this.setState({
      dataSource: [...dataSource, newData],
      nom:'', 
      code:'',
      adresse:'',
      ville:'',
      notifaction :Notification('success',"il a été créé"),
    });
  };

  onModifier = () =>{
    const {data,dataSource} = this.state;
    console.log('data',data);
    console.log('dataSource',dataSource);
     const newExist = dataSource.map((et => {if (et.key === data.key){
       return data;
     }else{
       return et;
     }} ))
  console.log('newExist',newExist);
    this.setState({
      dataSource:[...newExist]});
     Notification('success',"il a été modifié");
  };
 
  ChangeModifier = e => {
    const {data} =this.state;
    const newData = {
      ...data,
      [data.target.name]: e.target.value,
    }
    this.setState({
  data:newData
    });
  };

  editModifier(key) {
    const { dataSource } = this.state;
 
    const data = dataSource.find(item => item.key === key);
    this.setState({
      openModal2: true,
      // eslint-disable-next-line no-underscore-dangle
      data,
    });
  }
 
  render() {
//  console.log('datasource render',this.state.dataSource)
//  console.log('datarender',this.state.data)
    const {nom,code,adresse,ville,visible, dataSource,openModal2,data,collapsed}= this.state;
 
    const defaultColumns = [
      {
        title: 'Nom',
        dataIndex: 'nom',
        width: '30%',
        editable: true,
      },
      {
        title: 'Code postal',
        dataIndex: 'code',
      },
      {
        title: 'Adresse',
        dataIndex: 'adresse',
      },
      {
        title: 'Ville',
        dataIndex: 'ville',
      },
      {
        title: 'Actions',
        dataIndex: 'action ',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <>
            <Button>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>  
          </Button> 
          <Button   onClick={() => this.editModifier(record.key)}>
          <a>Edit</a>
        </Button>  </>
            
          ) : null,
         
      },
    ];
    
    const columns = defaultColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
  
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          // handleSave,
        }),
      };
    });
    


    return (
 
      <Layout>
      <Sider  style={{  background: '#003366',}}trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
        <Logo collapsed={collapsed}/>
      
       
        </div> 
      <div></div>
        <Menu
        style={{  background: '#003366', paddingTop:'20px'}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          // className="site-layout-background"
          style={{
            padding: 0,
            background: '#fefefe',
          }}
        >
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick:() => this.setState({collapsed:!collapsed})
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
        <div>
        <Button
        onClick={this.showModal}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add New
        </Button>
        <Table
          // components={components}
          // onEditRow={id => this.editModifier(id)}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <Modal
        title="Ajouter hôtel"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        visible={visible}
        cancelText="Annuler"
        submitText="Enregistrer"
        width="70%"
      >
        <Divider orientation="left" plain>
               {` Les informations de l'hotêl`}
        </Divider>
        <Row style={{ margin: '3%' }}>
          <Col span={12}>
            Nom 
            <Input
              name="nom"
              placeholder="nom"
              style={{ width: '60%', marginLeft: '3%' }}
              onChange={e => this.handleChangeMed(e)}
              value={nom}
            />
          </Col>
          <Col span={12}>
          Code postal
            <Input
              type="text"
              placeholder="Code postal"
              style={{ width: '60%', marginLeft: '3%' }}
              name="code"
              onChange={e => this.handleChangeMed(e)}
               value={code}
            />
          </Col>
        </Row>
        <Row style={{ margin: '3%' }}>
          <Col span={12}>
            Adresse
            <Input
              name="adresse"
              placeholder=" Adresse"
              style={{ width: '60%', marginLeft: '3%' }}
            onChange={e => this.handleChangeMed(e)}
            value={adresse}
            />
          </Col>
          <Col span={12}>
          N° téléphone
          <Input
            name="ville"
            placeholder="ville"
            style={{ width: '60%', marginLeft: '3%' }}
            onChange={e => this.handleChangeMed(e)}
             value={ville}
          />
        </Col>
          
        </Row> 
        <Row style={{ margin: '3%' }}>
          
        </Row>
        
      </Modal>
      <Modal
      title="Modifier hôtel"
      onOk={this.onModifier}
      onCancel={this.CancelModifier}
      visible={openModal2}
      cancelText="Annuler"
      submitText="Modifier"
      width="70%"
    >
      <Divider orientation="left" plain>
             {` Les informations de l'hotêl`}
      </Divider>
      <Row style={{ margin: '3%' }}>
        <Col span={12}>
          Nom 
          <Input
            name="nom"
            placeholder="nom"
            style={{ width: '60%', marginLeft: '3%' }}
        onChange={e => {
          let newData ={
            ...data,
            nom : e.target.value
          }
          this.setState({data:newData})
        }}
            value={data?.nom}
          />
        </Col>
        <Col span={12}>
        Code postal
          <Input
            type="text"
            placeholder="Code postal"
            style={{ width: '60%', marginLeft: '3%' }}
            name="code"
            onChange={e => {
              let newData ={
                ...data,
                code : e.target.value
              }
              this.setState({data:newData})
            }}
             value={data?.code}
          />
        </Col>
      </Row>
      <Row style={{ margin: '3%' }}>
        <Col span={12}>
          Adresse
          <Input
            name="adresse"
            placeholder=" Adresse"
            style={{ width: '60%', marginLeft: '3%' }}
            onChange={e => {
              let newData ={
                ...data,
                adresse : e.target.value
              }
              this.setState({data:newData})
            }}
          value={data?.adresse}
          />
        </Col>
        <Col span={12}>
        N° téléphone
        <Input
          name="ville"
          placeholder="ville"
          style={{ width: '60%', marginLeft: '3%' }}
          onChange={e => {
            let newData ={
              ...data,
              ville : e.target.value
            }
            this.setState({data:newData})
          }}
           value={data?.ville}
        />
      </Col>
        
      </Row> 
      <Row style={{ margin: '3%' }}>
        
      </Row>
      
      </Modal>
      </div> 
        </Content>
      </Layout>
    </Layout>
  )
}  
}

export default Hotel;