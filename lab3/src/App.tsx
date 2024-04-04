import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [items, setItems] = useState([]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleButtonClick = () => {
    // Afiseaza inputurile in consola
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("Input 3:", input3);
    // Afiseaza un alert
    alert('Datele au fost trimise!');
  };

  return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Form>
              <Form.Item label="Input 1">
                <Input value={input1} onChange={e => setInput1(e.target.value)} />
              </Form.Item>
              <Form.Item label="Input 2">
                <Input value={input2} onChange={e => setInput2(e.target.value)} />
              </Form.Item>
              <Form.Item label="Input 3">
                <Input value={input3} onChange={e => setInput3(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleButtonClick}>Submit</Button>
              </Form.Item>
            </Form>
            <div style={{ marginTop: '20px' }}>
              <Card title="Dynamic Content">
                {/* Map over items and display them */}
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
              </Card>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design Example</Footer>
      </Layout>
  );
};

export default App;

