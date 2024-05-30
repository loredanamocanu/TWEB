import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
import { LaptopOutlined, MobileOutlined, CameraOutlined } from '@ant-design/icons';
import { useStore } from './useStore';
import LoginForm from './LoginForm';

const { Header, Content, Footer, Sider } = Layout;

const App = observer(() => {
    const store = useStore();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const initialUsers = [
            { username: 'utilizator1', password: 'parola1' },
            { username: 'utilizator2', password: 'parola2' },
            // Alte date de utilizator...
        ];
        localStorage.setItem('users', JSON.stringify(initialUsers));
        setUsers(initialUsers);
    }, []);

    const handleAddToCart = () => {
        const productData = {
            nume: store.formData.productName,
            brand: store.formData.productBrand,
            pret: parseFloat(store.formData.productPrice),
            categorie: '',
            descriere: '',
            stoc: 10,
            rating: 4.5
        };
        store.addProduct(productData);
        console.log('Product added to cart:', productData);
        alert('Produsul a fost adăugat în coș!');
    };

    const renderProducts = () => {
        const categoryKey = store.getCategoryKey();
        return store.products[categoryKey].map((product, index) => (
            <Card key={index} style={{ width: 450, marginRight: 20 }}>
                <img alt={product.nume} src={product.imagine} style={{ width: '100%', height: 'auto', marginBottom: 15 }} />
                <div style={{ padding: '16px 0' }}>
                    <h3>{product.nume}</h3>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Preț:</strong> ${product.pret}</p>
                </div>
            </Card>
        ));
    };

    const handleLogin = (username: string, password: string) => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            console.log('Login successful!');
            alert('Autentificare reușită!');
        } else {
            console.error('Invalid username or password.');
            alert('Nume de utilizator sau parolă incorectă.');
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={e => store.setSelectedCategory(e.key)}>
                    <Menu.Item key="1" icon={<LaptopOutlined />}>
                        Laptopuri
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MobileOutlined />}>
                        Telefoane
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CameraOutlined />}>
                        Camere foto
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, display: 'flex', overflowX: 'auto' }}>
                        {renderProducts()}
                    </div>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Form layout="vertical">
                            <Form.Item label="Nume produs">
                                <Input value={store.formData.productName} onChange={e => store.setFormData('productName', e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Brand">
                                <Input value={store.formData.productBrand} onChange={e => store.setFormData('productBrand', e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Preț">
                                <Input type="number" value={store.formData.productPrice} onChange={e => store.setFormData('productPrice', e.target.value)} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={handleAddToCart}>
                                    Adaugă în coș
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <LoginForm onLogin={handleLogin} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Gadget Store ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
});

export default App;