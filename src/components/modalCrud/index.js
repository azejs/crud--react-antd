import React, { Component, PropTypes } from 'react';
import {
    Button,
    Modal,
    Row,
    Input,
    Col,
    InputNumber,
    Divider,
    DatePicker,
    Table as TableModal,
  } from 'antd';
class Modaladd extends Component {

    constructor(props){
        super(props);
        this.state={
          nom:'',
          code:'',
          adresse:'',
          ville:'',
        }
 
    };
    handleChangeMed = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    onSumbit =()=>{
      const { name,code,adresse,ville}=this.state;

    }
    render() {
      const {openModal,handleOk,handleCancel}=this.props;
      const {nom,code,adresse,ville}= this.state;
        return (
            <Modal
            title="Ajouter hôtel"
            visible={openModal}
            onOk={handleOk}
            onCancel={handleCancel}
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
                name="Ville"
                placeholder=" ville"
                style={{ width: '60%', marginLeft: '3%' }}
                onChange={e => this.handleChangeMed(e)}
                 value={ville}
              />
            </Col>
              
            </Row>
            <Row style={{ margin: '3%' }}>
              
            </Row>
            
          </Modal>
        );
    }
}

Modaladd.propTypes = {

};

export default Modaladd;